import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "037fb4b2-c544-4d86-979e-9168bb62fcc7");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>We are here to assist you with any questions, concerns, or feedback you may have. Whether you need more information about our programs, require support with your applications, or simply want to share your thoughts, please feel free to get in touch. You can reach us by phone, email, or by filling out the contact form below</p>
            <ul>
                <li><img src={mail_icon} alt="" />contact@gmail.com</li>
                <li><img src={phone_icon} alt="" />910204800</li>
                <li><img src={location_icon} alt="" />Thane-maharashtra <br/> 400604</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                 <label>Yourour name</label>
                <input type='text' name='name' placeholder='enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name="message"  rows='6' placeholder='enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact