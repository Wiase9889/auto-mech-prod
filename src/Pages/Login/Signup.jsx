/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import classes from './Auth.module.css'
import { Link, useNavigate } from 'react-router-dom'
import User from '../../assets/user.png'
import Img from '../../assets/home.svg'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    // Creating a REGEX for validating the user's inputs...
    const lowerCase = /[a-z]/g;
    const upperCase = /[A-Z]/g;
    const numbers = /[0-9]/g;
    // const symbols = /[._+@~!]/g;

    const userCred = { username, password };

    // Checking all user input values...
    if (!username) {
      alert('Please add a username')
    } else if (!password) {
      alert('Please add a password')
    } else if (!confirmPass) {
      alert('PLease confirm your password')
    } else if (confirmPass !== password) {
      alert('Passwords do not match')
    } else if (!password.match(numbers)) {
      alert('Please add at least one number')
    } else if (!password.match(lowerCase)) {
      alert('Please add a lowercase letter')
    } else if (!password.match(upperCase)) {
      alert('Please add an uppercase letter')
    } else {
      setIsSubmitting(true)
      console.log('Submitting....');

      setTimeout(() => {
        // Saving our user's input into the LocalStorage as a local database...
        localStorage.setItem('userCred', JSON.stringify(userCred))
        alert('Success...')

        // Setting isSubmitting 'false' removes the loader inside the signup button...
        setIsSubmitting(false);

        // Replacing the current window with the Dashboard window
        // to prevent the user from going back to the signup screen...
        window.location.replace('/dashboard');

        // Resetting the inputs to its default state...
        setUsername('')
        setPassword('')
        setConfirmPass('')
        return
      }, 2000);
    }
  }

  return (
    <div className={classes.form__wrapper}>
      <Link to="/home" className={classes.home}>
        <img src={Img} alt="" />
      </Link>
      <img src={User} alt="user avatar" />
      <div className={classes.form__hd}>
        <h3>Sign up</h3>
      </div>
      <form id="signup__form">
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
            title='Must be at least 8 characters'
          />
        </div>
        <div className={classes.form__group}>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            placeholder="Confirm password"
            required
            id="confirm-password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            title='Must be at least 8 characters'
          />
        </div>
        <div className={classes.submit}>
          <button type="submit" id="submit" onClick={handleSignup} disabled={isSubmitting && true}>Create account</button>
        </div>
      </form>
    </div>
  )
}

export default Signup