var appKey = "ee6ddb4a548859b074fe9d14d14de471"
var searchMethod;

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=" + appKey, function(data) {
   console.log(data);
});

// (fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=ee6ddb4a548859b074fe9d14d14de471'))
//    .then(response)
//    .then(data => console.log(data))