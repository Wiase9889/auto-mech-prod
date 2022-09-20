import React from 'react'
import classes from './Suppliers.module.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Suppliers = () => {
  return (
    <>
      <Sidebar />
      <div className={classes.suppliers}>
        <h2>Suppliers Page</h2>
      </div>
    </>
  )
}

export default Suppliers
