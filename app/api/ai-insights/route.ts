// WITHOUT USING API KEY

// import { openai } from "@ai-sdk/openai"
// import { generateText } from "ai"
// import { type NextRequest, NextResponse } from "next/server"

// export async function POST(request: NextRequest) {
//   try {
//     const { weatherData } = await request.json()

//     if (!weatherData) {
//       return NextResponse.json({ error: "Weather data is required" }, { status: 400 })
//     }

//     const API_KEY = process.env.OPENAI_API_KEY

//     if (!API_KEY) {
//       console.error("OpenAI API key not found in environment variables")
//       return NextResponse.json(
//         { error: "AI service not configured. Please add OPENAI_API_KEY to your environment variables." },
//         { status: 500 },
//       )
//     }

//     const prompt = `Based on the following weather data, provide helpful insights and recommendations:

// City: ${weatherData.city}, ${weatherData.country}
// Temperature: ${weatherData.temperature}°C (feels like ${weatherData.feelsLike}°C)
// Condition: ${weatherData.description}
// Humidity: ${weatherData.humidity}%
// Wind Speed: ${weatherData.windSpeed} m/s
// Pressure: ${weatherData.pressure} hPa
// Visibility: ${weatherData.visibility} km

// Please provide:
// 1. A brief weather summary
// 2. Clothing recommendations
// 3. Activity suggestions
// 4. Health and comfort tips
// 5. Any weather warnings or precautions

// Keep the response concise, helpful, and friendly. Format it in a readable way with clear sections.`

//     console.log("Generating AI insights for:", weatherData.city)

//     const { text } = await generateText({
//       model: openai("gpt-4o-mini"),
//       prompt,
//       maxTokens: 500,
//     })

//     console.log("AI insights generated successfully")
//     return NextResponse.json({ insights: text })
//   } catch (error) {
//     console.error("AI insights error:", error)

//     // Provide more specific error messages
//     if (error instanceof Error) {
//       if (error.message.includes("API key")) {
//         return NextResponse.json(
//           {
//             error: "Invalid OpenAI API key. Please check your OPENAI_API_KEY environment variable.",
//           },
//           { status: 401 },
//         )
//       }
//       if (error.message.includes("quota")) {
//         return NextResponse.json(
//           {
//             error: "OpenAI API quota exceeded. Please check your OpenAI account billing.",
//           },
//           { status: 429 },
//         )
//       }
//       if (error.message.includes("network") || error.message.includes("fetch")) {
//         return NextResponse.json(
//           {
//             error: "Network error connecting to AI service. Please try again.",
//           },
//           { status: 503 },
//         )
//       }
//     }

//     return NextResponse.json(
//       {
//         error: "Failed to generate AI insights. Please try again later.",
//       },
//       { status: 500 },
//     )
//   }
// }







// import { type NextRequest, NextResponse } from "next/server"

