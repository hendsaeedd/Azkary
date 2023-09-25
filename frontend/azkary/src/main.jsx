import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {PrayerContextProvider} from './context/PrayerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrayerContextProvider>
      <App />
    </PrayerContextProvider>
  </React.StrictMode>,
)
