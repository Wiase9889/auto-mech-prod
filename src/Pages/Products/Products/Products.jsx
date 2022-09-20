import React from 'react'
import classes from './Products.module.css'
import Sidebar from '../../../Components/Sidebar/Sidebar'

const Products = () => {
  return (
    <>
      <Sidebar />
      <div className={classes.products}>
        <h2>Products page</h2>
      </div>
    </>
  )
}

export default Products