'use client'
import React, { useState } from 'react'
import { Button, Row } from 'reactstrap'

export default function Counter() {
	let [counterValue, setCounterValue] = useState(1)
	return (
		<div className='d-grid justify-content-center m-3'>
			<Row className='justify-content-center'>
				<Button style={{ width: "6rem" }} onClick={() => setCounterValue(counterValue + 1)}>Counter</Button>
			</Row>
			<Row className='mt-2'>
				{counterValue < 5 ?
					<p>I will change when the count is equal or bigger than 5</p> :
					<p>Counted to {counterValue}</p>
				}
			</Row>
		</div>
	)
}
