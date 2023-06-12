import React, { useEffect, useState } from 'react'
import TaskTable from './TaskTable'
import { task } from '../commons/types'
import UncontrolledDropdown from './UncontrolledDropdown'

export default function TasksTableController({ taskList }: { taskList: task[] }) {
  const [statusFilter, setStatusFilter] = useState("all")
  const [filteredTasks, setFilteredTasks] = useState(taskList)

  useEffect(() => {
    if (statusFilter === "pending") {
      setFilteredTasks(taskList.filter(task => !task.completed))
    } else if (statusFilter === "completed") {
      setFilteredTasks(taskList.filter(task => task.completed))
    } else {
      setFilteredTasks(taskList)
    }
  }, [statusFilter])


  return (
    <div className='w-100 justify-content-center' style={{ minHeight: "10rem" }}>
      <UncontrolledDropdown statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
      <TaskTable taskList={filteredTasks} />
    </div>
  )
}
