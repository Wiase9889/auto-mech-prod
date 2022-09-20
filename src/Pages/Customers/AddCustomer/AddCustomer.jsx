import React, { useEffect, useState } from 'react'
import classes from './AddCustomer.module.css'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import db from '../../../DB/db'


const AddCustomer = () => {
  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')

  useEffect(() => {
    let autoGenId = () => {
      db.collection('customers').get().then(products => {
        setId(products.length + 1)
      })
    }

    return () => {
      autoGenId();
    }
  })

  // Function to add the user inputed values to the Database...
  const addCustomer = (event) => {
    event.preventDefault();

    let customerData = { id, name, contact }

    if (!id || !name || !contact) {
      alert('Please add a customer')
      return;
    } else {
      alert('Succesfully added customer')
      db.collection('customers').add(customerData)

      setId(id)
      setName('')
      setContact('')
    };
  }
  return (
    <>
      <Sidebar />
      <div className={classes.addcustomer}>
        <div className={classes.customer_hd}>
          <h2>Add New Customer</h2>
        </div>

        {/* Add New customer Form */}
        <form className={classes.customer_form} autoCorrect='true' onSubmit={addCustomer}>
          <div className={classes.form_group}>
            <label htmlFor="customer_id">Customer Id</label>
            <input
              type="number"
              id='customer_id'
              name='customer id'
              placeholder={`00${id}`}
              className={classes.customer_id}
              required
              disabled
              value={`00${id}`}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="customer_name">Customer Name</label>
            <input
              type="text"
              id='customer_name'
              name='customer name'
              placeholder='Customer name'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="customer_contact">Customer Contact</label>
            <input
              type="tel"
              id='customer_contact'
              name='customer contact'
              placeholder="+ (233) 123456789"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required />
          </div>

          {/* Submit */}
          <div className={classes.add_customer}>
            <button
              type="submit"
              className={classes.addcustomerBtn}
              onClick={addCustomer}
            >Add customer
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddCustomer