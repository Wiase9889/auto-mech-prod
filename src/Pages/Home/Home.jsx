import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Home.module.css'

import PlusIcon from '../../icons/plus'
import User from '../../assets/user.png'


const Home = () => {
  return (
    <div className={classes.link__wrapper}>
      <Link to="/signup">
        <div className={classes.plusIcon_bg}>
          <PlusIcon className={classes.plus_icon} fill='white' />
        </div>
        Create account
      </Link>
      <Link to="/login">
        <img src={User} alt="plus icon" />
      </Link>
    </div>
  )
}

export default Home