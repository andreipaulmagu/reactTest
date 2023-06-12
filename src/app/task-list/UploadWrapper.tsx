import React, { useState } from 'react'
import TasksTableController from './TasksTableController'

export default function UploadWrapper() {
  const [tasksList, setTasksList] = useState(null)
  const [isError, setIsError] = useState(false)
  let fileReader: FileReader

  const handleFileRead = () => {
    const content = fileReader.result
    try {
      content && setTasksList(JSON.parse(content as string))
    }
    catch {
      setIsError(true)
    }
  }

  const handleFileSelection = (file: Blob) => {
    fileReader = new FileReader()
    fileReader.onloadend = handleFileRead
    fileReader.readAsText(file)
  }

  if (Array.isArray(tasksList)) {
    return (
      <TasksTableController taskList={tasksList} />)
  } else {
    return (
      <div style={{ width: "inherit", overflow: "hidden" }}>
        <input className='m-3' type="file" onChange={(event) => {
          if (!event.target.files) {
            return
          };
          handleFileSelection(event.target.files[0])
        }}
        />
        {isError &&
          <p style={{ textAlign: "center", color: "lightsalmon" }}>
            An error had been found... Are you sure that your file is a text file or is a valid JSON format?
          </p>}
      </div>
    )
  }
}
