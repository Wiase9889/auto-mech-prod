import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import classes from './Employees.module.css'

const Employees = () => {
  return (
    <>
      <Sidebar />
      <div className={classes.employees_page}>
        <h2>Employees Page</h2>
      </div>
    </>
  )
}

export default Employees