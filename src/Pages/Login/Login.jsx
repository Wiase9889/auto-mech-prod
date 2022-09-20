import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Auth.module.css'
import User from '../../assets/user.png'
import Img from '../../assets/home.svg'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const currUser = JSON.parse(localStorage.getItem('userCred'));

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === currUser?.username && password === currUser?.password) {
      setTimeout(() => {
        alert('Success')
        window.location.replace('/dashboard')
      }, 2000);
    } else if (username !== currUser?.username && password !== currUser?.password) {
      alert("Sorry, user doesn't exist. Please signup...")
      navigate('/signup')
    } else {
      alert('Sorry, wrong credentials')
      
      // Resetting the inputs to its default state...
      setUsername('')
      setPassword('')
      return;
    }
  }
  return (
    <div className={classes.form__wrapper}>
      <Link to="/home" className={classes.home}>
        <img src={Img} alt="" />
      </Link>
      <img src={User} alt="user avatar" />
      <div className={classes.form__hd}>
        <h3>Sign in</h3>
      </div>
      <form id="signin__form">
        <div className={classes.form__group}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            required
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={classes.form__group}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={classes.submit}>
          <button type="submit" id="submit" onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login