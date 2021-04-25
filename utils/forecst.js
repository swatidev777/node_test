var request=require('request');
var forecast=(latitude,longitude,callback)=>{
// //json: true i.e json parse which is parsing json objcts to normal obj
var url='https://api.darksky.net/forecast/5850407c9e28d7bde6f2e7d2a76ac3cf/'+latitude+','+longitude;
 request({url:url,json:true},(err,res)=>{
     if(err){

        callback('unable to connect',undefined);
     }else if(res.body.currently==0){

        callback('unable to connect  input parameters',undefined);
     }else{

callback(undefined, res.body.daily.data[0].summary);
     }

 })
}

module.exports=forecast;