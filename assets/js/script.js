var appKey = "dfd0be5259f9413b83c173406211906"
var searchMethod;

(fetch('https://api.weatherapi.com/v1/current.json?key=dfd0be5259f9413b83c173406211906&q=London&aqi=no'))
   .then(response)
   .then(data => console.log(data))