import React,{useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_j5lrs3i', 'template_1mqzjhr', form.current, '0dDqhZg44Stl2PfQ7')
            .then((result) => {
                alert("Sent Message Successfully ✅")
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            emailjs.sendForm('service_j5lrs3i', 'template_y8rmu1m', form.current, '0dDqhZg44Stl2PfQ7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section className="contact">
            <div className="content">
                <h2>Contact Us</h2>
            </div>
            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon"><i className="fa-sharp fa-solid fa-location-dot" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>Hiramandalam <br /> Srikakulam <br /> </p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon"><i className="fa-solid fa-phone" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p> +91 8099559911 </p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon"><i className="fa-solid fa-envelope" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p> chandrakiranreddykovvuri@gmail.com </p>
                        </div>
                    </div>
                </div>
                <div className="contactForm">
                    <form ref={form} onSubmit={sendEmail}>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" name='user_name' required />
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="email" name='user_email' required />
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <input type="tel" name='user_phone' required />
                            <span>Phone</span>
                        </div>
                        <div className="inputBox">
                            <textarea required name='user_message'></textarea>
                            <span>Type your Message</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
