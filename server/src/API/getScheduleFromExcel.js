/**
 * For function we need schedule in range D-AZ
 * every group line must start from group title(column D).
 * In cafedra and subject field format is CafedraSubject or К.Cafedra.
 * For example: 22ООП, 1РХБЗ, К.3
 */

function getScheduleFromExcel(data) {
  let lesson_lines = [];
  let lesson_data = null;
  let course_and_date = null;
  let counter = 0;
  let schedule = [];
  let group;

  do {
    course_and_date = getCourceAndDate(data.slice(counter, counter + 2));
    if (course_and_date) {
      counter += 2;
    } else {
      if (Object.values(data[counter]).length === 1) {
        ++counter;
        continue;
      } else return schedule;
    }

    do {
      if (isLessonLine(data[counter])) {
        const line = Object.values(data[counter]);
        if (group !== line[0]) {
          if (group) {
            lesson_data = lessonData(
              lesson_lines,
              course_and_date.dates,
              course_and_date.school_week
            );
            schedule.push(...lesson_data);
          }
          group = line[0];
          lesson_lines = [];
        }
        lesson_lines.push(data[counter]);
        counter++;
      } else break;
    } while (true);
  } while (true);
}

function getCourceAndDate(data) {
  const first_object = Object.values(data)[0];
  const course_and_date = {};

  if (Object.keys(first_object)[0] === "A") {
    course_and_date.course = first_object.A;
    course_and_date.school_week = first_object.D;
    course_and_date.dates = [
      first_object.J,
      first_object.R,
      first_object.Z,
      first_object.AH,
      first_object.AP,
      first_object.AW,
    ];

    return course_and_date;
  } else {
    return null;
  }
}

function isLessonLine(data) {
  const keys = Object.keys(data);
  return keys[0] === "D";
}

function lessonData(data, dates, school_week) {
  let lesson1, lesson2, lesson3, lesson4;

  const monday = [];
  lesson1 = getLesson(data, "E", "F", 1, dates[0], school_week);
  lesson2 = getLesson(data, "G", "H", 2, dates[0], school_week);
  lesson3 = getLesson(data, "I", "J", 3, dates[0], school_week);
  lesson4 = getLesson(data, "K", "L", 4, dates[0], school_week);
  monday.push(lesson1, lesson2, lesson3);

  if (Object.keys(lesson4).length) {
    monday.push(lesson4);
  }

  const tuesday = [];
  lesson1 = getLesson(data, "M", "N", 1, dates[1], school_week);
  lesson2 = getLesson(data, "O", "P", 2, dates[1], school_week);
  lesson3 = getLesson(data, "Q", "R", 3, dates[1], school_week);
  lesson4 = getLesson(data, "S", "T", 4, dates[1], school_week);
  tuesday.push(lesson1, lesson2, lesson3);
  if (Object.keys(lesson4).length) {
    tuesday.push(lesson4);
  }

  const wednesday = [];
  lesson1 = getLesson(data, "U", "V", 1, dates[2], school_week);
  lesson2 = getLesson(data, "W", "X", 2, dates[2], school_week);
  lesson3 = getLesson(data, "Y", "Z", 3, dates[2], school_week);
  lesson4 = getLesson(data, "AA", "AB", 4, dates[2], school_week);
  wednesday.push(lesson1, lesson2, lesson3);
  if (Object.keys(lesson4).length) {
    wednesday.push(lesson4);
  }

  const thursday = [];
  lesson1 = getLesson(data, "AC", "AD", 1, dates[3], school_week);
  lesson2 = getLesson(data, "AE", "AF", 2, dates[3], school_week);
  lesson3 = getLesson(data, "AG", "AH", 3, dates[3], school_week);
  lesson4 = getLesson(data, "AI", "AJ", 4, dates[3], school_week);
  thursday.push(lesson1, lesson2, lesson3);
  if (Object.keys(lesson4).length) {
    thursday.push(lesson4);
  }

  const friday = [];
  lesson1 = getLesson(data, "AK", "AL", 1, dates[4], school_week);
  lesson2 = getLesson(data, "AM", "AN", 2, dates[4], school_week);
  lesson3 = getLesson(data, "AO", "AP", 3, dates[4], school_week);
  lesson4 = getLesson(data, "AQ", "AR", 4, dates[4], school_week);
  friday.push(lesson1, lesson2, lesson3);
  if (Object.keys(lesson4).length) {
    friday.push(lesson4);
  }

  const saturday = [];
  lesson1 = getLesson(data, "AS", "AT", 1, dates[5], school_week);
  lesson2 = getLesson(data, "AU", "AV", 2, dates[5], school_week);
  lesson3 = getLesson(data, "AW", "AX", 3, dates[5], school_week);
  lesson4 = getLesson(data, "AY", "AZ", 4, dates[5], school_week);
  saturday.push(lesson1, lesson2, lesson3);
  if (Object.keys(lesson4).length) {
    saturday.push(lesson4);
  }

  return [...monday, ...tuesday, ...wednesday, ...thursday, ...friday, ...saturday];
}

function getLesson(data, column1, column2, couple, date, school_week) {
  const model = {};

  for (let i = 0; i < data.length; i++) {
    if (Object.keys(data[i]).includes(column1) || Object.keys(data[i]).includes(column2)) {
      if (data[i][column1]) {
        switch (i) {
          case 0:
            const cafedra_and_subject = data[i][column1];

            const regex_cafedra = /\d+/g;
            const found_cafedra = cafedra_and_subject.match(regex_cafedra);

            if (found_cafedra) {
              model.cafedra = found_cafedra[0];
            } else {
              model.cafedra = null;
            }

            const regex_subject = /[a-zA-Zа-яА-ЯїЇєЄіІ\.]+/g;
            const found_subject = cafedra_and_subject.match(regex_subject);

            if (found_subject && found_subject[0] !== "К.") {
              model.subject = found_subject[0];
            } else {
              model.subject = null;
            }

            break;
          case 1:
            model.teacher1 = data[i][column1];
            break;
          case 2:
            model.teacher2 = data[i][column1];
            break;
          case 3:
            model.classroom1 = data[i][column1];
            break;
        }
      } else {
        switch (i) {
          case 0:
            model.cafedra = null;
            model.subject = null;
            break;
          case 1:
            model.teacher1 = null;
            break;
          case 2:
            model.teacher2 = null;

            break;
          case 3:
            model.classroom1 = null;
            break;
        }
      }

      if (data[i][column2]) {
        switch (i) {
          case 0:
            model.lesson_type = data[i][column2];
            break;
          case 1:
            model.teacher1_1 = data[i][column2];
            break;
          case 2:
            model.teacher2_1 = data[i][column2];
            break;
          case 3:
            model.classroom2 = data[i][column2];
            break;
        }
      } else {
        switch (i) {
          case 0:
            model.lesson_type = null;
            break;
          case 1:
            model.teacher1_1 = null;
            break;
          case 2:
            model.teacher2_1 = null;
            break;
          case 3:
            model.classroom2 = null;
            break;
        }
      }
    }
  }

  if (Object.keys(model).length !== 0) {
    model.couple = couple;
    model.date = date;
    model.group = data[0].D;
    model.school_week = school_week;
  }

  return model;
}

module.exports = getScheduleFromExcel;
