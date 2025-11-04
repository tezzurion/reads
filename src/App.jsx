import React from 'react'
import LiquidEther from './components/LiquidEther.jsx'
import FluidGlass from './components/FluidGlass.jsx'

export default function App() {
  return (
    <div className="app-root">
      {/* Background from React Bits (or placeholder for now) */}
      <LiquidEther />

      {/* Foreground content */}
      <main className="app-content">
        {/* <FluidGlass 
          mode="bar"
        /> */}
        <h1 className="app-title">Vive Malazan</h1>
        <p className="app-subtitle">
          I'll add stuff here at some point but now i've had enough and go read malazan 
        </p>
      </main>
    </div>
  )
}
