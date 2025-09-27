import { useState } from 'react'
import SignPicker from './components/SignPicker.jsx'
import HoroscopeCard from './components/HoroscopeCard.jsx'
import { getHoroscopeBySign } from './utils/zodiac.js'

import './App.css'
export default function App() {
  const [sign, setSign] = useState(null)

  const handleSignChange = (newSign) => setSign(newSign)

  const message = sign ? getHoroscopeBySign(sign) : null

  return (
    <div className="container">
      <h1>Horóscopo (React + Vite)</h1>

      <SignPicker onChange={handleSignChange} />

      {sign && (
        <HoroscopeCard sign={sign} message={message} />
      )}

      <footer className="foot">
        <small>App de ejemplo — sin dependencias extra</small>
      </footer>
    </div>
  )
}
