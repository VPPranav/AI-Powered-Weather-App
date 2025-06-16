"use client"

import { Heart, Github, Cloud } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-20 border-t border-border/50 backdrop-blur-md bg-background/80 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Cloud className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                WeatherAI
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Smart weather insights powered by AI technology. Get personalized recommendations for your perfect day.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                Real-time Weather Data
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                AI-Powered Insights
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                Smart Recommendations
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Location-based Forecasts
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/VPPranav"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-red-500 fill-current" /> by VPPranav
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 WeatherAI. Created By Pranav V P. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Service Online
              </span>
              <span>•</span>
              <span>Powered by OpenWeatherMap</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
