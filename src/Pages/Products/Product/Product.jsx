import React from 'react'
import classes from './Product.module.css'
import Sidebar from '../../../Components/Sidebar/Sidebar'

const Product = () => {
  return (
    <>
      <Sidebar />
      <div className={classes.product}>
        <h2>Product Page</h2>
      </div>
    </>
  )
}

export default Product