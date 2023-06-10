import axios from "axios";
import React, { useEffect, useState } from "react";
const BACKEND_URL = "http://localhost:8000"
// import Navbar from "../components/Navbar";
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import Link from "next/link";


export default function Profile() {

    const [data, setData] = useState({})
    const params = useParams();
    // console.log(params)
    const router = useRouter()
  const { id } = router.query;
  console.log(id)

    useEffect(()=>{
        const fun  = async()=>{
            try{
                const res = await axios.get(`${BACKEND_URL}/details/${id}`);
            console.log(res.data.data.details);
            setData(res.data.data)

            }catch(err){
                console.log(err)
            }
        }
        fun()
    },[])

  
  return (
    <>

      <div>hi</div>
      <div>Email: {data.email}</div>
        <div>Name: {data.details.name}</div>
        <div>username: {data.username}</div>
        <Link href={{
            pathname: "/updateProfile",
            query: data, // the data
          }}><button >Update Profile</button></Link>

      {/* <div className="student-profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center py-4">
              <div className="card shadow-sm">
                <div className="card-header bg-transparent text-center">
                  <img
                    className="profile_img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8s0zDf3sff4glrEK6DShUR45t4LvBFuy0A&usqp=CAU"
                    alt=""
                  />
                  <h1>
                    <strong>{user?.email}</strong>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
    </>
  );
}
