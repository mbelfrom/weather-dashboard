const form = document.querySelector("#search-weather");
      const recentSearches = document.querySelector("#recent-searches");

      const api_key = "ffd5329a9153f327d4d05b0f18cb9022";
      // Geo code endpoint
      const geoEndP = "http://api.openweathermap.org/geo/1.0/direct?"
      
      // One call endpoint
      const endPointCall = "https://api.openweathermap.org/data/2.5/onecall?"
      
      function getWeatherByTown(city) {
          const params = new URLSearchParams({q: city, appid: api_key });
            console.log(geoEndP + params);
          fetch(geoEndP + params)
          .then((Response) => Response.json())
          .then(function(data) {
                console.log(data);
            const lat = data[0].lat;
            const lon = data[0].lon;
                  console.log(lat, lon);
            const params = new URLSearchParams ({
                lat: lat, 
                lon: lon, 
                units: 'imperial',
                appid: api_key,
            });

            return fetch(endPointCall + params);
          })
          .then((response) => response.json())
          .then(function (data) {
              console.log(data);
              console.log(data.current.temp);
          });
      }


      form.addEventListener("submit", function (e) {
        e.preventDefault();
        // Retrieve the city name from the input#city-name element
        // and we trim off any extra whitespace
        const city = document.querySelector("#city-name").value.trim();
            getWeatherByTown(city) 
        // Fetch weather data
        // Where are we going to source our data
        //weather api is where to fetch() data
        // What does the api need to find our city
        // populate our weather details
      });

      recentSearches.addEventListener("click", function (e) {
        const target = e.target;
        if (!target.matches("button")) return;
        // Retrieve the city name from the button.textContent
        // Fetch weather data
        // populate our weather details
      });

      // window.navigator.geolocation.getCurrentPosition(function (geoData) {
      //   console.log(geoData);
      // });

      //