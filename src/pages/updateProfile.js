import { useState } from "react";
const BACKEND_URL = "http://localhost:8000";
import axios from "axios";
import { useRouter } from "next/router";

const updateProfile = () => {
  const router = useRouter();
  const data = router.query;
  console.log(data.username);
  console.log(data._id);
  const id = data._id
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    address: "",
    adhar: "",
    maritalstatus: "",
    incomesource: "",
    incomerange: "",
    children: "",
    education: "",
    occupation: "",
    occupationtype: "",
    workexperience: "",
    workexperienceposition: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the form data to the backend for updating the profile details
    // You can use an HTTP request library like axios to make the API call
    // Example:
    const res = await axios.post(`${BACKEND_URL}/update-profile/${id}`, formData);
    console.log(res);
    router.push(`/profile/${id}`)
  };
  return (
    <>
      <div>
        <h1>Update Profile</h1>
        <form onSubmit={handleSubmit}>
          {/* Render form fields for profile details */}
          <label>
            Name:
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              required
              name="age"
              value={formData.age}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label>
            Contact:
            <input
              type="number"
              name="contact"
              value={formData.contact}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={(e) => handleChange(e)}
            />
          </label>

          {/* Add more fields for other profile details */}

          <button type="submit">Update Profile</button>
        </form>
      </div>
    </>
  );
};

export default updateProfile;
