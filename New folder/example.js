function locator() {
  var getLocate = document.getElementsById("locator");
  for (var i = 0; i < getLocate.length; i++) {
    getLocate.addEventListener("click", function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        getLocate.innerHTML = alert(
          "Geolocation is not supported by this browser."
        );
      }
      function showPosition(position) {
        getLocate.innerHTML =
          "Latitude: " +
          position.coords.latitude +
          "<br>Longitude: " +
          position.coords.longitude;
      }
    });
  }
}
function get(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open("GET", url);

    req.onreadystatechange = function() {
      if (req.status == 200 && req.readyState == 4) {
        resolve((req.response = locator()));
      } else {
        reject(Error(req.statusText));
      }
    };

    req.send();
  });
}

var weatherData = get(
  "http://api.openweathermap.org/data/2.5/weather?(lat={latitude},lon={longitude}"
);
return (document.getElementsById("weather-data").innerText = weatherData);
