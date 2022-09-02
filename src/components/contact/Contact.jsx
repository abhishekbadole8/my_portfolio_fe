import React, { useState } from 'react'
import "./contact.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import email from "./img/email.svg";
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [details, setDetails] = useState({
        name: "", email: "", message: ""
    })

    const handelInp = (e) => {
        const { name, value } = e.target;
        setDetails((pre) => {
            return {
                ...pre,
                [name]: value
            }
        });
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hvfdgqp', 'template_sn61tso', form.current, '2Cu_OzBsQTMObX2_R')
        toast.success("Email Sent! Some will Contact You Shortly 😃", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setDetails({
            name: "", email: "", message: ""
        })
    };


    return (
        <>
            <section className="mt-5 contact" id="contact" style={{ marginBottom: "107px" }}>
                <div className="container">
                    <div className="project-title pb-3 text-center">
                        <h1 className="text-uppercase title-h1 mt-4">Get In Touch</h1>
                        <p className="para">
                            Contact Me
                        </p>
                    </div>

                    <div className="row contact_container mt-2">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <div className="row contact_decor">
                                <div className="col-md-4">
                                    <img src={email} alt="portfolio-1" className="img-fluid w-75 h-75" />
                                </div>
                                <div className="contact_option col-md-4">
                                    <MailOutlineIcon className='contact_option_icon' />
                                    <h4 className='colo1'>Email</h4>
                                    <h5 className='colo'>rnrathod16@gmail.com</h5>
                                    <a href="mailto:rnrathod16@gmail.com" rel="noreferrer" target="_blank">Send a Message</a>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <div className='w-75 h-75'>
                                <form ref={form} onSubmit={sendEmail}>
                                    <input type="text" name="name" placeholder='Enter Your Name' value={details.name} required onChange={handelInp} />
                                    <input type="email" name="email" placeholder='Enter Your Email' value={details.email} required onChange={handelInp} />
                                    <textarea name="message" rows="5" placeholder='Your Message' value={details.message} required onChange={handelInp}></textarea>
                                    <button type='submit' className='btn button primary-button mr-4 text-uppercase extra'>Send Message</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </>
    )
}

export default Contact