import React, { useState } from 'react'
import './Contact.css';


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
      window.location.href = `mailto:kkamakshiojha@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(emailBody)}`;
    };
  return (
   <>
   <div className='contact'>
    <div className='contact_in'>
        <div className='form_in'>
            <h2 className='h2_a'>Contact Me</h2>
            <form  className='form_c' action="" onSubmit={handleFormSubmit}>
                <label className='name_a' htmlFor="Name">NAME</label>
                <input className='name_i_a' type="Name" value={name}
                onChange={(e) => setName(e.target.value)}
                required/>
                <label className='email_a' htmlFor="Email">EMAIL</label>
                <input className='email_i_a' type="Name" value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
                <label className='email_a' htmlFor="Email">MESSAGE ME</label>
                <textarea className="textarea_cf" name="write here" id="" cols="30" onChange={(e) => setMessage(e.target.value)}
                rows="4"
                required></textarea>
                <button className='button_a'>Submit</button>
            </form>

        </div>
    </div>
   </div>
   </>
  )
}
