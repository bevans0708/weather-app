var searchBtn = document.getElementById('searchBtn')
var searchInput = document.getElementById('searchInput')
var appKey = "ee6ddb4a548859b074fe9d14d14de471"
var cardContainer = document.getElementById('cardContainer')
var forecastOne = document.getElementById('forecastCard')
var lat;
var lon;


// function geoCode() {
//    var geoCodeData;
//    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + searchInput + "&appid=" + appKey
//    ).then(function(response) {
//       if (response.ok) {
//          return response.json();
//       } else {
//          return promise.reject(response);
//       }
//    }).then(function (data) {
//       // geoCodeData = data;
//       console.log(data);
//       return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + data.lat + "&lon=" + data.lon + "&units=imperial&appid=" + appKey)
//    }).then(function(response) {
//       if (response.ok) {
//          return response.json();
//       } else {
//          return promise.reject(response);
//       }
//    }).then(function(weatherData) {
//       // console.log(geoCodeData);
//       console.log(weatherData);
//    }).catch(function (error) {
//       console.warn(error);
//    })
// };

// $.getJSON("http://api.openweathermap.org/geo/1.0/direct?q=" + searchInput.value +"&appid=" + appKey, function(data) {
//    var geoData;
//    geoData = data
//    console.log(geoData)

//    return $.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&appid=" + appKey, function(response) {
//       console.log(response);
//    });

// var day = moment.unix(1624734000);
// console.log(day);

function citySearch() {
      $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&units=imperial&appid=" + appKey, function (data) {
      searchInput.value = "";
      var cityName = data.name
      var temp = Math.floor(data.main.temp) + " \u00B0F";
      var description = data.weather[0].description
      var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      var wind = Math.floor(data.wind.speed) + " mi/hr"
      var humidity = data.main.humidity + " %"
      lat = data.coord.lat;
      lon = data.coord.lon;
      
      console.log(lat, lon);
      
      $("#cityHeader").append(cityName);
      $("#temperature").append(temp);
      $("#weatherDescriptionHeader").append(description);
      $("#iconImg").attr("src", icon);
      $("#windSpeed").append(wind);
      $("#humidity").append(humidity);
      
      $.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + appKey, function (data) {
         console.log(data);
         var uv = data.current.uvi
         // var dayConvert = moment.unix(data.daily[1].dt);
         // var convertedTime = moment().format("MMM Do YYYY");
         // console.log(dayConvert);
         // console.log(convertedTime);
         var datesArr = data.daily
         console.log(datesArr[2]);
         
         // $("#uvIndex").append(uv);
         // $("#day-1").append(converted);
         // $("#uvIndex").append(uv);
         // $("#uvIndex").append(uv);

         });
   });
   
}

// function oneCall () {
// }
   
   searchBtn.addEventListener('click', function() {

      citySearch();
   })
// searchBtn.addEventListener('click', geoCode)