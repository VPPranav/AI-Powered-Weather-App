// WITHOUT API KEY 

// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import type { WeatherData } from "@/types/weather"
// import { Brain, RefreshCw, Sparkles, Zap } from "lucide-react"
// import { useToast } from "@/hooks/use-toast"

// interface AIInsightsProps {
//   weatherData: WeatherData
// }

// export function AIInsights({ weatherData }: AIInsightsProps) {
//   const [insights, setInsights] = useState<string>("")
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string>("")
//   const [source, setSource] = useState<string>("")
//   const { toast } = useToast()

//   const generateInsights = async () => {
//     setLoading(true)
//     setError("")

//     try {
//       const response = await fetch("/api/ai-insights", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ weatherData }),
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error(data.error || "Failed to generate insights")
//       }

//       setInsights(data.insights)
//       setSource(data.source || "Smart Algorithm")
//     } catch (error) {
//       const errorMessage = error instanceof Error ? error.message : "Failed to generate weather insights"
//       setError(errorMessage)

//       toast({
//         title: "Weather Insights Error",
//         description: errorMessage,
//         variant: "destructive",
//       })
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     if (weatherData) {
//       generateInsights()
//     }
//   }, [weatherData])

//   const formatInsights = (text: string) => {
//     return text.split("\n").map((line, index) => {
//       if (line.trim() === "") return <br key={index} />

//       // Check if line is a header (starts with ** or contains emojis)
//       if (line.includes("**") || line.match(/^[🌟⭐✨🔥❄️☀️🌧️⛈️🌫️💡👕🏃💧🌪️⚠️]/u)) {
//         return (
//           <p key={index} className="font-semibold text-white mt-3 mb-1">
//             {line.replace(/\*\*/g, "")}
//           </p>
//         )
//       }

//       // Check if line is a bullet point
//       if (line.startsWith("•")) {
//         return (
//           <p key={index} className="text-white/80 mb-1 ml-4">
//             {line}
//           </p>
//         )
//       }

//       return (
//         <p key={index} className="text-white/80 mb-2">
//           {line}
//         </p>
//       )
//     })
//   }

//   return (
//     <Card className="backdrop-blur-md bg-white/10 border-white/20">
//       <CardHeader>
//         <CardTitle className="flex items-center justify-between text-white">
//           <span className="flex items-center">
//             <Brain className="w-5 h-5 mr-2" />
//             Weather Insights
//             {source && (
//               <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full flex items-center">
//                 <Zap className="w-3 h-3 mr-1" />
//                 {source}
//               </span>
//             )}
//           </span>
//           <div className="flex gap-2">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={generateInsights}
//               disabled={loading}
//               className="text-white hover:bg-white/20"
//               title="Refresh insights"
//             >
//               {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
//             </Button>
//           </div>
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         {loading ? (
//           <div className="space-y-3">
//             <div className="h-4 bg-white/20 rounded animate-pulse" />
//             <div className="h-4 bg-white/20 rounded animate-pulse w-3/4" />
//             <div className="h-4 bg-white/20 rounded animate-pulse w-1/2" />
//             <div className="h-4 bg-white/20 rounded animate-pulse w-5/6" />
//           </div>
//         ) : error ? (
//           <div className="space-y-3">
//             <div className="flex items-center gap-2 text-red-300">
//               <span className="text-sm">⚠️ Unable to generate insights</span>
//             </div>
//             <p className="text-white/60 text-sm">{error}</p>
//           </div>
//         ) : insights ? (
//           <div className="space-y-2 max-h-96 overflow-y-auto">{formatInsights(insights)}</div>
//         ) : (
//           <p className="text-white/60">Weather insights will appear here once data is loaded.</p>
//         )}
//       </CardContent>
//     </Card>
//   )
// }





// WITH API KEY

"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { WeatherData } from "@/types/weather"
import { Brain, RefreshCw, Sparkles, Heart, Zap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface AIInsightsProps {
  weatherData: WeatherData
}

export function AIInsights({ weatherData }: AIInsightsProps) {
  const [insights, setInsights] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")
  const [apiUsed, setApiUsed] = useState<string>("")
  const [source, setSource] = useState<string>("")
  const { toast } = useToast()

  const generateInsights = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/ai-insights", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ weatherData }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate insights")
      }

      setInsights(data.insights)
      setApiUsed(data.apiUsed || "AI")
      setSource(data.source || "AI Service")
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to generate weather insights"
      setError(errorMessage)

      toast({
        title: "AI Insights Error",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (weatherData) {
      generateInsights()
    }
  }, [weatherData])

  const formatInsights = (text: string) => {
    return text.split("\n").map((line, index) => {
      if (line.trim() === "") return <br key={index} />

      if (line.includes("**") || line.match(/^[🌟⭐✨🔥❄️☀️🌧️⛈️🌫️💡👕🏃💧🌪️⚠️🌤️🧥]/u)) {
        return (
          <p key={index} className="font-semibold text-foreground mt-4 mb-2 text-lg">
            {line.replace(/\*\*/g, "")}
          </p>
        )
      }

      if (line.startsWith("•")) {
        return (
          <p key={index} className="text-muted-foreground mb-2 ml-4 flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span>{line.substring(1).trim()}</span>
          </p>
        )
      }

      return (
        <p key={index} className="text-muted-foreground mb-3 leading-relaxed">
          {line}
        </p>
      )
    })
  }

  const getApiIcon = () => {
    if (apiUsed.includes("Hugging Face")) return "🤗"
    if (apiUsed.includes("Cohere")) return "🔮"
    if (apiUsed.includes("AI21")) return "🧠"
    if (apiUsed.includes("Smart Algorithm")) return "⚡"
    return "🤖"
  }

  const getSourceColor = () => {
    if (source.includes("Free")) return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
    if (source.includes("Local")) return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
    return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20"
  }

  return (
    <Card className="backdrop-blur-md bg-card/80 border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">AI Weather Insights</h3>
              {apiUsed && (
                <div
                  className={`inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border ${getSourceColor()} mt-1`}
                >
                  <span>{getApiIcon()}</span>
                  {apiUsed.includes("Free") && <Heart className="w-3 h-3" />}
                  <span>{apiUsed}</span>
                </div>
              )}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={generateInsights}
            disabled={loading}
            className="hover:bg-accent/50 transition-all duration-200"
            title="Refresh insights"
          >
            {loading ? (
              <RefreshCw className="w-5 h-5 animate-spin text-primary" />
            ) : (
              <Sparkles className="w-5 h-5 text-primary" />
            )}
          </Button>
        </CardTitle>
      </CardHeader>

      <CardContent>
        {loading ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Generating AI insights...</span>
            </div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-muted/50 rounded animate-pulse" />
                <div className={`h-4 bg-muted/30 rounded animate-pulse ${i % 2 === 0 ? "w-3/4" : "w-1/2"}`} />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <div className="w-8 h-8 bg-destructive/20 rounded-lg flex items-center justify-center">
                <span className="text-destructive">⚠️</span>
              </div>
              <div>
                <p className="font-medium text-destructive">Unable to generate AI insights</p>
                <p className="text-sm text-destructive/80">{error}</p>
              </div>
            </div>
          </div>
        ) : insights ? (
          <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">{formatInsights(insights)}</div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
              <Brain className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">AI insights will appear here once weather data is loaded</p>
          </div>
        )}

        {source.includes("Free") && (
          <div className="mt-6 pt-4 border-t border-border/50">
            <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
              <Heart className="w-4 h-4 fill-current" />
              <span>Powered by free AI - no credit card required!</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
