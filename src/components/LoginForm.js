import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { UserContext } from '../contexts/user.context.js'
import styles from '../styles/Login.module.css'

const Login = () => {
  // const navigate = useNavigate();
  const router = useRouter()
  const { setCurrentUser } = useContext(UserContext)
  const REACT_APP_BACKEND_URL = 'http://localhost:8000/login'
  const [data, setData] = useState({
    username: '',
    password: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const formSubmit = async () => {
    setData({ ...data })
    try {
      const res = await axios.post(REACT_APP_BACKEND_URL, data)
      console.log(res.data.data._id)
      alert('User has been logged in successfully');
      setTimeout(() => {
        console.log(data)
        router.push(`/profile/${res.data.data._id}`)
      }, 1000)
    } catch (err) {
      alert(err)
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
          <h1 className={styles.heading}>Login User</h1> <br/>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            className={styles.input}
            type="text"
            id="username"
            name="username"
            required
            placeholder="Team Leader's Email"
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <label htmlFor="username" className={styles.label}>
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => {
              handleChange(e)
            }}
          />

          <button
            className={styles.button}
            type="submit"
            onClick={(e) => {
              console.log('Checking Credentials...')
              e.preventDefault()
              formSubmit()
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
