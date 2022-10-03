import React from 'react'
import classes from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import AddFiles from '../../icons/add-files'
import Customer from '../../icons/customer'
import Dashboard from '../../icons/dashboard'
import Cogs from '../../icons/cogs'
import Package from '../../icons/package'
import Bus from '../../icons/bus'

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.brand}>
        <h3>AUTO MECH</h3>
      </div>

      {/* Navigation */}
      <nav className={classes.nav}>
        <NavLink to='/dashboard' style={({ isActive }) => {
          return {
            backgroundColor: isActive ? 'dodgerblue' : 'transparent',
            color: 'white'
          }
        }}>
          <span>
            <Dashboard fill='white' className={classes.icons} height='20' width='20' />
          </span>
          Dashboard
        </NavLink>
        <NavLink to='/new-product' style={({ isActive }) => {
          return {
            backgroundColor: isActive ? 'dodgerblue' : 'transparent',
            color: 'white'
          }
        }}>
          <span>
            <AddFiles fill='white' className={classes.icons} height='20' width='20' />
          </span>
          New Product
        </NavLink>
        <NavLink to='/products' style={({ isActive }) => {
          return {
            backgroundColor: isActive ? 'dodgerblue' : 'transparent',
            color: 'white'
          }
        }}>
          <span>
            <Package fill='white' className={classes.icons} height='20' width='20' />
          </span>
          Products
        </NavLink>
        <NavLink to='/customers' style={({ isActive }) => {
          return {
            backgroundColor: isActive ? 'dodgerblue' : 'transparent',
            color: 'white'
          }
        }}>
          <span>
            <Customer fill='white' className={classes.icons} height='20' width='20' />
          </span>
          Customers
        </NavLink>
        <NavLink to='/suppliers' style={({ isActive }) => {
          return {
            backgroundColor: isActive ? 'dodgerblue' : 'transparent',
            color: 'white'
          }
        }}>
          <span>
            <Bus fill='white' className={classes.icons} height='20' width='20' />
          </span>
          Suppliers
        </NavLink>
        <NavLink to='/employees' style={({ isActive }) => {
          return {
            backgroundColor: isActive ? 'dodgerblue' : 'transparent',
            color: 'white'
          }
        }}>
          <span>
            <Cogs fill='white' className={classes.icons} height='20' width='20' />
          </span>
          Employees
        </NavLink>
        {/* <NavLink to='/settings' style={({ isActive }) => {
          return {
            backgroundColor: isActive ? 'dodgerblue' : 'transparent',
            color: 'white'
          }
        }}>
          <span>
            <Cogs fill='white' className={classes.icons} height='20' width='20' />
          </span>
          Settings
        </NavLink> */}
      </nav>
    </div>
  )
}

export default Sidebar
