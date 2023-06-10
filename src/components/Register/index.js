import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import styles from '../../styles/Login.module.css'

const Login = () => {
  const router = useRouter()
  const REACT_APP_BACKEND_URL = 'http://localhost:8000/register'

  const [data, setData] = useState({
    email: '',
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const formSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(REACT_APP_BACKEND_URL, data)
      console.log(res.data)
      alert('User has been registered successfully')
      setTimeout(() => {
        router.push(`/profile/${res.data.data._id}`)
      }, 2000)
    } catch (err) {
      console.log(err)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>

      <div className="login_wrap">
        <form className={styles.form}>
          <h1 className={styles.heading}>Register User</h1> <br /> <br/> <br/> <br/>
          {/* <label htmlFor="email" className={styles.label}>
            Email
          </label> */}
          <input
            className={styles.input}
            name="email"
            type="text"
            required
            placeholder="User email"
            onChange={handleChange}
          />
          {/* <label htmlFor="username" className={styles.label}>
            Username
          </label> */}
          <input
          className={styles.input}
            name="username"
            type="text"
            required
            placeholder="Username"
            onChange={handleChange}
          />
          {/* <label htmlFor="password" className={styles.label}>
            Password
          </label> */}
          <input
          className={styles.input}
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button onClick={formSubmit} className={styles.button}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login
