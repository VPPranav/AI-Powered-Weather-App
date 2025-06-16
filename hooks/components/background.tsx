"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import type { WeatherData } from "@/types/weather"

interface BackgroundProps {
  weatherData: WeatherData | null
}

export function Background({ weatherData }: BackgroundProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getBackgroundClass = () => {
    if (!mounted) {
      return "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
    }

    const isDark = theme === "dark"

    if (!weatherData) {
      return isDark
        ? "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
        : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    }

    const condition = weatherData.description.toLowerCase()
    const temp = weatherData.temperature

    if (condition.includes("clear") || condition.includes("sunny")) {
      if (isDark) {
        return temp > 25
          ? "bg-gradient-to-br from-orange-900 via-red-900 to-pink-900"
          : "bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900"
      } else {
        return temp > 25
          ? "bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200"
          : "bg-gradient-to-br from-blue-200 via-cyan-200 to-teal-200"
      }
    }

    if (condition.includes("cloud")) {
      return isDark
        ? "bg-gradient-to-br from-gray-800 via-slate-800 to-zinc-800"
        : "bg-gradient-to-br from-gray-200 via-slate-200 to-zinc-200"
    }

    if (condition.includes("rain") || condition.includes("drizzle")) {
      return isDark
        ? "bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"
        : "bg-gradient-to-br from-slate-300 via-blue-300 to-indigo-300"
    }

    if (condition.includes("snow")) {
      return isDark
        ? "bg-gradient-to-br from-slate-700 via-blue-800 to-indigo-800"
        : "bg-gradient-to-br from-slate-100 via-blue-100 to-white"
    }

    if (condition.includes("thunder") || condition.includes("storm")) {
      return isDark
        ? "bg-gradient-to-br from-gray-900 via-purple-900 to-black"
        : "bg-gradient-to-br from-gray-400 via-purple-400 to-slate-500"
    }

    if (condition.includes("mist") || condition.includes("fog")) {
      return isDark
        ? "bg-gradient-to-br from-gray-700 via-slate-700 to-zinc-700"
        : "bg-gradient-to-br from-gray-300 via-slate-300 to-zinc-300"
    }

    return isDark
      ? "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
      : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
  }

  return (
    <div className={`fixed inset-0 transition-all duration-1000 ${getBackgroundClass()}`}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/20 dark:bg-background/40" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-ping"></div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
    </div>
  )
}
