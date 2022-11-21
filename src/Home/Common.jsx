import React ,{useRef, useState}from 'react';

const Common = () => {
    let[disc,setDisc]=useState(true)
let UsernameRef=useRef();
let EmailRef=useRef();
let PhoneRef=useRef();
let DisclimerRef=useRef();
let [item,setItem]=useState('')

let HandleClick=()=>{
    let name=UsernameRef.current.value;
    let email=EmailRef.current.value;
    let phone=PhoneRef.current.value;
    console.log({name,email,phone});
}

let HandleClick1=()=>{
    setDisc(!disc)
    if (disc==true) {
        DisclimerRef.current.classList.add("open")
    }
    else{
        DisclimerRef.current.classList.remove("open")
    }
}
    return ( 
        <div>
              <div>
        <div className='Main-div6'>
            <p>Contact Our Office</p>
            <h6>Fields marked with an <span>*</span> are required</h6>
            <div className='input-main-div'>
           
                <div className='input-div'><label htmlFor="name">Name</label>
                <input type="text"  id="name" name="name" ref={UsernameRef}/></div>
                <div className='input-div'><label htmlFor="email">Email</label>
                <input type="text" id='email' name='email' ref={EmailRef} /></div>
                <div className='input-div'><label htmlFor="Phone">Phone</label>
                <input type="tel"  id='phone' name="phone" ref={PhoneRef}/></div>
              
            </div>
            <div className='input-div1'><label htmlFor="text-area">Brief description of your legal issue.</label>
            <textarea id="w3review" name="w3review" rows="4" cols="50"/>
</div>
                <div className='input-div2'>
                    <button onClick={HandleClick1}>Discliamer</button>
                    <button>Privacy</button>
                </div>
                <div className='disc' ref={DisclimerRef}>
                    <span style={{color:"#323232"}}> Disclaimer: The use of the internet or this form for communication with the firm or any individual member of the firm does not establish an attorney-client relationship. Confidential or time-sensitive information should not be sent through this form.</span>
                </div>
            <div className='submit'>
                    <button  onClick={HandleClick}>Submit</button>
                </div>
        </div>
       </div>
     <div className="Main-div7">
        <p className='p'>© 2022 <a href="#" className='Main-a'>Hill & Watchko, LLC</a>• All Rights Reserved</p>
        <p><a href="#" className='Main-a1'>Disclaimer</a>| <a href="#" className='Main-a1'> Site Map</a>|<a href="#" className='Main-a1'>Privacy Policy </a>|<a href="#" className='Main-a1'>Business Development Solutions</a>| by<a href="#" className='Main-a1'> FindLaw,</a>|  part of Thomson Reuters</p> 
     </div>
        </div>
     );
}
 
export default Common;