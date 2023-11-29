import { getlocation } from './utils.js'

const searchField = document.getElementById('search-field')
const temp = document.getElementById('temp')
const wind = document.getElementById('wind')
const humid = document.getElementById('humid')
const sight = document.getElementById('sight')
const feel = document.getElementById('feel')
const rain = document.getElementById('rain')

const element3 = document.getElementById('element3')

const generateForcast = (forecast) => {
  return `
        <div class="icon-data">
            <img
            src="./assets/image/cloudy.png"
            alt="cloud"
            style="height: 18px; width: 18px"
            />
            <span>
            <h3 id="low">${forecast?.temperature_low || 0}</h3>
            ˚/
            <h3 id="high">${forecast?.temperature_high || 0}</h3>
            ˚
            </span>
            <h4>${forecast?.date || 'date'}</h4>
        </div>
    `
}

const displayData = (location) => {
  if (!location) return
  console.log(location)

  temp.innerHTML = location?.current?.temperature
  wind.innerHTML = location?.current?.wind_speed
  humid.innerHTML = location?.current?.humidity
  sight.innerHTML = location?.current?.visibility || 0
  feel.innerHTML = location?.current?.feels_like || 0
  rain.innerHTML = location?.current?.precipitation || 0

  if (location.forecast?.length > 0) {
    element3.innerHTML = ''

    location?.forecast?.map(fore => {
      const mainData = generateForcast(fore)
      return (
        element3.innerHTML += mainData
      )
    })
  }
}

let timerId

const debounceFetch = (searchVal) => {
  return () => {
    clearTimeout(timerId)
    console.log('timmer cleared')

    timerId = setTimeout(() => {
      console.log('searching after 1s')
      const location = getlocation(searchVal)

      displayData(location)
    }, 1000)
  }
}

searchField.oninput = (e) => {
  const val = e.target.innerHTML
  const debounce = debounceFetch(val)
  debounce()
}
