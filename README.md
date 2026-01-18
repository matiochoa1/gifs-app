# Gifs App - React + TypeScript + Vite

A modern GIF search application built with React, TypeScript, and Vite. Search for GIFs using the Giphy API and keep track of your previous searches.

## Features

- 🔍 **GIF Search** - Search for GIFs using the Giphy API with real-time debounced queries
- 📋 **Search History** - Automatically tracks your last 8 searches for quick access
- 🎨 **Responsive Grid Layout** - Displays GIFs in a responsive grid that adapts to different screen sizes
- ⚡ **Fast Development** - Powered by Vite with HMR (Hot Module Replacement)
- 📝 **Type Safe** - Built with TypeScript for better code quality and developer experience

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite 7** - Build tool and dev server
- **Axios** - HTTP client for API requests
- **Giphy API** - GIF data source

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with your Giphy API key:

```
VITE_GIPHY_API_KEY=your_api_key_here
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
src/
├── GifsApp.tsx                 # Main app component
├── index.css                   # Global styles
├── main.tsx                    # React entry point
├── gifs/
│   ├── actions/
│   │   └── get-gifs-by-query.action.ts  # API action to fetch GIFs
│   ├── api/
│   │   └── giphy.api.ts        # Axios instance for Giphy API
│   ├── components/
│   │   ├── GifList.tsx         # Grid display of GIFs
│   │   └── PreviousSearches.tsx # Search history component
│   └── interfaces/
│       ├── gif.interface.ts    # GIF data type
│       └── giphy.response.ts   # Giphy API response types
├── mock-data/
│   └── gifs.mock.ts            # Mock GIF data for testing
└── shared/
    └── components/
        ├── CustomHeader.tsx    # Header component
        └── SearchBar.tsx       # Search input component
```

## How It Works

1. **Search** - Enter a query in the search bar and it will automatically search after 700ms of inactivity
2. **View Results** - GIFs are displayed in a responsive grid layout with dimensions and size information
3. **Previous Searches** - Your last 8 searches are displayed below the search bar for quick re-access
4. **Click to Search** - Click any previous search term to instantly search again

## API

The app uses the [Giphy API](https://developers.giphy.com/) to fetch GIFs. Make sure to obtain an API key and set it in your `.env` file.
