import React, { useEffect, useState } from 'react'
import classes from './Supplier.module.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import db from '../../DB/db'

const Addsupplier = () => {
  // state values..
  const [id, setId] = useState(0)
  const [location, setLocation] = useState('')
  const [supplier, setSupplier] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    let autoGenId = () => {
      db.collection('suppliers').get().then(suppliers => {
        setId(suppliers.length + 1)
      })
    }

    return () => {
      autoGenId();
    }
  })

  // Function to add the user inputed values to the Database...
  const addsupplier = (event) => {
    event.preventDefault();

    let supplierData = { id, location, supplier, contact, email }

    if (!id || !location || !supplier || !contact || !email) {
      alert('Please add a supplier')
      return;
    } else {
      alert('Succesfully added supplier')
      db.collection('suppliers').add(supplierData)

      setId(id)
      setLocation('')
      setContact('')
      setSupplier('')
      setEmail('')
    };
  }

  return (
    <>
      <Sidebar />
      <div className={classes.add_suppliers}>
        <div className={classes.supplier_hd}>
          <h2>Add New supplier</h2>
        </div>

        {/* Add New supplier Form */}
        <form className={classes.supplier_form} autoCorrect='true' onSubmit={addsupplier}>
          <div className={classes.form_group}>
            <label htmlFor="supplier_id">Supplier Id</label>
            <input
              type="number"
              id='supplier_id'
              name='supplier id'
              placeholder={`00${id}`}
              className={classes.supplier_id}
              required
              disabled
              value={`00${id}`}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="suppliers_name">Supplier Name</label>
            <input
              type="text"
              id='suppliers_name'
              name='suppliers name'
              placeholder="Supplier's name"
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              required
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="suppliers_email">Supplier Email</label>
            <input
              type="email"
              id='suppliers_email'
              name='suppliers email'
              placeholder="Supplier's email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="supplier_name">Supplier Location</label>
            <input
              type="text"
              id='supplier_location'
              name='supplier location'
              placeholder='Supplier location'
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="suppliers_contact">Supplier Contact</label>
            <input
              type="tel"
              id='suppliers_contact'
              name='suppliers contact'
              placeholder="+ (233) 123456789"
              // minLength={10}
              // maxLength={13}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required />
          </div>

          {/* Submit */}
          <div className={classes.add_supplier}>
            <button
              type="submit"
              className={classes.addsupplierBtn}
              onClick={addsupplier}
            >Add supplier
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Addsupplier