"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Loader2 } from "lucide-react"

interface SearchBarProps {
  onSearch: (city: string) => void
  loading: boolean
}

export function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [city, setCity] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (city.trim()) {
      onSearch(city.trim())
    }
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          try {
            const response = await fetch(`/api/geocode?lat=${latitude}&lon=${longitude}`)
            const data = await response.json()
            if (data.name) {
              setCity(data.name)
              onSearch(data.name)
            }
          } catch (error) {
            console.error("Error getting location name:", error)
          }
        },
        (error) => {
          console.error("Geolocation not available or denied")
        },
      )
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Enter city name (e.g., London, Tokyo, New York)..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="pl-12 pr-4 py-6 text-lg bg-background/80 backdrop-blur-md border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl shadow-lg"
            disabled={loading}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        </div>

        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={getCurrentLocation}
          className="px-6 bg-background/80 backdrop-blur-md border-border/50 hover:bg-accent/50 rounded-xl shadow-lg"
          disabled={loading}
        >
          <MapPin className="w-5 h-5" />
        </Button>

        <Button
          type="submit"
          disabled={loading || !city.trim()}
          size="lg"
          className="px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl shadow-lg transition-all duration-200"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Searching...
            </>
          ) : (
            <>
              <Search className="w-5 h-5 mr-2" />
              Search
            </>
          )}
        </Button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Try searching for cities like "London", "Tokyo", "New York", or use your current location
        </p>
      </div>
    </div>
  )
}
