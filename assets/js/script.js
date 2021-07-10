var searchBtn = document.getElementById('searchBtn')
var searchInput = document.getElementById('searchInput')
var appKey = "ee6ddb4a548859b074fe9d14d14de471"
var cardContainer = document.getElementById('cardContainer')
var forecastOne = document.getElementById('forecastCard')
var locationArr = [];

// Fetch function that is called when search button is clicked
function citySearch() {
      // This fetch gets the data called by the city searched 
      $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&units=imperial&appid=" + appKey, function (data) {
      searchInput.value = "";
      // variables that contain the data from the fetch call to be used later
      var cityName = data.name
      var temp = Math.floor(data.main.temp) + " \u00B0F";
      var description = data.weather[0].description
      var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      var wind = Math.floor(data.wind.speed) + " mi/hr"
      var humidity = data.main.humidity + " %"
      lat = data.coord.lat;
      lon = data.coord.lon;
      
      console.log(lat, lon);
      
      // Jquery statements to insert fetch data into the html section for Current Weather
      $("#cityHeader").append(cityName);
      $("#temperature").append(temp);
      $("#weatherDescriptionHeader").append(description);
      $("#iconImg").attr("src", icon);
      $("#windSpeed").append(wind);
      $("#humidity").append(humidity);
      
      // Fetch call that pulls up all other data such as UV and forecast
      $.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + appKey, function (data) {
         console.log(data);
         // more variable to store fetch data
         var uv = data.current.uvi
         var dailyArr = data.daily
         var datesArr = [];
         for (var i = 1; i < dailyArr.length; i++) {
            datesArr[i] = dailyArr[i]["dt"]
         }   
         console.log(datesArr);
         $("#uvIndex").append(uv);

         // below are variables and statements to insert the fetch data into each card in the forecast container of the HTML
         // I still need to create a loop to refactor the code to be more DRY.
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

// This function saves search values into local storage and creates buttons for user to click on to pull up recent searches
// still need to set up the "getItem" call 
var saveLocation = function() {
   var locationBtn = document.createElement("button");
   localStorage.setItem('Location', searchInput.value)
   locationBtn.innerHTML = searchInput.value
   $("#searchContainer").append(locationBtn)
   
}
   // Simple event listener to call the needed functions after the search button is clicked.
   // Still need to clear the page of old data after new search is called
   searchBtn.addEventListener('click', function() { 
      saveLocation();
      citySearch();
   })