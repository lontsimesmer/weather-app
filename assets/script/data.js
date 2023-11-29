export const locations = [
  {
    name: 'London',
    country: 'United Kingdom',
    current: {
      temperature: 11,
      condition: 'Partly cloudy',
      wind_speed: 3.8,
      humidity: 82
    },
    forecast: [
      {
        date: 'SUN',
        temperature_high: 13,
        temperature_low: 9,
        condition: 'Sunny'
      },
      {
        date: 'MON',
        temperature_high: 15,
        temperature_low: 11,
        condition: 'Mostly sunny'
      },
      {
        date: 'TUES',
        temperature_high: 17,
        temperature_low: 12,
        condition: 'Cloudy with a chance of showers'
      },
      {
        date: 'WED',
        temperature_high: 19,
        temperature_low: 10,
        condition: 'Cloudy'
      }
    ]
  },
  {
    name: 'New York City',
    country: 'United States',
    current: {
      temperature: 16,
      condition: 'Sunny',
      wind_speed: 5,
      humidity: 70
    },
    forecast: [
      {
        date: 'MON',
        temperature_high: 18,
        temperature_low: 14,
        condition: 'Mostly sunny'
      },
      {
        date: 'TUES',
        temperature_high: 20,
        temperature_low: 16,
        condition: 'Sunny'
      },
      {
        date: 'WED',
        temperature_high: 22,
        temperature_low: 18,
        condition: 'Mostly sunny'
      },
      {
        date: 'THURS',
        temperature_high: 24,
        temperature_low: 20,
        condition: 'Sunny'
      }
    ]
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    current: {
      temperature: 23,
      condition: 'Mostly sunny',
      wind_speed: 7,
      humidity: 65
    },
    forecast: [
      {
        date: 'TUES',
        temperature_high: 25,
        temperature_low: 21,
        condition: 'Sunny'
      },
      {
        date: 'WED',
        temperature_high: 27,
        temperature_low: 23,
        condition: 'Mostly sunny'
      },
      {
        date: 'THURS',
        temperature_high: 29,
        temperature_low: 25,
        condition: 'Sunny'
      },
      {
        date: 'FRI',
        temperature_high: 19,
        temperature_low: 10,
        condition: 'Cloudy'
      }
    ]
  },
  {
    name: 'Sydney',
    country: 'Australia',
    current: {
      temperature: 22,
      condition: 'Sunny',
      wind_speed: 5,
      humidity: 70,
      feels_like: 20,
      visibility: 10,
      precipitation: 15
    },
    forecast: [
      {
        date: 'WED',
        temperature_high: 24,
        temperature_low: 18,
        condition: 'Mostly sunny',
        sunrise: '05:33',
        sunset: '18:06'
      },
      {
        date: 'THURS',
        temperature_high: 26,
        temperature_low: 20,
        condition: 'Sunny'
      },
      {
        date: 'FRI',
        temperature_high: 28,
        temperature_low: 22,
        condition: 'Mostly sunny'
      },
      {
        date: 'SAT',
        temperature_high: 30,
        temperature_low: 24,
        condition: 'Very sunny'
      }
    ]
  },
  {
    name: 'Paris',
    country: 'France',
    current: {
      temperature: 17,
      condition: 'Mostly sunny',
      wind_speed: 7,
      humidity: 65,
      feels_like: 15,
      visibility: 10,
      precipitation: 13
    },
    forecast: [
      {
        date: 'THURS',
        temperature_high: 19,
        temperature_low: 15,
        condition: 'Sunny',
        sunrise: '07:06',
        sunset: '18:47'
      },
      {
        date: 'FRI',
        temperature_high: 21,
        temperature_low: 17,
        condition: 'Mostly sunny'
      },
      {
        date: 'SAT',
        temperature_high: 23,
        temperature_low: 19,
        condition: 'Sunny'
      },
      {
        date: 'SUN',
        temperature_high: 25,
        temperature_low: 21,
        condition: 'Mostly sunny'
      }
    ]
  },
  {
    name: 'Rome',
    country: 'Italy',
    current: {
      temperature: 23,
      condition: 'Sunny',
      wind_speed: 5,
      humidity: 60,
      feels_like: 22,
      visibility: 10,
      precipitation: 17
    },
    forecast: [
      {
        date: 'FRI',
        temperature_high: 25,
        temperature_low: 19,
        condition: 'Mostly sunny',
        sunrise: '06:40',
        sunset: '18:22'
      },
      {
        date: 'SAT',
        temperature_high: 27,
        temperature_low: 21,
        condition: 'Sunny'
      },
      {
        date: 'SUN',
        temperature_high: 29,
        temperature_low: 23,
        condition: 'Mostly sunny'
      },
      {
        date: 'MON',
        temperature_high: 31,
        temperature_low: 25,
        condition: 'Very sunny'
      }
    ]
  },
  {
    name: 'Barcelona',
    country: 'Spain',
    current: {
      temperature: 22,
      condition: 'Mostly sunny',
      wind_speed: 5,
      humidity: 65,
      feels_like: 21,
      visibility: 10,
      precipitation: 8
    },
    forecast: [
      {
        date: 'SAT',
        temperature_high: 24,
        temperature_low: 18,
        condition: 'Sunny',
        sunrise: '07:12',
        sunset: '19:00'
      },
      {
        date: 'SUN',
        temperature_high: 26,
        temperature_low: 20,
        condition: 'Mostly sunny'
      },
      {
        date: 'MON',
        temperature_high: 28,
        temperature_low: 22,
        condition: 'Sunny'
      },
      {
        date: 'TUES',
        temperature_high: 30,
        temperature_low: 24,
        condition: 'Very sunny'
      }
    ]
  },
  {
    name: 'Berlin',
    country: 'Germany',
    current: {
      temperature: 15,
      condition: 'Mostly sunny',
      wind_speed: 7,
      humidity: 60,
      feels_like: 13,
      visibility: 10,
      precipitation: 11
    },
    forecast: [
      {
        date: 'SUN',
        temperature_high: 17,
        temperature_low: 13,
        condition: 'Sunny',
        sunrise: '06:52',
        sunset: '17:38'
      },
      {
        date: 'MON',
        temperature_high: 19,
        temperature_low: 15,
        condition: 'Mostly sunny'
      },
      {
        date: 'TUES',
        temperature_high: 21,
        temperature_low: 17,
        condition: 'Sunny'
      },
      {
        date: 'WED',
        temperature_high: 23,
        temperature_low: 19,
        condition: 'Mostly sunny'
      }
    ]
  },
  {
    name: 'Dubai',
    country: 'United Arab Emirates',
    current: {
      temperature: 33,
      condition: 'Sunny',
      wind_speed: 5,
      humidity: 60,
      feels_like: 32,
      visibility: 10,
      precipitation: 4
    },
    forecast: [
      {
        date: 'MON',
        temperature_high: 35,
        temperature_low: 29,
        condition: 'Sunny',
        sunrise: '06:00',
        sunset: '18:05'
      },
      {
        date: 'TUES',
        temperature_high: 37,
        temperature_low: 31,
        condition: 'Very sunny'
      },
      {
        date: 'WED',
        temperature_high: 39,
        temperature_low: 33,
        condition: 'Very sunny'
      },
      {
        date: 'THURS',
        temperature_high: 41,
        temperature_low: 35,
        condition: 'Extremely sunny'
      }
    ]
  }
]
