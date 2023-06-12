import React from 'react'
import { TASKS } from '../commons/mocks'
import TasksTableController from './TasksTableController'

export default function DemoWrapper() {
  return (
    <TasksTableController taskList={TASKS} />
  )
}
