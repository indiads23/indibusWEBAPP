'use client'

import React,{useRef} from 'react';
import emailjs from '@emailjs/browser'
import {useRouter} from 'next/navigation'

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_apbecn9', 'template_lmyqvvc', form.current, 'qGqGA4VavT6GjR2n_')
      .then((result) => {
        console.log(result.text);
        alert(`Message sent successfully! I'll get back to you soon.`)
        router.push("/services")
      }, (error) => {
        console.log(error.text)
        alert(`Something went wrong! Please try again.`)
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div style={containerStyle}>

        <input type="text" placeholder="Name" name="user_name" id="name" style={inputStyle} required />

        <input type="email" placeholder="Email" name="user_email" id="email" style={inputStyle} required />

        <input type="tel" placeholder="Phone Number" name='phoneNumber' style={inputStyle} required />

        <input type="text" placeholder="Your Interest" name="subject" id="name" style={inputStyle} required />

        <textarea name="message" id="" cols="30" rows="3" style={inputStyle} placeholder='Write a Message for us'></textarea>


        <button type="submit" style={buttonStyle} className="registerbtn">Submit</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
