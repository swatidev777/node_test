var request=require('request');


var geocode=(address,callback)=>{
    var geocodeUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoic3dhdGktZGV2ZGF0dCIsImEiOiJjazFveDZ1ZHYwb3o1M21sOGM5aTIwMGg3In0.dz0MkKR7SpAtokp_p8wTTA';
    
    //json: true i.e json parse which is parsing json objcts to normal obj
    request({url:geocodeUrl,json:true},(err,res)=>{
        if(err){
    callback('unable to connect',undefined);
        }
        else if (res.body.features.length==0){
            callback('unable to jskjdidjidconnect',undefined);
        }
    else{
        callback(undefined,{
            latitude:res.body.features[0].center[0],
            longitude:res.body.features[0].center[1]
        })
    }
      
    
    
    })
    
    }

    module.exports=geocode;