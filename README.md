# AI Productivity Assistant

A comprehensive AI-powered workplace productivity assistant built with React, Next.js, and Tailwind CSS.

## Features

✨ **Smart Email Generator** - Draft professional emails with customizable tone and audience

📝 **Meeting Notes Summarizer** - Extract key points, actions, and deadlines from meeting transcripts

✅ **AI Task Planner** - Organize and prioritize tasks with automatic urgency indicators

🔍 **Research Assistant** - Get AI-powered insights on any workplace-related topic

💬 **AI Chatbot** - Real-time conversation interface for instant workplace assistance

📊 **Dashboard** - View productivity metrics and activity summary

## Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/xolly295/AI-Productivity-Assistant.git
cd AI-Productivity-Assistant
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── src/
│   ├── components/
│   │   └── AIWorkplaceAssistant.jsx    # Main component
│   ├── app/
│   │   ├── page.js                     # Home page
│   │   ├── globals.css                 # Global styles
│   │   └── layout.js                   # Layout wrapper
│   └── pages/
├── public/
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Dependencies

- **React 18** - UI library
- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Usage

The main component `AIWorkplaceAssistant` includes:

- Full state management with React hooks
- Mobile-responsive design
- Accessibility features (labels, aria-labels, semantic HTML)
- Loading states and error handling
- Keyboard shortcuts (Enter to send)

## Configuration

To connect real AI APIs, update the following handler functions in `AIWorkplaceAssistant.jsx`:

- `handleGenerateEmail()` - Connect to your email generation API
- `handleSummarizeMeeting()` - Connect to your meeting transcription API
- `handleResearch()` - Connect to your research/search API
- `handleSendMessage()` - Connect to your chatbot/LLM API

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

## Author

Xolile C. Malope (@xolly295)
