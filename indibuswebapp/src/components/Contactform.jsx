'use client'

import React,{useRef, useState} from 'react';
import emailjs from '@emailjs/browser'
import {useRouter} from 'next/navigation'
import axios from 'axios';
const RegistrationForm = () => {
  const containerStyle = {
    textAlign: '',
    padding: 'px',
  };

  const inputStyle = {
    width: '100%',
    padding: '15px 10px',
    margin: '4px 0',
    display: 'inline-block',
    boxSizing: 'border-box',
    border: '0.5px solid #C9D4D5',
    fontFamily : ' Gill Sans, sans-serif ',
    resize : "none"
  };

  const buttonStyle = {
    backgroundColor: '#0E656A',
    color: 'white',
    padding: '14px 20px',
    margin: '8px 0',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  };
  const router = useRouter()
  const form = useRef();
  const [loading,setLoading] = useState(false)
  const [contact,setContact] = useState({
    name:"",
    email:"",
    phoneNumber:"",
    interest:"",
    message:""
  }) 
  const sendForm =async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const response = await axios.post("https://indibus.net/api/contactus/sendcontact",contact,
      router.push("/services")
      )
      
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  };

  return (
    <form ref={form} onSubmit={sendForm}>
      <div style={containerStyle}>

        <input type="text" placeholder="Name" name="user_name" id="name" onChange={(e)=>setContact({...contact,name:e.target.value})} style={inputStyle} required />

        <input type="email" placeholder="Email" name="user_email" id="email" onChange={(e)=>setContact({...contact,email:e.target.value})} style={inputStyle} required />

        <input type="tel" placeholder="Phone Number" name='phoneNumber' onChange={(e)=>setContact({...contact,phoneNumber:e.target.value})} style={inputStyle} required />

        <input type="text" placeholder="Your Interest" name="subject" id="name" onChange={(e)=>setContact({...contact,interest:e.target.value})} style={inputStyle} required />

        <textarea name="message" id="" cols="30" rows="3" style={inputStyle} onChange={(e)=>setContact({...contact,message:e.target.value})} placeholder='Write a Message for us'></textarea>

      {loading?<button className="registerbtn">Loading</button>:<button type="submit" style={buttonStyle} className="registerbtn">Submit</button>}
      </div>
    </form>
  );
};

export default RegistrationForm;
