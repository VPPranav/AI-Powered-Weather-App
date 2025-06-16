export interface WeatherData {
  city: string
  country: string
  temperature: number
  feelsLike: number
  description: string
  icon: string
  humidity: number
  pressure: number
  windSpeed: number
  windDirection: number
  visibility: number
  uvIndex: number
  sunrise: number
  sunset: number
  forecast: ForecastItem[]
}

export interface ForecastItem {
  time: number
  temperature: number
  description: string
  icon: string
}
