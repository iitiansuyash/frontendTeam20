import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
// import TeamMemberInput from './TeamMemberInput'
import { UserContext } from '../../contexts/user.context'
// import { useRouter } from 'next/router'
// import { useNavigate } from "react-router-dom";
const Login = () => {
  const router = useRouter()
  const { setCurrentUser } = useContext(UserContext)
  // const navigate = useNavigate();
  const REACT_APP_BACKEND_URL = 'https://sat-olt.onrender.com/api/user';
  const [data, setData] = useState({
    email: '',
    password: '',

  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const formSubmit = async () => {
    console.log(data);

    setData({ ...data })
    try {
      const res = await axios.post(REACT_APP_BACKEND_URL, data)
      alert('User has been registerd successfully')
      console.log(res.data)
    //   setCurrentUser(res.data._doc)
    //   console.log(res.data._doc)
    //   localStorage.setItem('Dammta', JSON.stringify(res.data._doc))
    //   console.log(JSON.parse(localStorage.getItem('Dammta')))

      setTimeout(() => {
        router.push('/login')
      }, 2000)
    } catch (err) {
      alert(err)
    }

    // if (res.status == "200") {
    //   alert("You have successfully registered!");
    // } else {
    // }
    // try {
    //   const { dat } = await axios.post(REACT_APP_BACKEND_URL, data);
    // } catch (error) {
    //   console.log(error);
    // }
  }
  return (
    <div className="login_wrap">
      <div className="login_1">
        <span>Register User</span>
      </div>
      <form>
        <input
          name="email"
          type="text"
          placeholder="user email"
          onChange={(e) => {
            handleChange(e)
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={(e) => {
            handleChange(e)
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            formSubmit()
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
