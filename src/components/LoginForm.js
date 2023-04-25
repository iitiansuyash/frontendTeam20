import React, { useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { UserContext } from "../contexts/user.context.js";
import styles from "../styles/Login.module.css";


const Login = () => {
  // const navigate = useNavigate();
  const router = useRouter();
  const { setCurrentUser } = useContext(UserContext);
  const REACT_APP_BACKEND_URL =
    "https://sat-olt.onrender.com/api/auth/signin";
  const [data, setData] = useState({
    email: "",
    password: "",
    // id:'',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const formSubmit = async () => {
    // console.log(data);

    setData({ ...data });
    try {
      const res = await axios.post(REACT_APP_BACKEND_URL, data);
      // alert(res.data.message);
      // console.log(res.data.data);
      console.log(res.data)
      setCurrentUser(res.data);
      // console.log(res);
      // localStorage.setItem("Dammta", JSON.stringify(res.data.data));
      // console.log(JSON.parse(localStorage.getItem("data")));
      setTimeout(() => {
        console.log(data);
        const userid = JSON.stringify(data).id;
        console.log(res.data.user.id);
        router.push({
          pathname: `/user/${res.data.user.id}`,
          query: { 
            id: res.data.user.id,
            email:res.data.user.email,
            name:res.data.user.name,
           },
        } );
      }, 1000);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>

      <div className="login_wrap">
        <form className={styles.form}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            className={styles.input}
            type="text"
            id="username"
            // name="Player_Email"
            name="email" 
            required
            placeholder="Team Leader's Email"
            onChange={(e) => {
              handleChange(e);
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
              handleChange(e);
            }}
          />

          <button
            className={styles.button}
            type="submit"
            onClick={(e) => {
              console.log("Checking Credentials...");
              e.preventDefault();
              formSubmit();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
