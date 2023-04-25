import React from "react";
import Link from "next/link";
import { UserContext } from "../contexts/user.context";
import { useState, useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Cookies from "js-cookie";
import axios from "axios";
import QRCode from "react-qr-code";


export default function Profile() {
  const [user, setUser] = useState(null);
  const REACT_APP_BACKEND_URL = "https://hackfest-backend-3y92.onrender.com/";
  // const {currentUser} = useContext(UserContext);
  // const currentUser =
  // console.log("hi");
  //   console.log(user);\
  // const user=Cookies.get("data");
  // console.log(Cookies.get("data"));
  // const user = localStorage.getItem("data");
  // console.log(user);/
  // console.log(window)
  // console.log(typeof(user));
  const [ann, setAnn] = useState([]);
  const [inQR, setInQR] = useState('');
  const [outQR, setOutQR] = useState('');
  const [att,setAtt]  = useState(0);
  let teamdat;
  useEffect(() => {
    const data = localStorage.getItem("Dammta");
    if (data) {
      try {
        setUser(JSON.parse(data));
        // console.log(JSON.parse(data));
        const teamid = JSON.parse(data).Team_Id;
        console.log(teamid);
        setInQR(`in/${teamid}`)
        setOutQR(`out/${teamid}`)
        const fun = async () => {
          teamdat = (await axios.get(`${REACT_APP_BACKEND_URL}${teamid}`)).data;
          setAnn(teamdat.announcement);
          setAtt(teamdat.attendance_counter);
        };
        fun();
        // console.log(teamdat);
        // console.log("hi", teamdat.announcement);
        // setAnn(teamdat?.announcement);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  // useEffect(() => {
  //   setAnn(teamdat?.announcement);
  //   console.log(teamdat?.announcement);
  // }, [teamdat]);
  // console.log(user?.announcement);
  return (
    <>
      <Navbar
        team_nav="/#sponsors"
        team_about="/#about"
        team_contact="/#contact"
      />

      <div className="student-profile">
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
     
    </>
  );
}
