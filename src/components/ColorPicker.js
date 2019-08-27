import React, { useState } from 'react'

const ColorPicker = () => {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100))
  const [lightness, setLightness] = useState(Math.floor(Math.random() * 100))

  console.log(hue)
  console.log(saturation)
  console.log(lightness)

  const RandomColor = () => {
    setHue(Math.floor(Math.random() * 360))
    setSaturation(Math.floor(Math.random() * 100))
    setLightness(Math.floor(Math.random() * 100))
  }

  return (
    <main
      style={{
        backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`
      }}
    >
      <div>
        <h1>Wow</h1>
      </div>
      <section className="sliders">
        <div className="hue-container">
          <h2>Hue</h2>
          <input
            type="range"
            min="1"
            max="360"
            value={hue}
            className="hue"
            onChange={e => {
              setHue(e.target.value)
            }}
          />
          <p>{hue}</p>
        </div>
        <div className="saturation">
          <h2>Saturation</h2>
          <input
            type="range"
            min="1"
            max="100"
            value={saturation}
            className="sat"
            onChange={e => {
              setSaturation(e.target.value)
            }}
          />
          <p>{saturation}</p>
        </div>
        <div className="lightness">
          <h2>Lightness</h2>
          <input
            type="range"
            min="1"
            max="100"
            value={lightness}
            className="light"
            onChange={e => {
              setLightness(e.target.value)
            }}
          />
          <p>{lightness}</p>
        </div>
        <div>
          <button
            className="random-color"
            type="button"
            onClick={() => RandomColor()}
          >
            Random Color
          </button>
        </div>
      </section>
    </main>
  )
}

export default ColorPicker
