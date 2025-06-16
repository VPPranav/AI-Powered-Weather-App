"use client"

import { useState } from "react"
import { WeatherCard } from "@/components/weather-card"
import { SearchBar } from "@/components/search-bar"
import { AIInsights } from "@/components/ai-insights"
import { Background } from "@/components/background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { WeatherData } from "@/types/weather"

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (city: string) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch weather data")
      }

      setWeatherData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Background weatherData={weatherData} />

      <div className="relative z-10 flex-1 flex flex-col">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  WeatherAI
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Discover real-time weather conditions with intelligent AI-powered insights and personalized
                  recommendations for your perfect day
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-full px-4 py-2 border">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Real-time Data
                </div>
                <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-full px-4 py-2 border">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  AI Insights
                </div>
                <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-full px-4 py-2 border">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  Smart Recommendations
                </div>
              </div>
            </div>

            <SearchBar onSearch={handleSearch} loading={loading} />

            {error && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 text-destructive mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <span className="font-medium">Weather Error</span>
                </div>
                <p className="text-destructive/80">{error}</p>
              </div>
            )}

            {weatherData && (
              <div className="grid gap-8 lg:grid-cols-2">
                <WeatherCard data={weatherData} />
                <AIInsights weatherData={weatherData} />
              </div>
            )}

            {!weatherData && !loading && !error && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border">
                  <svg
                    className="w-12 h-12 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.002 4.002 0 003 15z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">Ready to explore the weather?</h3>
                <p className="text-muted-foreground/80">
                  Search for any city to get started with AI-powered weather insights
                </p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
