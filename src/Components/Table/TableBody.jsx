import React from 'react'
import classes from './TableBody.module.css'

const TableBody = ({ data }) => {
  return (
    <div className={classes.table_wrapper}>
      <tb className={classes.table_body}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.category}</td>
        <td>{data.supplier}</td>
        <td>{data.contact}</td>
        <td>{data.price}</td>
        <td>{data.price}</td>
      </tb>
    </div>
  )
}

export default TableBody