var appKey = "dfd0be5259f9413b83c173406211906"
var searchMethod;

(fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=ee6ddb4a548859b074fe9d14d14de471'))
   .then(response)
   .then(data => console.log(data))