// // Weather condition mappings for insights
// const weatherConditions = {
//   clear: {
//     emoji: "☀️",
//     summary: "Clear and sunny conditions",
//     clothing: ["Light, breathable clothing", "Sunglasses and hat", "Sunscreen recommended"],
//     activities: ["Perfect for outdoor activities", "Great for hiking or cycling", "Ideal for picnics or beach visits"],
//     health: ["Stay hydrated", "Seek shade during peak hours", "Wear UV protection"],
//   },
//   clouds: {
//     emoji: "☁️",
//     summary: "Cloudy skies with comfortable conditions",
//     clothing: ["Light layers", "Comfortable casual wear", "Light jacket if breezy"],
//     activities: ["Good for walking or jogging", "Perfect for sightseeing", "Great for outdoor sports"],
//     health: ["Comfortable conditions", "Good air quality for outdoor activities", "Stay hydrated"],
//   },
//   rain: {
//     emoji: "🌧️",
//     summary: "Rainy weather - stay dry and cozy",
//     clothing: ["Waterproof jacket or umbrella", "Water-resistant shoes", "Quick-dry clothing"],
//     activities: ["Indoor activities recommended", "Visit museums or shopping centers", "Cozy café time"],
//     health: ["Avoid getting wet to prevent colds", "Drive carefully on wet roads", "Stay warm and dry"],
//   },
//   drizzle: {
//     emoji: "🌦️",
//     summary: "Light drizzle - mild wet conditions",
//     clothing: ["Light rain jacket", "Comfortable shoes with grip", "Layers for changing conditions"],
//     activities: ["Light outdoor activities possible", "Great for indoor hobbies", "Perfect reading weather"],
//     health: ["Mild conditions", "Watch for slippery surfaces", "Stay comfortable"],
//   },
//   thunderstorm: {
//     emoji: "⛈️",
//     summary: "Thunderstorms - stay safe indoors",
//     clothing: ["Stay indoors", "Avoid metal accessories", "Comfortable indoor wear"],
//     activities: ["Indoor activities only", "Avoid outdoor sports", "Perfect for indoor entertainment"],
//     health: ["Stay indoors for safety", "Avoid electrical appliances during storms", "Keep emergency supplies ready"],
//   },
//   snow: {
//     emoji: "❄️",
//     summary: "Snowy conditions - winter wonderland",
//     clothing: ["Heavy winter coat", "Warm boots with good traction", "Gloves, hat, and scarf"],
//     activities: ["Winter sports like skiing", "Building snowmen", "Cozy indoor activities"],
//     health: ["Dress in layers", "Watch for icy surfaces", "Stay warm and dry"],
//   },
//   mist: {
//     emoji: "🌫️",
//     summary: "Misty conditions with reduced visibility",
//     clothing: ["Light layers", "Comfortable walking shoes", "Light jacket for dampness"],
//     activities: ["Careful driving recommended", "Great for photography", "Indoor activities preferred"],
//     health: ["Drive carefully", "Good for respiratory comfort", "Stay visible to others"],
//   },
//   fog: {
//     emoji: "🌫️",
//     summary: "Foggy weather with low visibility",
//     clothing: ["Layers for changing conditions", "Bright colored clothing", "Comfortable shoes"],
//     activities: ["Limited outdoor visibility", "Indoor activities recommended", "Careful travel"],
//     health: ["Drive with caution", "Use headlights", "Allow extra travel time"],
//   },
// }

// // Temperature-based insights
// function getTemperatureInsights(temp: number) {
//   if (temp < -10) {
//     return {
//       level: "Extremely Cold",
//       emoji: "🥶",
//       clothing: ["Heavy winter gear", "Multiple layers", "Insulated boots", "Face protection"],
//       activities: ["Limit outdoor exposure", "Indoor activities", "Emergency preparedness"],
//       health: ["Risk of frostbite", "Stay warm and dry", "Limit time outdoors"],
//     }
//   } else if (temp < 0) {
//     return {
//       level: "Very Cold",
//       emoji: "❄️",
//       clothing: ["Heavy coat", "Warm layers", "Winter boots", "Gloves and hat"],
//       activities: ["Winter sports", "Short outdoor activities", "Warm indoor spaces"],
//       health: ["Dress warmly", "Watch for ice", "Stay hydrated"],
//     }
//   } else if (temp < 10) {
//     return {
//       level: "Cold",
//       emoji: "🧥",
//       clothing: ["Warm jacket", "Long pants", "Closed shoes", "Light gloves"],
//       activities: ["Brisk walks", "Indoor sports", "Cozy activities"],
//       health: ["Layer clothing", "Stay active", "Warm beverages"],
//     }
//   } else if (temp < 20) {
//     return {
//       level: "Cool",
//       emoji: "🌤️",
//       clothing: ["Light jacket", "Long sleeves", "Comfortable pants", "Sneakers"],
//       activities: ["Perfect for hiking", "Outdoor sports", "Sightseeing"],
//       health: ["Comfortable conditions", "Great for exercise", "Stay hydrated"],
//     }
//   } else if (temp < 30) {
//     return {
//       level: "Warm",
//       emoji: "☀️",
//       clothing: ["Light clothing", "T-shirts", "Shorts or light pants", "Comfortable shoes"],
//       activities: ["All outdoor activities", "Beach or pool", "Sports and recreation"],
//       health: ["Perfect weather", "Stay hydrated", "Enjoy the outdoors"],
//     }
//   } else if (temp < 35) {
//     return {
//       level: "Hot",
//       emoji: "🔥",
//       clothing: ["Minimal light clothing", "Sun hat", "Sunglasses", "Breathable fabrics"],
//       activities: ["Early morning activities", "Swimming", "Shaded outdoor areas"],
//       health: ["Stay hydrated", "Seek shade", "Avoid peak sun hours"],
//     }
//   } else {
//     return {
//       level: "Extremely Hot",
//       emoji: "🌡️",
//       clothing: ["Minimal clothing", "Sun protection", "Light colors", "Cooling accessories"],
//       activities: ["Indoor activities", "Swimming", "Air-conditioned spaces"],
//       health: ["Heat exhaustion risk", "Drink lots of water", "Stay in cool areas"],
//     }
//   }
// }

