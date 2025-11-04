import React from 'react'
import LiquidEtherfrom from './components/LiquidEther.jsx'

export default function App() {
  return (
    <div className="app-root">
      {/* Background from React Bits (or placeholder for now) */}
      <LiquidEther />

      {/* Foreground content */}
      <main className="app-content">
        <h1 className="app-title">Hello, React Bits 👋</h1>
        <p className="app-subtitle">
          This is a minimal GitHub Pages site using a React Bits background.
        </p>
      </main>
    </div>
  )
}
