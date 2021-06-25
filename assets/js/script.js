var searchBtn = document.getElementById('searchBtn')
var searchInput = document.getElementById('searchInput')
var appKey = "ee6ddb4a548859b074fe9d14d14de471"
var searchMethod;
var lat = "";
var lon = "";



function geoCode() {
   $.getJSON("http://api.openweathermap.org/geo/1.0/direct?q=" + searchInput.value +"&appid=" + appKey, function(data) {
      var latPull = data[0].lat;
      var lonPull = data[0].lon;
      window.lat = latPull;
      window.lon = lonPull;

      console.log(lat);
      console.log(lon);
      console.log(data)
   })
}

function citySearch() {
   $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&units=imperial&appid=" + appKey, function (data) {
      searchInput.value = "";
      var cityName = data.name
      var temp = Math.floor(data.main.temp) + " \u00B0F";
      var description = data.weather[0].description
      var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      var wind = Math.floor(data.wind.speed) + " mi/hr"
      var humidity = data.main.humidity + " %"
      
      console.log(data);
      
      $("#cityHeader").append(cityName);
      $("#temperature").append(temp);
      $("#weatherDescriptionHeader").append(description);
      $("#iconImg").attr("src", icon);
      $("#windSpeed").append(wind);
      $("#humidity").append(humidity);
      // $("#uvIndex").append(uv);
      
   });
   
   $.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat.value + "&lon=" + lon.value + "&appid=" + appKey, function (data) {
         console.log(data);
      });
   }
   
   
   searchBtn.addEventListener('click', citySearch);
   searchBtn.addEventListener('click', geoCode);
   
   