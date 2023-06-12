'use client'
import React, { useEffect, useState } from 'react'

export default function EvenListenerDisplay() {
  const [windowWidthDisplay, setWindowWidthDisplay] = useState(window.innerWidth)

  useEffect(() => {
    addEventListener("resize", (event) => { });

    onresize = (event) => {
      setWindowWidthDisplay(window.innerWidth)
    };

  }, [windowWidthDisplay]);

  return (
    <div>
      <h2>EvenListenerDisplay</h2>
      <p>Window Width: {windowWidthDisplay}</p>
    </div>

  )
}
