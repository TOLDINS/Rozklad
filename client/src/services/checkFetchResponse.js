const checkFetchResponse = (response) => {
  //console.log(response, 'RESPONSE')
  if (!response.ok) throw Error(response.statusText);
  return response.json();
};

export default checkFetchResponse;
