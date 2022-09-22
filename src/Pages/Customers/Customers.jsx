/* eslint-disable no-restricted-globals */
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

  // Edit Function
  const handleEdit = (id) => {
    console.log(id);
    alert(id)
  }

  const handleDelete = (id) => {
    const confirmDelete = confirm('Are you sure?');

    if (confirmDelete) {
      db.collection('customers').doc({ id }).delete();
      alert(`Successfully removed ${id}`);

      // Refetch the customers data
      db.collection('customers').get();
    } else {
      return
    }
  }
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
            customers.length === 0 ? (
              <div className={classes.empty}>
                <h2>Sorry, no customer available</h2>
              </div>
            ) :
              customers?.map(({ name, id, contact }) => (
                <div key={id} className={classes.contact}>
                  <p>{id}</p>
                  <h2>{name}</h2>
                  <h2>{contact}</h2>
                  <br />
                  <div className={classes.controls}>
                    <Link to={`/${id}/edit-customer`}>Edit</Link>
                    <button type='button' onClick={() => handleDelete(id)}>Delete</button>
                  </div>
                </div>
              ))
          }
        </div>
      </div>
    </>
  )
}

export default Customers