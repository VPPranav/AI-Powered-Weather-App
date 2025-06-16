"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { WeatherData } from "@/types/weather"
import { Thermometer, Droplets, Wind, Eye, Gauge, Sunrise, Sunset, Clock, MapPin } from "lucide-react"

interface WeatherCardProps {
  data: WeatherData
}

export function WeatherCard({ data }: WeatherCardProps) {
  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getWeatherIcon = (icon: string) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`
  }

  return (
    <Card className="backdrop-blur-md bg-card/80 border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <span className="text-2xl font-bold">
              {data.city}, {data.country}
            </span>
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Live
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Main Weather Display */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={getWeatherIcon(data.icon) || "/placeholder.svg"}
                alt={data.description}
                className="w-20 h-20 drop-shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {data.temperature}°C
              </div>
              <div className="text-muted-foreground capitalize font-medium">{data.description}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Thermometer className="w-4 h-4" />
              <span>Feels like {data.feelsLike}°C</span>
            </div>
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Droplets className="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Humidity</p>
              <p className="font-semibold">{data.humidity}%</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
            <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Wind className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Wind</p>
              <p className="font-semibold">{data.windSpeed} m/s</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Gauge className="w-4 h-4 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pressure</p>
              <p className="font-semibold">{data.pressure} hPa</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
            <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <Eye className="w-4 h-4 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Visibility</p>
              <p className="font-semibold">{data.visibility} km</p>
            </div>
          </div>
        </div>

        {/* Sun Times */}
        <div className="flex justify-between pt-4 border-t border-border/50">
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/30 backdrop-blur-sm">
            <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <Sunrise className="w-4 h-4 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Sunrise</p>
              <p className="font-semibold">{formatTime(data.sunrise)}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/30 backdrop-blur-sm">
            <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <Sunset className="w-4 h-4 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Sunset</p>
              <p className="font-semibold">{formatTime(data.sunset)}</p>
            </div>
          </div>
        </div>

        {/* Forecast */}
        {data.forecast && data.forecast.length > 0 && (
          <div className="pt-4 border-t border-border/50">
            <h3 className="font-semibold mb-4 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              5-Hour Forecast
            </h3>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {data.forecast.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 text-center p-3 rounded-lg bg-background/30 backdrop-blur-sm border border-border/30 min-w-[80px]"
                >
                  <div className="text-muted-foreground text-sm mb-2">
                    {new Date(item.time * 1000).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                    })}
                  </div>
                  <img
                    src={getWeatherIcon(item.icon) || "/placeholder.svg"}
                    alt={item.description}
                    className="w-10 h-10 mx-auto mb-2"
                  />
                  <div className="font-semibold">{item.temperature}°</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
