
import React, { useRef, useState } from "react";
import './ContactForm.css';
import emailjs from "@emailjs/browser";




function ContactForm(){
        const form = useRef();
        const [done, setDone] = useState(false);
        const sendEmail = (e) => {
        e.preventDefault();
        if (
            form.current.user_name.value.length < 3 ||
            form.current.user_name.value.length > 20 ||
            form.current.user_email.value.length < 6 ||
            form.current.user_email.value.length > 20 ||
            form.current.user_contact.value.length < 10 ||
            form.current.user_contact.value.length > 10 ||
            form.current.message.value.length < 10 ||
            form.current.message.value.length > 60 
        ) {
            alert("Please fill in all fields with the minimum required length.");
            return;
        }
    
        //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        emailjs.sendForm('service_wqv2kpp', 'template_oo8gmjw', form.current, 'EjyZF9pGFtNLjFQSw')
            .then((result) => {
                console.log(result.text);
                setDone(true)
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
        };
    
    return(
        <div className="form-container">
            <h1>Send a message to us!</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name" required minLength={3} maxLength={20}/>
          <input type="email" name="user_email" className="user" placeholder="Email"  required minLength={6} maxLength={20}/>
          <input type="number" name="user_contact" className="user" placeholder="Contact Number" required minLength={10} maxLength={10}/>
          <textarea name="message" className="user" placeholder="Message" pattern="[0-9]+" required minLength={10} maxLength={60}/>
          <button type="submit" value="Send" onSubmit={sendEmail}>Send Message</button>
          <span style={{color:'green'}} >{done&&"Thank you so much for contacting us!"}</span>
          
        </form>
        </div>
    )
}
export default ContactForm;

