const searchField = document.getElementById('search-field')
const forcastDaysDiv = document.querySelector('.element3')
const mainCloud = document.querySelector('.feather-1')
const temp = document.getElementById('temp')
const wind = document.getElementById('wind')
const humid = document.getElementById('humid')
const sight = document.getElementById('sight')
const feel = document.getElementById('feel')
const rain = document.getElementById('rain')

const API_KEY = 'b63c2cbd13be89101a87270b161a6cf0'

const displayData = (weatherItems) => {
  const getDay = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()
  }

  mainCloud.innerHTML = weatherItems.weather[0].icon
  temp.innerHTML = Math.round(weatherItems.main.temp - 273.15)
  feel.innerHTML = (weatherItems.main.feels_like - 273.15).toFixed(2)
  sight.innerHTML = (weatherItems.wind.deg - 273.15).toFixed(2)
  wind.innerHTML = Math.round(weatherItems.wind.speed)
  rain.innerHTML = weatherItems?.rain * 100 || 0
  humid.innerHTML = weatherItems.main.humidity
  return `
    <div class="icon-data">
        <img
          src="https://openweathermap.org/img/wn/${
            weatherItems.weather[0].icon
          }@2x.png"
          alt="cloud"
          style="height: 32px; width: 32px"
        />
        <span>
          <h3 id="low">${(weatherItems.main.temp_min - 273.15).toFixed(2)}</h3>
          ˚/
          <h3 id="high">${(weatherItems.main.temp_max - 273.15).toFixed(2)}</h3>
          ˚
        </span>
        <h4>${getDay(new Date(weatherItems.dt_txt))}</h4>
    </div>
  `
}

const getDetailsOnWeather = (_cityName, lat, lon) => {
  const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`

  fetch(WEATHER_API_URL)
    .then((res) => res.json())
    .then((data) => {
      const oneDayForcast = []
      const fourDaysForcast = data.list.filter((forecast) => {
        const forcastDate = new Date(forecast.dt_txt).getDate()
        if (!oneDayForcast.includes(forcastDate)) {
          return oneDayForcast.push(forcastDate)
        } else {
          return null
        }
      })
      console.log(fourDaysForcast)

      searchField.value = ''
      forcastDaysDiv.innerHTML = ''

      fourDaysForcast.forEach((weatherItems) => {
        forcastDaysDiv.insertAdjacentHTML(
          'beforeend',
          displayData(weatherItems)
        )
      })
    })
    .catch(() => {
      console.error('Error occured during the fetching process!')
    })
}

const getLocation = (cityName) => {
  if (!cityName) return
  console.log(cityName)

  const GEOMETRIC_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`

  fetch(GEOMETRIC_API_URL)
    .then((res) => res.json())
    .then((data) => {
      if (!data.length) return console.error(`Nothing found for ${cityName}`)
      const { name, lat, lon } = data[0]
      getDetailsOnWeather(name, lat, lon)
    })
    .catch(() => {
      console.error('Error occured during the fetching process!')
    })
}

let timerId

const debounceFetch = (searchVal) => {
  return () => {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      getLocation(searchVal)
    }, 1000)
  }
}

searchField.oninput = (e) => {
  const val = e.target.innerHTML
  const debounce = debounceFetch(val)
  debounce()
}
