const app=require('./app');
const{port}=require('../src/settings.json');


app.listen(port,()=>{
    console.log('Server has been started!');
})