// // Humidity-based insights
// function getHumidityInsights(humidity: number) {
//   if (humidity < 30) {
//     return {
//       level: "Low Humidity",
//       effects: "Dry air conditions",
//       tips: ["Use moisturizer", "Stay hydrated", "Consider a humidifier"],
//     }
//   } else if (humidity < 60) {
//     return {
//       level: "Comfortable Humidity",
//       effects: "Pleasant air conditions",
//       tips: ["Ideal comfort level", "Great for outdoor activities", "Enjoy the weather"],
//     }
//   } else if (humidity < 80) {
//     return {
//       level: "High Humidity",
//       effects: "Muggy and sticky feeling",
//       tips: ["Stay cool", "Light, breathable clothing", "Take breaks in AC"],
//     }
//   } else {
//     return {
//       level: "Very High Humidity",
//       effects: "Very muggy conditions",
//       tips: ["Limit outdoor activities", "Stay in air conditioning", "Drink extra water"],
//     }
//   }
// }

// // Wind-based insights
// function getWindInsights(windSpeed: number) {
//   if (windSpeed < 5) {
//     return {
//       level: "Calm",
//       description: "Little to no wind",
//       tips: ["Perfect for outdoor dining", "Great for photography"],
//     }
//   } else if (windSpeed < 15) {
//     return { level: "Light Breeze", description: "Gentle wind", tips: ["Pleasant conditions", "Good for sailing"] }
//   } else if (windSpeed < 25) {
//     return {
//       level: "Moderate Wind",
//       description: "Noticeable breeze",
//       tips: ["Secure loose items", "Great for kite flying"],
//     }
//   } else if (windSpeed < 35) {
//     return {
//       level: "Strong Wind",
//       description: "Strong gusts",
//       tips: ["Be careful with umbrellas", "Secure outdoor furniture"],
//     }
//   } else {
//     return {
//       level: "Very Strong Wind",
//       description: "Powerful winds",
//       tips: ["Avoid outdoor activities", "Stay indoors if possible"],
//     }
//   }
// }

// // Generate comprehensive weather insights
// function generateWeatherInsights(weatherData: any) {
//   const condition = weatherData.description.toLowerCase()
//   const temp = weatherData.temperature
//   const humidity = weatherData.humidity
//   const windSpeed = weatherData.windSpeed

//   // Determine weather condition category
//   let conditionKey = "clear"
//   if (condition.includes("cloud")) conditionKey = "clouds"
//   else if (condition.includes("rain")) conditionKey = "rain"
//   else if (condition.includes("drizzle")) conditionKey = "drizzle"
//   else if (condition.includes("thunder") || condition.includes("storm")) conditionKey = "thunderstorm"
//   else if (condition.includes("snow")) conditionKey = "snow"
//   else if (condition.includes("mist")) conditionKey = "mist"
//   else if (condition.includes("fog")) conditionKey = "fog"

//   const weatherCondition = weatherConditions[conditionKey as keyof typeof weatherConditions]
//   const tempInsights = getTemperatureInsights(temp)
//   const humidityInsights = getHumidityInsights(humidity)
//   const windInsights = getWindInsights(windSpeed)

//   // Generate time-based recommendations
//   const currentHour = new Date().getHours()
//   let timeRecommendations = []

//   if (currentHour < 6) {
//     timeRecommendations = ["Early morning - perfect for sunrise activities", "Quiet time for reflection"]
//   } else if (currentHour < 12) {
//     timeRecommendations = ["Morning - great energy for activities", "Perfect time for exercise"]
//   } else if (currentHour < 18) {
//     timeRecommendations = ["Afternoon - peak activity time", "Good for outdoor adventures"]
//   } else {
//     timeRecommendations = ["Evening - time to wind down", "Perfect for dinner outdoors"]
//   }

//   // Combine all insights
//   const insights = `${weatherCondition.emoji} **Weather Summary for ${weatherData.city}**

