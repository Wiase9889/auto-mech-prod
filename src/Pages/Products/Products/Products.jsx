import React, { useLayoutEffect, useState } from 'react'
import classes from './Products.module.css'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import db from '../../../DB/db'
import { Link } from 'react-router-dom'
import TableBody from '../../../Components/Table/TableBody'

const Products = () => {
  const [products, setProducts] = useState([])

  useLayoutEffect(() => {
    let unsub = () => {
      db.collection('products').get().then(allproducts => {
        setProducts(allproducts)
      })
    }

    return () => {
      unsub()
    };
  }, [products])


  // const handleDelete = (id) => {
  //   alert(`${id} deleted...`)
  // }

  return (
    <>
      <Sidebar />
      <div className={classes.products_page}>
        <div className={classes.products_hd}>
          <h2>Products</h2>
        </div>

        <div className={classes.addproductsBtn}>
          <Link to='/new-product'>Add products</Link>
        </div>

        {/* Display all products */}
        <div className={classes.products_display}>
          <div className={classes.table}>
            <th>
              <tr>Id</tr>
              <tr>Name</tr>
              <tr>Category</tr>
              <tr>Supplier</tr>
              <tr>Contact</tr>
              <tr>Price</tr>
              <tr>Controls</tr>
            </th>
          </div>
          <div className={classes.product__lists}>
            {
              products?.length === 0 ? (
                <div className={classes.empty}>
                  <h2>Sorry, no product available</h2>
                </div>
              ) :
                products?.map((data) => (
                  <TableBody data={data} />
                ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Products