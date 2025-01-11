import React from "react";
import { useState, useEffect } from "react";
import {
  db,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
} from "../backend/firebase.js";
import "../contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [data, setData] = useState([]); //state for data inside the firestore

  // not the real-time but still used for fetching
  // useEffect(() => {
  //fetching data from the Firestore
  // const fetchData = async () => {
  //   const dataCollection = collection(db, "userInfo");
  //   const fetchedData = await getDocs(dataCollection);
  //   const finalData = fetchedData.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));
  //   setData(finalData);
  // console.log(finalData)
  // };
  // fetchData(); //fetching data from the firestore by simpy calling the functions we just created
  // }, []); // empty array ensures this runs only one time when component mounts



  // listening for the real-time changes in the firstore collection
  useEffect(() => {
    const dataCollection = collection(db, "userInfo");
    const fetchData = onSnapshot(dataCollection, (snapshot) => {
      const finalData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(finalData);
    });

    //clean up the listener on component unmount
    return () => fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // console.log(formData.message);

  //on form submission
  const submitHandle = async (e) => {
    if(formData)
    e.preventDefault(); //prevents page refresh

    //saving data to the firestore, is asynchronous process
    if(formData.firstName|| formData.email || formData.lastName || formData.message)
    {
      try {
        const dataCollection = collection(db, "userInfo");
        await addDoc(dataCollection, {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        });
        console.log("Information succesfully added to the database");
      } catch (error) {
        console.error("Erro adding user:", error);
      }
  
      //clearing the form fields after submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
    else{
      alert(`Please fill out at least one the fields before submitting.`)
    }
  };

  return (
    <div className="backgroundColor" style={{ minHeight: "100vh" }}>
      <p className="contact">CONTACT ME</p>
      <form className="form" onSubmit={submitHandle}>
        <div className="formGroup">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Your First Name"
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Your Last Name"
            />
          </label>
        </div>

        <div className="formGroup">
          <label>
            Email Address:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
            />
          </label>
        </div>

        <div className="formGroup">
          <label>
            Comments/Questions:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
          </label>
        </div>

        <div className="formGroup">
          <button className="buttonMessage" type="submit">Send Message</button>
        </div>
      </form>

      <div>
        <p className="submissionParagraph">Submit your details and see your live data from Firestore</p>
      </div>

      <div class="flex-container">
        {data.map((firestoreData)=>(<div class="flex-item">
          <p>{firestoreData.firstName}</p>
          <p>{firestoreData.lastName}</p>
          <p>{firestoreData.email}</p>
        </div>))}
        
      </div>
    </div>
  );
};

export default Contact;
