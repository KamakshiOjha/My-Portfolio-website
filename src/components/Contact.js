import React from 'react'
import './Contact.css';


export default function Contact() {
    function sendEmail(){
        
    }
  return (
   <>
   <div className='contact'>
    <div className='contact_in'>
        <div className='form_in'>
            <h2 className='h2_a'>Contact Me</h2>
            <form  className='form_c' action="">
                <label className='name_a' htmlFor="Name">NAME</label>
                <input className='name_i_a' type="Name" />
                <label className='email_a' htmlFor="Email">EMAIL</label>
                <input className='email_i_a' type="Name" />
                <label className='email_a' htmlFor="Email">MESSAGE ME</label>
                <textarea className="textarea_cf" name="write here" id="" cols="30" rows="10"></textarea>
                <button className='button_a'>Submit</button>
            </form>

        </div>
    </div>
   </div>
   </>
  )
}
