var searchBtn = document.getElementById('searchBtn')
var searchInput = document.getElementById('searchInput')
var appKey = "ee6ddb4a548859b074fe9d14d14de471"
var cardContainer = document.getElementById('cardContainer')
var forecastOne = document.getElementById('forecastCard')


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
         var dailyArr = data.daily
         var datesArr = [];
         for (var i = 1; i < dailyArr.length; i++) {
            datesArr[i] = dailyArr[i]["dt"]
         }   
         console.log(datesArr);
         $("#uvIndex").append(uv);

         var dayConvert = moment.unix(datesArr[1]).format("MMM Do");
         var temp = Math.floor(data.daily[1].temp.day) + " \u00B0F";
         var description = data.daily[1].weather[0].description
         var icon = "http://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png";
         $("#day-1").append(dayConvert)
         $("#day1Temp").append(temp)
         $("#day1Description").append(description)
         $("#day1Img").attr("src", icon)
         console.log(dayConvert)
         

         var dayConvert = moment.unix(datesArr[2]).format("MMM Do");
         var temp = Math.floor(data.daily[2].temp.day) + " \u00B0F";
         var description = data.daily[2].weather[0].description
         var icon = "http://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png";
         $("#day-2").append(dayConvert)
         $("#day2Temp").append(temp)
         $("#day2Description").append(description)
         $("#day2Img").attr("src", icon)
         console.log(dayConvert)

         var dayConvert = moment.unix(datesArr[3]).format("MMM Do");
         var temp = Math.floor(data.daily[3].temp.day) + " \u00B0F";
         var description = data.daily[3].weather[0].description
         var icon = "http://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png";
         $("#day-3").append(dayConvert)
         $("#day3Temp").append(temp)
         $("#day3Description").append(description)
         $("#day3Img").attr("src", icon)
         console.log(dayConvert)

         var dayConvert = moment.unix(datesArr[4]).format("MMM Do");
         var temp = Math.floor(data.daily[4].temp.day) + " \u00B0F";
         var description = data.daily[4].weather[0].description
         var icon = "http://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png";
         $("#day-4").append(dayConvert)
         $("#day4Temp").append(temp)
         $("#day4Description").append(description)
         $("#day4Img").attr("src", icon)
         console.log(dayConvert)

         var dayConvert = moment.unix(datesArr[5]).format("MMM Do");
         var temp = Math.floor(data.daily[5].temp.day) + " \u00B0F";
         var description = data.daily[5].weather[0].description
         var icon = "http://openweathermap.org/img/w/" + data.daily[5].weather[0].icon + ".png";
         $("#day-5").append(dayConvert)
         $("#day5Temp").append(temp)
         $("#day5Description").append(description)
         $("#day5Img").attr("src", icon)
         console.log(dayConvert)
         });
   });
   
}
   
   searchBtn.addEventListener('click', function() {
      citySearch();
      // window.location.reload(true);
   })