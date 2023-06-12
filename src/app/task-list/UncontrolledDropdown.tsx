import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

let _filterOptions = [{ label: 'All', value: "all" }, { label: 'Pending', value: 'pending' }, { label: 'Completed', value: "completed" }]

type UncontrolledDropdownProps = {
  statusFilter: string,
  setStatusFilter: (status: string) => void
}

export default function UncontrolledDropdown({ statusFilter, setStatusFilter }: UncontrolledDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <Dropdown className='m-3' isOpen={isDropdownOpen} toggle={() => setIsDropdownOpen(!isDropdownOpen)}>
      <DropdownToggle caret>
        {_filterOptions.filter(option => option.value === statusFilter)[0].label}
      </DropdownToggle>
      <DropdownMenu>
        {_filterOptions.map(option => {
          return <DropdownItem key={option.value} onClick={() => setStatusFilter(option.value)}>{option.label}</DropdownItem>
        })}
      </DropdownMenu>
    </Dropdown>
  )
}
