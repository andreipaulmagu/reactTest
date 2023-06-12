import React from 'react'
import styles from "./TasksTable.module.scss"
import { task } from '../commons/types'

export default function TaskTable({ taskList }: { taskList: task[] }) {
  return (
    <table className={styles.taskTable}>
      <tbody>
        <tr>
          <th className='p-2'>Task Id</th>
          <th className='p-2'>Task Name</th>
        </tr>
        {taskList.length > 0 ? taskList.map(task => {
          return <tr key={task.id.toString()} className={task.completed ? styles.doneRow : styles.pendingRow}>
            <td>{task.id}</td>
            <td>{task.name}</td>
          </tr>
        }) :
          <tr>
            No task to display...
          </tr>}
      </tbody>
    </table>
  )
}
