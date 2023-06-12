import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { getFriendlyFormat } from '../commons/functions'



export default function BasicMultiplication({ baseNumber }: { baseNumber: number }) {
  let [multipliedNumber, setMultipliedNumber] = useState(baseNumber)
  return (
    <div className='m-2'>
      <Button onClick={() => { setMultipliedNumber(multipliedNumber * 3) }}>Multiply by 3</Button>
      {baseNumber !== multipliedNumber && <p>The multiplied value is <span>{getFriendlyFormat(multipliedNumber)}</span></p>}
    </div>
  )
}