// **Current Conditions**: ${weatherCondition.summary}
// **Temperature**: ${tempInsights.emoji} ${tempInsights.level} (${temp}°C, feels like ${weatherData.feelsLike}°C)

// **👕 Clothing Recommendations:**
// ${tempInsights.clothing.map((item) => `• ${item}`).join("\n")}
// ${weatherCondition.clothing.map((item) => `• ${item}`).join("\n")}

// **🏃 Activity Suggestions:**
// ${weatherCondition.activities.map((item) => `• ${item}`).join("\n")}
// ${timeRecommendations.map((item) => `• ${item}`).join("\n")}

// **💡 Health & Comfort Tips:**
// ${tempInsights.health.map((item) => `• ${item}`).join("\n")}
// ${weatherCondition.health.map((item) => `• ${item}`).join("\n")}

// **🌪️ Wind Conditions**: ${windInsights.level} (${windSpeed} m/s)
// ${windInsights.tips.map((item) => `• ${item}`).join("\n")}

// **💧 Humidity**: ${humidityInsights.level} (${humidity}%)
// ${humidityInsights.tips.map((item) => `• ${item}`).join("\n")}

// **⚠️ Special Considerations:**
// • UV Index: Moderate - wear sunscreen if sunny
// • Air Quality: Generally good for outdoor activities
// • Visibility: ${weatherData.visibility}km - ${weatherData.visibility > 5 ? "Good visibility" : "Reduced visibility, drive carefully"}`

//   return insights
// }

// export async function POST(request: NextRequest) {
//   try {
//     const { weatherData } = await request.json()

//     if (!weatherData) {
//       return NextResponse.json({ error: "Weather data is required" }, { status: 400 })
//     }

//     console.log("Generating rule-based weather insights for:", weatherData.city)

//     // Generate insights using rule-based logic
//     const insights = generateWeatherInsights(weatherData)

//     console.log("Weather insights generated successfully using rule-based system")
//     return NextResponse.json({
//       insights,
//       apiUsed: "Rule-Based System",
//       source: "Local Algorithm",
//     })
//   } catch (error) {
//     console.error("Weather insights error:", error)
//     return NextResponse.json(
//       {
//         error: "Failed to generate weather insights. Please try again later.",
//       },
//       { status: 500 },
//     )
//   }
// }


// USING API KEY 

import { type NextRequest, NextResponse } from "next/server"

// Improved Cohere Free API implementation
async function generateWithCohereFree(prompt: string, apiKey: string) {
  try {
    console.log("Calling Cohere API...")

    const response = await fetch("https://api.cohere.ai/v1/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "Cohere-Version": "2022-12-06", // Add API version
      },
      body: JSON.stringify({
        model: "command-light", // Free tier model
        prompt: prompt,
        max_tokens: 250, // Reduced for free tier
        temperature: 0.7,
        k: 0,
        stop_sequences: [],
        return_likelihoods: "NONE",
      }),
    })

    console.log("Cohere response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Cohere API error response:", errorText)
      throw new Error(`Cohere API error (${response.status}): ${errorText}`)
    }

    const responseText = await response.text()
    console.log("Cohere raw response:", responseText)

    if (!responseText || responseText.trim() === "") {
      throw new Error("Empty response from Cohere API")
    }

    const data = JSON.parse(responseText)

    if (!data.generations || !data.generations[0] || !data.generations[0].text) {
      throw new Error("Invalid response format from Cohere API")
    }

    return data.generations[0].text.trim()
  } catch (error) {
    console.error("Cohere API detailed error:", error)
    throw error
  }
}

// Alternative: Hugging Face API (more reliable for free tier)
async function generateWithHuggingFace(prompt: string, apiKey: string) {
  try {
    console.log("Calling Hugging Face API...")

    const response = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-base", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 300,
          temperature: 0.7,
          do_sample: true,
        },
        options: {
          wait_for_model: true, // Wait if model is loading
        },
      }),
    })

    console.log("Hugging Face response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Hugging Face API error:", errorText)
      throw new Error(`Hugging Face API error (${response.status}): ${errorText}`)
    }

    const data = await response.json()
    console.log("Hugging Face response:", data)

    if (Array.isArray(data) && data[0]?.generated_text) {
      return data[0].generated_text.replace(prompt, "").trim()
    } else if (data.generated_text) {
      return data.generated_text.replace(prompt, "").trim()
    } else if (data.error) {
      throw new Error(`Hugging Face error: ${data.error}`)
    } else {
      throw new Error("Invalid response format from Hugging Face")
    }
  } catch (error) {
    console.error("Hugging Face API detailed error:", error)
    throw error
  }
}

