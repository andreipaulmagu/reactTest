import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { getFriendlyFormat } from '../commons/functions'

export default function BasicSum({ baseNumber }: { baseNumber: number }) {
  let [incrementedNumber, setIncrementedNumber] = useState(baseNumber)
  return (
    <div className='m-2'>
      <Button onClick={() => { setIncrementedNumber(incrementedNumber + 3) }}>Increment by 3</Button>
      {baseNumber !== incrementedNumber && <p>The incremented value is <span>{getFriendlyFormat(incrementedNumber)}</span></p>}
    </div>
  )
}
