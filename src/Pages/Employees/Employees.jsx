import React, { useLayoutEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import classes from './Employees.module.css'
import db from '../../DB/db'
import { Link } from 'react-router-dom'
import TableBody from '../../Components/Table/TableBody'

const Employees = () => {
  const [employees, setEmployees] = useState([])

  useLayoutEffect(() => {
    let unsub = () => {
      db.collection('employees').get().then(allemployees => {
        setEmployees(allemployees)
      })
    }

    return () => {
      unsub()
    };
  }, [employees])


  // const handleDelete = (id) => {
  //   alert(`${id} deleted...`)
  // }

  return (
    <>
      <Sidebar />
      <div className={classes.employees_page}>
        <div className={classes.employees_hd}>
          <h2>Employees</h2>
        </div>

        <div className={classes.addemployeesBtn}>
          <Link to='/new-employee'>Add employee</Link>
        </div>

        {/* Display all products */}
        <div className={classes.employees_display}>
          <div className={classes.table}>
            <th>
              <tr>Id</tr>
              <tr>Firstname</tr>
              <tr>Lastname</tr>
              <tr>Email</tr>
              <tr>Contact</tr>
              <tr>Location</tr>
              <tr>Role</tr>
            </th>
          </div>
          <div className={classes.employee__lists}>
            {
              employees?.length === 0 ? (
                <div className={classes.empty}>
                  <h2>Sorry, no employee available</h2>
                </div>
              ) :
                employees?.map((data) => (
                  <TableBody data={data} />
                ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Employees