// Improved rule-based fallback
function generateRuleBasedInsights(weatherData: any) {
  const temp = weatherData.temperature
  const condition = weatherData.description.toLowerCase()
  const humidity = weatherData.humidity
  const windSpeed = weatherData.windSpeed
  const feelsLike = weatherData.feelsLike

  let insights = `🌤️ **Weather Insights for ${weatherData.city}**\n\n`

  // Temperature analysis
  if (temp < 0) {
    insights += "❄️ **Temperature Alert**: Freezing conditions!\n"
    insights += "• Heavy winter coat, gloves, and warm boots essential\n"
    insights += "• Limit outdoor exposure to prevent frostbite\n"
    insights += "• Keep emergency supplies in your car\n\n"
  } else if (temp < 10) {
    insights += "🧥 **Temperature**: Cold weather ahead\n"
    insights += "• Warm jacket and layers recommended\n"
    insights += "• Perfect for cozy indoor activities\n"
    insights += "• Hot beverages will keep you comfortable\n\n"
  } else if (temp < 20) {
    insights += "🌤️ **Temperature**: Cool and pleasant\n"
    insights += "• Light jacket or sweater ideal\n"
    insights += "• Great weather for hiking or walking\n"
    insights += "• Perfect for outdoor photography\n\n"
  } else if (temp < 30) {
    insights += "☀️ **Temperature**: Beautiful weather!\n"
    insights += "• Light, comfortable clothing\n"
    insights += "• Excellent for all outdoor activities\n"
    insights += "• Perfect picnic or beach weather\n\n"
  } else {
    insights += "🔥 **Temperature**: Hot conditions\n"
    insights += "• Light, breathable fabrics only\n"
    insights += "• Stay hydrated - drink water regularly\n"
    insights += "• Seek shade during peak hours (11am-3pm)\n\n"
  }

  // Feels like temperature
  const tempDiff = Math.abs(temp - feelsLike)
  if (tempDiff > 5) {
    insights += `🌡️ **Comfort Level**: Feels like ${feelsLike}°C\n`
    if (feelsLike > temp) {
      insights += "• Higher humidity makes it feel warmer\n"
      insights += "• Consider lighter clothing than temperature suggests\n\n"
    } else {
      insights += "• Wind chill makes it feel colder\n"
      insights += "• Dress warmer than temperature suggests\n\n"
    }
  }

  // Weather condition specific advice
  if (condition.includes("rain")) {
    insights += "🌧️ **Weather Condition**: Rainy day\n"
    insights += "• Waterproof jacket and umbrella essential\n"
    insights += "• Perfect for indoor activities like museums\n"
    insights += "• Drive carefully - roads may be slippery\n"
    insights += "• Great day for reading or cooking\n\n"
  } else if (condition.includes("snow")) {
    insights += "❄️ **Weather Condition**: Snowy conditions\n"
    insights += "• Winter boots with good traction needed\n"
    insights += "• Perfect for winter sports or snowman building\n"
    insights += "• Allow extra travel time\n"
    insights += "• Cozy indoor activities recommended\n\n"
  } else if (condition.includes("cloud")) {
    insights += "☁️ **Weather Condition**: Cloudy skies\n"
    insights += "• Comfortable conditions for outdoor activities\n"
    insights += "• Great for photography with soft lighting\n"
    insights += "• No need for strong sun protection\n\n"
  } else if (condition.includes("clear") || condition.includes("sun")) {
    insights += "☀️ **Weather Condition**: Clear and sunny\n"
    insights += "• Sunglasses and sunscreen recommended\n"
    insights += "• Perfect for outdoor sports and activities\n"
    insights += "• Great visibility for sightseeing\n\n"
  }

  // Humidity insights
  if (humidity > 80) {
    insights += "💧 **Humidity**: Very humid (${humidity}%)\n"
    insights += "• Feels muggy and sticky\n"
    insights += "• Stay in air-conditioned spaces when possible\n"
    insights += "• Drink extra water to stay hydrated\n\n"
  } else if (humidity < 30) {
    insights += "💧 **Humidity**: Low humidity (${humidity}%)\n"
    insights += "• Air feels dry\n"
    insights += "• Use moisturizer for skin care\n"
    insights += "• Stay hydrated - you may not feel thirsty\n\n"
  }

  // Wind conditions
  if (windSpeed > 25) {
    insights += "💨 **Wind**: Strong winds (${windSpeed} m/s)\n"
    insights += "• Secure loose outdoor items\n"
    insights += "• Be careful with umbrellas\n"
    insights += "• Great conditions for kite flying\n\n"
  } else if (windSpeed > 15) {
    insights += "💨 **Wind**: Breezy conditions (${windSpeed} m/s)\n"
    insights += "• Pleasant breeze for outdoor activities\n"
    insights += "• Good for sailing or windsurfing\n\n"
  }

  // Activity recommendations
  insights += "🏃 **Recommended Activities**:\n"
  if (temp > 20 && !condition.includes("rain")) {
    insights += "• Outdoor sports and recreation\n• Beach or pool activities\n• Hiking and nature walks\n"
  } else if (condition.includes("rain")) {
    insights += "• Indoor shopping or museums\n• Cozy café visits\n• Home activities like cooking or reading\n"
  } else if (temp < 10) {
    insights += "• Indoor fitness activities\n• Hot yoga or gym workouts\n• Warm indoor entertainment\n"
  } else {
    insights += "• Light outdoor activities\n• City walking tours\n• Outdoor dining\n"
  }

  return insights
}

