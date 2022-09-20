/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import classes from './Dashboard.module.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import db from '../../DB/db'


const Dashboard = () => {
  const [productLength, setProductLength] = useState(null)
  const [customersLength, setCustomersLength] = useState(null)
  const [suppliersLength, setSuppliersLength] = useState(null)
  const [employeesLength, setEmployeesLength] = useState(null)

  useEffect(() => {
    // Products
    db.collection('products').get().then(products => {
      setProductLength(products.length)
    })

    // Customers
    db.collection('customers').get().then(customer => {
      setCustomersLength(customer.length)
    })

    // Suppliers
    db.collection('suppliers').get().then(supplier => {
      setSuppliersLength(supplier.length)
    })

    // Employees
    db.collection('employees').get().then(employees => {
      setEmployeesLength(employees.length)
    })
  }, [productLength, customersLength])

  return (
    <>
      <Sidebar />
      <div className={classes.dashboard}>
        <div className={classes.panel}>
          <div className={classes.card}>
            <h2 className={classes.length}>
              {productLength}
            </h2>
            <p className={classes.name}>{productLength < 2 ? "Product" : "Products"}</p>
          </div>
          <div className={classes.card}>
            <h2 className={classes.length}>
              {customersLength}
            </h2>
            <p className={classes.name}>{customersLength < 2 ? "Customer" : "Customers"}</p>
          </div>
          <div className={classes.card}>
            <h2 className={classes.length}>
              {suppliersLength}
            </h2>
            <p className={classes.name}>{customersLength < 2 ? "Supplier" : "Suppliers"}</p>
          </div>
          <div className={classes.card}>
            <h2 className={classes.length}>
              {employeesLength}
            </h2>
            <p className={classes.name}>{customersLength < 2 ? "Employee" : "Employees"}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
