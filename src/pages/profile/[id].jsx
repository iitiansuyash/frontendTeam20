import axios from 'axios'
import React, { useEffect, useState } from 'react'
const BACKEND_URL = 'http://localhost:8000'
// import Navbar from "../components/Navbar";
// import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Profile() {
  const [data, setData] = useState({})
  const router = useRouter()
  const { id } = router.query
  console.log(id)

  useEffect(() => {
    const fun = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/details/${id}`)
        console.log(res.data.data.details)
        setData(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fun()
  }, [])

  return (
    <>
      <nav>Navbar it is</nav>
      {/* <Navbar/> */}
      <div>Email: {data.email}</div>
      <div>Name: {data.details?.name}</div>
      <div>username: {data.username}</div>
      <div>Age: {data.details?.age}</div>
      <div>Gender: {data.details?.gender}</div>
      <div>Contact: {data.details?.contact}</div>
      <div>Address: {data.details?.address}</div>
      <div>Adhar: {data.details?.adhar}</div>
      <div>Marital Status: {data.details?.maritalstatus}</div>
      <div>Income Source: {data.details?.incomesource}</div>
      <div>Income Range: {data.details?.incomerange}</div>
      <div>Children: {data.details?.children}</div>
      <div>Education: {data.details?.education}</div>
      <div>Occupation: {data.details?.occupation}</div>
      <div>Occupation Type: {data.details?.occupationtype}</div>
      <div>Work Experience: {data.details?.workexperience}</div>
      <div>
        Work Experience Position: {data.details?.workexperienceposition}
      </div>
      <Link
        href={{
          pathname: '/updateProfile',
          query: data, // the data
        }}
      >
        <button>Update Profile</button>
      </Link>
    </>
  )
}
