import React from 'react'
import classes from './TableBody.module.css'
// import Pencil from '../../icons/pencil'
import TrashCan from '../../icons/trash-can'

import db from '../../DB/db'

const TableBody = ({ data }) => {

  const handleDelete = (id) => {
    try {
      db.collection('products').doc({ id }).delete().then(() => {
        db.collection('products').get();
      })
  
      alert(`Product with id ${data.id} successfully deleted..`)
    } catch (error) {
      alert(`Sorry, ${data.id} deletion failed`)
    }
  }
  return (
    <div className={classes.table_wrapper}>
      <tb className={classes.table_body}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.category || data.email}</td>
        <td>{data.supplier}</td>
        <td>{data.contact}</td>
        <td>{data.price || data.location}</td>
        <tb className={classes.controls}>
          {/* <button>
            <Pencil fill='white' className={classes.icons} height='20' width='20' />
          </button> */}
          <button type='button' onClick={() => handleDelete(data.id)}>
            <TrashCan fill='white' className={classes.icons} height='20' width='20' />
          </button>
        </tb>
      </tb>
    </div>
  )
}

export default TableBody