var request=require('request');
var geocoded=require('./utils/geocode.js');

var forcasted=require('./utils/forecst.js');





geocoded('Boston',(err,data)=>{
console.log(err);
console.log(data);

forcasted(data.latitude,data.longitude,(err,data)=>{
    console.log(err);
    console.log(data)  ;
  })
})
