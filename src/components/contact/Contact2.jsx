// // import React, { useState } from 'react';
// // import emailjs from 'emailjs-com';
// // import './Contact.css';

// // const Contact = () => {
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         email: '',
// //         subject: '',
// //         message: ''
// //     });

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData({
// //             ...formData,
// //             [name]: value
// //         });
// //     };
// // console.log(formData);
// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         emailjs.sendForm('service_hq3107s', formData)
// //             .then((result) => {
// //                 console.log('Email sent successfully:', result.text);
// //                 // Optionally, show a success message to the user
// //             }, (error) => {
// //                 console.error('Error sending email:', error.text);
// //                 // Optionally, show an error message to the user
// //             });
// //     };



// //     return (
// //         <section className="contact container section">
// //             <h2 className="section__title">Get In Touch</h2>
// //             <div className="contact__container grid">
// //                 <div className="contact__info">
// //                     <h3 className="contact__title">Let's talk about everything!</h3>
// //                     <p className="contact__details">Send me an Email: rushikeshpisole3@gmail.com</p>
// //                 </div>
// //                 <form onSubmit={handleSubmit} className="contact__form">
// //                     <input type="hidden" name="email" value="rushikeshpisole3@gmail.com" />
// //                     <div className="contact__form-group">
// //                         <div className="contact__form-div">
// //                             <input
// //                                 type="text"
// //                                 className="contact__form-input"
// //                                 placeholder='Enter your name here!'
// //                                 name="name"
// //                                 value={formData.name}
// //                                 onChange={handleChange}
// //                             />
// //                         </div>
// //                         <div className="contact__form-div">
// //                             <input
// //                                 type="email"
// //                                 className="contact__form-input"
// //                                 placeholder='Enter your email here!'
// //                                 name="email"
// //                                 value={formData.email}
// //                                 onChange={handleChange}
// //                             />
// //                         </div>
// //                     </div>
// //                     <div className="contact__form-div">
// //                         <input
// //                             type="text"
// //                             className="contact__form-input"
// //                             placeholder='Enter your subject'
// //                             name="subject"
// //                             value={formData.subject}
// //                             onChange={handleChange}
// //                         />
// //                     </div>
// //                     <div className="contact__form-div contact__form-area">
// //                         <textarea
// //                             name="message"
// //                             id=""
// //                             cols="30"
// //                             rows="10"
// //                             className='contact__form-input '
// //                             placeholder='Write your message'
// //                             value={formData.message}
// //                             onChange={handleChange}
// //                         ></textarea>
// //                     </div>
// //                     <button type="submit" className="btn">Send Message</button>
// //                 </form>
// //             </div>
// //         </section>
// //     );
// // };

// // export default Contact;



// import React from "react";
// import SMTPClient from 'smtp-client';
// import './Contact.css'


// const Contact = () => {
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const formData = new FormData(e.target);
//         const name = formData.get('name');
//         const email = formData.get('email');
//         const subject = formData.get('subject');
//         const message = formData.get('message');

//         const smtp = new SMTPClient({
//             host: 'smtp.example.com',
//             port: 587,
//             secure: false,
//             auth: {
//                 user: 'your-email@example.com',
//                 pass: 'your-password'
//             }
//         });

//         smtp.send({
//             from: email,
//             to: 'rushikeshpisole3@gmail.com',
//             subject: subject,
//             text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//         }).then(() => {
//             console.log('Email sent successfully');
//             // Optionally, show a success message to the user
//         }).catch((error) => {
//             console.error('Error sending email:', error);
//             // Optionally, show an error message to the user
//         });
//     };

//     return (
//         <section className="contact container section">
//             <h2 className="section__title">Get In Touch</h2>

//             <div className="contact__container grid">
//                 <div className="contact__info">
//                     <h3 className="contact__title">Let's talk about everything!</h3>
//                     <p className="contact__details">Send me an Email.</p>
//                 </div>

//                 <form action="" className="contact__form">
//                     <div className="contact__form-group">

//                         <div className="contact__form-div">
//                             <input type="text" className="contact__form-input" placeholder='Enter your name here!' />
//                         </div>

//                         <div className="contact__form-div">
//                             <input type="email" className="contact__form-input" placeholder='Enter your email here!' />
//                         </div>
//                     </div>

//                     <div className="contact__form-div">
//                         <input type="text" className="contact__form-input" placeholder='Enter your subject' />
//                     </div>

//                     <div className="contact__form-div contact__form-area">
//                         <textarea name="" id="" cols="30" rows="10" className='contact__form-input ' placeholder='Write your message'></textarea>
//                     </div>

//                     <button onSubmit={handleSubmit} className="btn">Send Message</button>
//                 </form>
//             </div>
//         </section>
//     )
// }

// export default Contact
