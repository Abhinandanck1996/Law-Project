import { useRef } from "react";

const Contact = (props) => {
    let DisclimerRef=props.discliamer;
    let HandleClick=props.HandleClick1;

    let UsernameRef=useRef();
let EmailRef=useRef();
let PhoneRef=useRef();

let HandleClick1=()=>{
    let name=UsernameRef.current.value;
    let email=EmailRef.current.value;
    let phone=PhoneRef.current.value;
    console.log({name,email,phone});
}
    return ( 
        <div className="product-div">
        <div className="product-div1">
            <h2>Caring For You In The Long Term</h2>
        </div>
        <div className="contact-page">
            <h2>Contact</h2>
            <p>While this website provides general information, it does not constitute legal advice. The best way to get guidance on your specific legal issue is to contact a lawyer. To schedule a meeting with an attorney, please call the firm or complete the intake form below.</p>
        <p>Fields marked with an <span style={{color:"#e80000"}}>*</span> are required</p>

        <div className="contact-page1">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" ref={UsernameRef}/>
        </div>
        <div className="contact-page1">
            <label htmlFor="email" >Email</label>
            <input type="text" name="email" id="email" ref={EmailRef}/>
        </div>
        <div className="contact-page1">
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" ref={PhoneRef}/>
        </div>
        <div className="contact-page1">
        <label for="cars">India States</label>
  <select id="cars" name="cars">
    <option value="volvo">Karnataka</option>
    <option value="saab">Andra Pradesh</option>
    <option value="saab">Telangana</option>
    <option value="fiat">Kerala</option>
    <option value="audi">Tamil Nadu</option>
    <option value="saab">Goa</option>
    <option value="saab">Madhya Pradesh</option>
    <option value="saab">Gujarat</option>
  </select>
        </div>
        <div style={{marginTop:"20px"}}>
        <label for="nf-field-14_1" id="nf-label-field-14_1">How would you like to be contacted?  </label>
        <input type="checkbox" id="html" name="fav_language" value="email" style={{marginTop:"10px"}} />
  <label for="email" style={{position:"relative",top:"-20px",left:"12px"}}>Email</label>
  <input type="checkbox" id="css" name="fav_language" value="phone"/>
  <label for="phone" style={{position:"relative",top:"-20px",left:"12px"}}>Phone</label>
        </div>
        <div className="contact-page1"><label htmlFor="text-area">Brief description of your legal issue.</label>
            <textarea id="w3review" name="w3review" rows="4" cols="50"/>
</div>
                <div  className="btn">
                    <button onClick={HandleClick}>Discliamer</button>
                    <button>Privacy Policy</button>
                </div>
                <div className='disc' ref={DisclimerRef}>
                    <span style={{color:"#323232"}}> Disclaimer: The use of the internet or this form for communication with the firm or any individual member of the firm does not establish an attorney-client relationship. Confidential or time-sensitive information should not be sent through this form.</span>
                </div>
            <div className="contact-page1">
                    <button onClick={HandleClick1}>Get Started</button>
                </div>
        </div>
        <div className="Main-div7">
        <p className='p'>© 2022 <a href="#" className='Main-a'>Hill & Watchko, LLC</a>• All Rights Reserved</p>
        <p><a href="#" className='Main-a1'>Disclaimer</a>| <a href="#" className='Main-a1'> Site Map</a>|<a href="#" className='Main-a1'>Privacy Policy </a>|<a href="#" className='Main-a1'>Business Development Solutions</a>| by<a href="#" className='Main-a1'> FindLaw,</a>|  part of Thomson Reuters</p> 
     </div>
        </div>
     );
}
 
export default Contact;