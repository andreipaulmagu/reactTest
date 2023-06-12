'use client'
import React, { useState } from 'react'
import { Button } from 'reactstrap'
import DemoWrapper from './DemoWrapper'
import UploadWrapper from './UploadWrapper'

const _useCases = {
  INITIAL: "initial",
  DEMO: "demo",
  UPLOAD: "upload"
}

export default function TasksController() {
  let [useCase, setUseCase] = useState(_useCases.INITIAL)

  let Component = <div className='m-3'>
    <Button className={'m-3'} onClick={() => setUseCase(_useCases.UPLOAD)}>I Want to Add A File</Button>
    <Button onClick={() => setUseCase(_useCases.DEMO)}>Demo</Button>
  </div>

  if (useCase === "demo") {
    Component = <DemoWrapper />
  }
  if (useCase === "upload") {
    Component = <UploadWrapper />
  }

  return Component
}
