'use strict';
/*
Axios is a Javascript library used to make HTTP requests from node.js 
or XMLHttpRequests from the browser that also supports the ES6 Promise API.
*/
const axios = require('axios');

module.exports.getWeather = async (event) => {

  const city = event.currentIntent.slots["City"];
  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=08e3ad0437282f0abefa56ee74ab56af";

  try{
    const response = await axios.get(url);
    const data = response.data;
    const answer = "The temparature is " + data.main.temp + "°C and humidity is " + data.main.humidity + "% and" + data.weather[0].description + " is expected."; 
    return {
      "sessionAttribute":{},
      "dialogAction":{
        "type": "Close",
        "fulfillmentState": "Fulfilled",
        "message": {
          "contentType": "PlainText",
          "content": answer
        }
      }
    }
  }
  catch(error){
    console.log(error);
  }  
};


