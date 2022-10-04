import React, { useEffect, useState } from 'react'
import classes from './Customers.module.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import db from '../../DB/db'
import { Link } from 'react-router-dom'
import TableBody from '../../Components/Table/TableBody'

const Customers = () => {
  const [customers, setcustomers] = useState([])

  useEffect(() => {
    let unsub = () => {
      db.collection('customers').get().then(allcustomers => {
        setcustomers(allcustomers)
      })
    }

    return () => {
      unsub()
    };
  }, [customers])

  return (
    <>
      <Sidebar />
      <div className={classes.customers__page}>
        <div className={classes.customers__hd}>
          <h2>Customers</h2>
        </div>

        <div className={classes.addcustomersBtn}>
          <Link to='/new-customer'>Add customer</Link>
        </div>

        {/* Display all products */}
        <div className={classes.customers_display}>
          <div className={classes.table}>
            <th>
              <tr>Id</tr>
              <tr>Customer's Name</tr>
              <tr>Contact</tr>
              <tr>Controls</tr>
            </th>
          </div>
          <div className={classes.customer__lists}>
            {
              customers?.length === 0 ? (
                <div className={classes.empty}>
                  <h2>Sorry, no customer available</h2>
                </div>
              ) :
                customers?.map((data) => (
                  <TableBody data={data} />
                ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Customers