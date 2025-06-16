````markdown
# 🌤️ WeatherAI – Smart Weather Insights

A modern, AI-powered weather application built with **Next.js 15**, offering real-time weather data along with intelligent insights and personalized recommendations.

![WeatherAI Screenshot](https://via.placeholder.com/800x400/1e293b/ffffff?text=WeatherAI+Dashboard)

---

## ✨ Features

- 🌍 **Real-time Weather** – Current weather for any city worldwide  
- 🤖 **AI Insights** – Clothing, activity, and health suggestions  
- 🎨 **Modern UI** – Glassmorphism design with smooth transitions  
- 🌙 **Dark & Light Mode** – Auto theme with weather-based visuals  
- 📱 **Responsive** – Fully mobile-optimized  
- 📍 **Geolocation Support** – Auto-detect your location  
- 🔮 **5-Hour Forecast** – Short-term weather predictions  
- ⚡ **Blazing Fast** – Powered by Next.js 15  
- 🆓 **Free AI APIs** – No credit card required

---

## 🚀 Live Demo

👉 [View Live Demo](https://your-weather-ai-app.vercel.app)  
*Replace the above link with your actual deployment URL.*

---

## 🛠️ Tech Stack

| Layer       | Technologies |
|-------------|--------------|
| **Frontend** | Next.js 15 (App Router), TypeScript |
| **Styling**  | Tailwind CSS, shadcn/ui, next-themes |
| **Icons**    | Lucide React |
| **APIs**     | OpenWeatherMap, Hugging Face / Cohere / AI21 |
| **Deployment** | Vercel |

---

## 📋 Prerequisites

Ensure you have installed:

- Node.js ≥ 18
- npm or yarn
- Git

---

## 🔧 Installation

```bash
# 1. Clone the repository
git clone https://github.com/VPPranav/weather-ai-app.git
cd weather-ai-app

# 2. Install dependencies
npm install
# or
yarn install

# 3. Create environment file
cp .env.example .env.local
````

Edit `.env.local` and fill in your API keys:

```env
# Required
OPENWEATHER_API_KEY=your_openweather_api_key_here

# Optional: Choose ONE AI key
HUGGINGFACE_API_KEY=your_huggingface_token_here
# COHERE_API_KEY=your_cohere_api_key_here
# AI21_API_KEY=your_ai21_api_key_here
```

```bash
# 4. Run the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔑 API Key Setup

### 🌤 OpenWeatherMap (Required)

1. Sign up at [openweathermap.org](https://openweathermap.org/api)
2. Get your API key from your dashboard
3. Add it to `.env.local` as `OPENWEATHER_API_KEY`

### 🤖 AI Services (Optional – One Only)

#### Hugging Face (Recommended)

* 1000 free requests/month
* [Settings > Tokens](https://huggingface.co/settings/tokens)

#### Cohere

* 100 free calls/month
* [Cohere Dashboard](https://dashboard.cohere.ai)

#### AI21 Studio

* Limited free use
* [AI21 Account](https://studio.ai21.com/)

> If no AI key is set, a fallback rule-based system will be used.

---

## 📁 Project Structure

```
weather-ai-app/
├── app/
│   ├── api/
│   │   ├── ai-insights/route.ts
│   │   ├── geocode/route.ts
│   │   └── weather/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── ai-insights.tsx
│   ├── background.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── search-bar.tsx
│   ├── theme-provider.tsx
│   └── weather-card.tsx
├── hooks/use-toast.ts
├── lib/utils.ts
├── types/weather.ts
├── .env.example
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🎨 Features Overview

### Weather

* Temperature, humidity, pressure, visibility
* Wind speed and direction
* Sunrise/sunset timing
* 5-hour forecast

### AI Insights

* Clothes recommendations (e.g., “carry an umbrella”)
* Activity suggestions based on weather
* Health tips (e.g., for high UV or pollution)

### UX/UI

* Fully responsive on all screen sizes
* Theme toggling and system preference support
* Smooth animations and elegant UI

---

## 🚀 Deployment

### Deploy to Vercel

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

Then:

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. Set up environment variables
4. Deploy 🎉

### Deploy to Netlify

```bash
npm run build
```

Then:

1. Drag the `.next` folder into Netlify
   *or*
2. Connect your GitHub repository
3. Configure your environment variables

---

## 🔧 Available Scripts

```bash
npm run dev     # Development server
npm run build   # Build for production
npm run start   # Start production
npm run lint    # Lint the project
```

---

## 🌟 Contributing

We welcome contributions!

```bash
# Fork the repo
git checkout -b feature/YourFeatureName
# Make changes and commit
git commit -m "Add your feature"
# Push and open a PR
```

---

## 📝 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

* [OpenWeatherMap](https://openweathermap.org/)
* [Hugging Face](https://huggingface.co/)
* [shadcn/ui](https://ui.shadcn.com/)
* [Lucide Icons](https://lucide.dev/)
* [Vercel](https://vercel.com)

---

## 📞 Support

* Check [GitHub Issues](https://github.com/VPPranav/weather-ai-app/issues)
* Contact [@VPPranav](https://github.com/VPPranav)

---

## 🔮 Future Enhancements

* [ ] Weather alerts & notifications
* [ ] Historical weather trends
* [ ] Interactive weather maps
* [ ] Favorite locations support
* [ ] Mobile app (PWA or native)
* [ ] Music suggestions based on mood/weather
* [ ] More AI integrations

---

**Made with ❤️ by [VPPranav](https://github.com/VPPranav)**
© 2025 WeatherAI. All rights reserved.

```

---

Let me know if you'd like a version with badges, license shields, or multilingual support.
```
