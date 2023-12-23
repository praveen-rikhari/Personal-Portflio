import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import contactImg from '../assets/contactImg.gif';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                //add you ids of email js
                'your_service_id',
                'your_template_id',
                form.current,
                'your_user_id'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success(`Email sent Successfully 👍`);
                },
                (error) => {
                    console.log(error.text);
                    toast.error(`Failed to send email 👎`);
                }
            );
    };

    return (
        <>
            <section className="contact" id='contact'>
                <Toaster
                    position='top-center'
                    toastOptions={{
                        duration: 3000, style: {
                            border: '1px solid #713200',
                        },
                    }}
                />

                <div className="container">
                    <h3>Contact Me 📞</h3>
                    <h6>Don't be shy! Hit me up! 👇</h6>
                    <div className="contact-content">
                        <div className="contact-img">
                            <img src={contactImg} alt="contact img" />
                        </div>
                        <div className="contact-form">
                            <h1>Get in touch !</h1>
                            <form className="form" ref={form} onSubmit={sendEmail} >
                                <div className="group">
                                    <i className='bi bi-at'></i>
                                    <input placeholder="Enter name" type="text" name='user_name' required />
                                </div>
                                <div className="group">
                                    <i className='bi bi-envelope-fill'></i>
                                    <input placeholder="Enter email" type="email" id="email" name="user_email" required />
                                </div>
                                <div className="group">
                                    <textarea placeholder="Leave your message..." id="message" name="message" rows="6" required ></textarea>
                                </div>
                                <button type="submit">
                                    Send <i className="bi bi-send-fill"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;