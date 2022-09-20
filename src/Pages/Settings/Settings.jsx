import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import classes from './Settings.module.css'

const Settings = () => {
  return (
    <>
      <Sidebar />
      <div className={classes.settings}>
        <h2>Settings page</h2>
      </div>
    </>
  )
}

export default Settings
