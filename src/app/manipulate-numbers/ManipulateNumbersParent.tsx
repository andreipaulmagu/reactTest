'use client'
import React, { useState } from 'react'
import BasicSum from './BasicSum'
import BasicMultiplication from './BasicMultiplication'

export default function ManipulateNumbersParent() {
  const [baseNumber, setBaseNumber] = useState(2)
  return (
    <div className='m-3'>
      <p>The base number is <span>{baseNumber}</span></p>
      <BasicSum baseNumber={baseNumber} />
      <BasicMultiplication baseNumber={baseNumber} />
    </div>
  )
}
