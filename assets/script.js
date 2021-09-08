const form = document.querySelector("#search-weather");
      const recentSearches = document.querySelector("#recent-searches");
​
      const api_key = "a268c1c4b8c2e6800a103a50652727f3";
      // Geo code endpoint
      const geoEndP = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"
      
      // One call endpoint
      const endPointCall = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"
      
      function getWeatherByTown(town) {
          const params = new URLSearchParams({q: city, appid: api_key });

          fetch(geoEndP + params)
          .then((Response) => Response.json())
          .then(function(data) {
            const lat = data[0].lat;
            const lon = data[0].long;

            const params = new URLSearchParams ({
                lat: lat, 
                lon: lon, 
                units: imperial,
                appid: api_key,
            });

            return fetch(endPointCall + params);
          })
          .then((response) => response.jason())
          .then(function (data) {
              console.log(data);
          });
      }


      form.addEventListener("submit", function (e) {
        e.preventDefault();
        // Retrieve the city name from the input#city-name element
        // and we trim off any extra whitespace
        const city = document.querySelector("input#city-name").value.trim();
​
        // Fetch weather data
        // Where are we going to source our data
        //weather api is where to fetch() data
        // What does the api need to find our city
        // populate our weather details
      });
​
      recentSearches.addEventListener("click", function (e) {
        const target = e.target;
        if (!target.matches("button")) return;
        // Retrieve the city name from the button.textContent
        // Fetch weather data
        // populate our weather details
      });
​
      // window.navigator.geolocation.getCurrentPosition(function (geoData) {
      //   console.log(geoData);
      // });