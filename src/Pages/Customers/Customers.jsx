/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import classes from './Customers.module.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import db from '../../DB/db'

const Customers = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    // Function to add the user inputed values to the Database...
    let unsubscribe = () => {
      db.collection('customers').get().then(customers => {
        setCustomers(customers)
      })
    }

    return () => {
      unsubscribe()
    }
  }, [])

  // 
  return (
    <>
      <Sidebar />
      <div className={classes.customers}>
        <div className={classes.customer_hd}>
          <h2>Customers</h2>
        </div>

        <div className={classes.addCustomerBtn}>
          <Link to='/new-customer'>Add Customer</Link>
        </div>

        {/* Display all Customers */}
        <div className={classes.contact_display}>
          {
            customers.length === 0 ? <h2>Sorry, no customer available</h2> :
              customers?.map(({ name, id, contact }) => (
                <div key={id} className={classes.contact}>
                  <p>{id}</p>
                  <h2>{name}</h2>
                  <h2>{contact}</h2>
                  <br />
                </div>
              ))
          }
        </div>
      </div>
    </>
  )
}

export default Customers