export async function POST(request: NextRequest) {
  try {
    const { weatherData } = await request.json()

    if (!weatherData) {
      return NextResponse.json({ error: "Weather data is required" }, { status: 400 })
    }

    // Check for available API keys
    const cohereKey = process.env.COHERE_API_KEY
    const huggingFaceKey = process.env.HUGGINGFACE_API_KEY

    const prompt = `Provide weather advice for ${weatherData.city}: ${weatherData.description}, ${weatherData.temperature}°C (feels like ${weatherData.feelsLike}°C), ${weatherData.humidity}% humidity, ${weatherData.windSpeed} m/s wind.

Give brief recommendations for:
- Clothing to wear
- Activities to do
- Health and safety tips

Keep response under 200 words:`

    let insights: string
    let apiUsed: string

    try {
      // Try free AI APIs with better error handling
      if (cohereKey) {
        console.log("Attempting Cohere API...")
        try {
          insights = await generateWithCohereFree(prompt, cohereKey)
          apiUsed = "Cohere (Free)"
          console.log("Cohere API successful")
        } catch (cohereError) {
          console.log("Cohere failed, trying Hugging Face...")
          if (huggingFaceKey) {
            insights = await generateWithHuggingFace(prompt, huggingFaceKey)
            apiUsed = "Hugging Face (Fallback)"
          } else {
            throw cohereError
          }
        }
      } else if (huggingFaceKey) {
        console.log("Using Hugging Face API...")
        insights = await generateWithHuggingFace(prompt, huggingFaceKey)
        apiUsed = "Hugging Face (Free)"
      } else {
        throw new Error("No AI API keys configured")
      }

      // Validate AI response
      if (!insights || insights.trim().length < 10) {
        throw new Error("AI response too short or empty")
      }

      console.log(`AI insights generated successfully using ${apiUsed}`)
      return NextResponse.json({
        insights: insights.trim(),
        apiUsed,
        source: "Free AI Service",
      })
    } catch (aiError) {
      console.log("All AI APIs failed, using rule-based system:", aiError)

      // Always fallback to rule-based system
      insights = generateRuleBasedInsights(weatherData)

      return NextResponse.json({
        insights,
        apiUsed: "Smart Algorithm (AI Unavailable)",
        source: "Local System",
        note: "AI services temporarily unavailable - using intelligent fallback",
      })
    }
  } catch (error) {
    console.error("General error:", error)

    // Emergency fallback
    if (request.body) {
      try {
        const { weatherData } = await request.json()
        const insights = generateRuleBasedInsights(weatherData)

        return NextResponse.json({
          insights,
          apiUsed: "Emergency Fallback",
          source: "Local System",
        })
      } catch (parseError) {
        console.error("Failed to parse request body:", parseError)
      }
    }

    return NextResponse.json(
      {
        error: "Failed to generate weather insights. Please try again later.",
      },
      { status: 500 },
    )
  }
}
