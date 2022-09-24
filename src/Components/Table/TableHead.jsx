import React from 'react'
import classes from './TableHead.module.css'

const TableHead = ({ data }) => {
  return (
    <div className={classes.table_hd}>
      <th>
        <td>Id</td>
        <td>Name</td>
        <td>Category</td>
        <td>Supplier</td>
        <td>Contact</td>
        <td>Price</td>
        <td>Controls</td>
      </th>
    </div>
  )
}

export default TableHead