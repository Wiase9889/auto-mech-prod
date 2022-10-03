import React, { useLayoutEffect, useState } from 'react'
import classes from './Suppliers.module.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import db from '../../DB/db'
import { Link } from 'react-router-dom'
import TableBody from '../../Components/Table/TableBody'

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([])

  useLayoutEffect(() => {
    let unsub = () => {
      db.collection('suppliers').get().then(allsuppliers => {
        setSuppliers(allsuppliers)
      })
    }

    return () => {
      unsub()
    };
  }, [suppliers])

  return (
    <>
      <Sidebar />
      <div className={classes.suppliers_page}>
        <div className={classes.suppliers_hd}>
          <h2>Suppliers</h2>
        </div>

        <div className={classes.addsuppliersBtn}>
          <Link to='/new-supplier'>Add supplier</Link>
        </div>

        {/* Display all products */}
        <div className={classes.suppliers_display}>
          <div className={classes.table}>
            <th>
              <tr>Id</tr>
              <tr>Supplier's Name</tr>
              <tr>Email</tr>
              <tr>Contact</tr>
              <tr>Location</tr>
              <tr>Controls</tr>
            </th>
          </div>
          <div className={classes.supplier__lists}>
            {
              suppliers?.length === 0 ? (
                <div className={classes.empty}>
                  <h2>Sorry, no supplier available</h2>
                </div>
              ) :
                suppliers?.map((data) => (
                  <TableBody data={data} />
                ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Suppliers