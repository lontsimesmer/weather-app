const searchField = document.getElementById("search-field");
// const temp = document.getElementById("temp");
// const wind = document.getElementById("wind");
// const humid = document.getElementById("humid");
// const sight = document.getElementById("sight");
// const feel = document.getElementById("feel");
// const rain = document.getElementById("rain");
// const element3 = document.getElementById("element3");
const API_KEY = "b63c2cbd13be89101a87270b161a6cf0";

const getDetailsOnWeather = (cityName, lat, lon) => {
  const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(WEATHER_API_URL)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      const forcastDay = [];
      const fourDaysForcast = data.list.filter((forecast) => {
        const forcastDate = new Date(forecast.dt_txt).getDate();
        if (!forcastDate.includes(forcastDate)) {
          return forcastDay.push(forcastDate);
        }
      });
      console.log(fourDaysForcast);
    }).catch(() => {
      // console.error(e);
      // alert("Error occured during the fetching process");
    });
};

const getLocation = (cityName) => {
  if (!cityName) return;
  console.log(cityName);

  const GEOMETRIC_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`;

  fetch(GEOMETRIC_API_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (!data.length) return alert(`Nothing found for ${cityName}`);
      const { name, lat, lon } = data[0];
      getDetailsOnWeather(name, lat, lon);
    }).catch(() => {
      // alert('Error occured while fetching')
    });
};

// const generateForcast = (data_object) => {
//   return `
//         <div class="icon-data">
//             <img
//             src="./assets/images/cloudy.png"
//             alt="cloud"
//             style="height: 18px; width: 18px"
//             />
//             <span>
//             <h3 id="low">${data_object.min_temp}</h3>
//             ˚/
//             <h3 id="high">${data_object.max_temp}</h3>
//             ˚
//             </span>
//             <h4>${data_object.date || "date"}</h4>
//         </div>
//     `;
// };

// const getDay = (date) => {
//   return date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
// };

// const formDataObject = (data) => {
//   console.log(data);

//   const data_object = {};

//   data_object.city = data.city;

//   const weather_forecast_data = {};

//   const sorted_days = [getDay(new Date())];

//   data.list.forEach((weather) => {
//     const day = getDay(new Date(weather.dt_txt));

//     const data = {
//       wind: weather.wind.speed,
//       humid: weather.main.humidity,
//       visibility: weather.visibility,
//       time: new Date(weather.dt_txt).toLocaleTimeString(),
//       day,
//       dt_txt: weather.dt_txt,
//       feel: weather.main.feels_like,
//       pressure: weather.main.pressure,
//       grnd_level: weather.main.grnd_level,
//       sea_level: weather.main.sea_level,
//       min_temp: weather.main.temp_min,
//       max_temp: weather.main.temp_max,
//       temp: weather.main.temp,
//       description: weather.weather[0].description,
//     };

//     if (weather_forecast_data[day]) {
//       weather_forecast_data[day].push(data);
//     } else {
//       sorted_days.push(day);
//       weather_forecast_data[day] = [data];
//     }
//   });

//   data_object.forecast = weather_forecast_data;

//   console.log(data_object, sorted_days);

//   console.log(data_object);

//   const today = getDay(new Date());

//   displayData(data_object.forecast["TOM"][0]);

//   return data_object;
// };

let timerId;

const debounceFetch = (searchVal) => {
  return () => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      getLocation(searchVal);
    }, 1000);
  };
};

searchField.oninput = (e) => {
  const val = e.target.innerHTML;
  const debounce = debounceFetch(val);
  debounce();
};
