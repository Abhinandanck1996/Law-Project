import React ,{useEffect, useRef, useState}from 'react';
import Common from './Common';
import MyImage from './Hill-img.jpeg';
import MyImage1 from './image.jpg';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const Home = () => {
let [state,setState]=useState([])
let[loading,setLoding]=useState(true)

 useEffect(()=>{
   setTimeout(()=>{
    fetch("http://localhost:8000/posts").then((res)=>res.json()).then((Response)=>{
        setState(Response)
    }).catch(err=>console.log(err))
    setLoding(false)
   },[2000])
},[state])

    return ( 
  <section>
          <div className="Main-div">
      <div className="Main-div1">
      <div>
      <h4>Caring For You In The Long Term</h4>
        <p>Hill & Watchko, LLC (formerly Bettis, Hill & Vann, LLC) is a premier boutique wills, trusts, estates, elder law, special needs planning and fiduciary litigation firm providing personalized, efficient, and reasonably priced services of the quality found in the typically large, downtown law firms.</p>
      <a href="/" className='a'>Plan For Your Future</a>
      </div>
      </div>
      <div className="Main-div2">
            <h4>Conscientious estate planning care with exceptional results for Atlanta area residents.</h4>
        </div>
       
        <div className="Main-div3">
        {loading && <AiOutlineLoading3Quarters/>}
{state.map(value=>{
    return(
        <div className='Main-subdiv'>
           <div>
            <img src={value.url} alt="Images" />
            <div className='Main-sub'>
            <h3>{value.title}</h3>
            <a href='#' className='a'>{value.text}</a>
            </div>
           </div>
            </div>
    )
})}
        </div>
        <div className='Main-div4'>
       <div className='div-img'>
        <img src={MyImage} alt="Family" />
       </div>
       <div className='div-text'>
        <h2>Wise Planning For Life’s
Unique Challenges</h2>
<span>Life is full of challenges, both expected and unexpected. With our focused and extensive experience on the issues surrounding will, trust and estate planning, estate and trust administration, elder law, fiduciary litigation (trust and estate disputes), and related areas, the attorneys at Hill & Watchko, LLC can help you plan and address these challenges. We believe that true professionalism goes beyond expertise and make it our goal to meet clients’ needs with compassion and understanding. Let our experience enhance your goals for yourself, your family, and institutions that you love.</span>
       </div>
       </div>
       <div className='Main-div5'>
       <div className='div-text'>
        <h2>Decades Of Experience Providing For Atlanta’s Aging Population</h2>
<span>Our attorneys have over 100 years of experience in estate planning and other areas of law. We tailor our knowledge and experience to your needs. By focusing on your desires for yourself and your loved ones, we help achieve an optimal plan, which you can rely upon. Our attorneys provide you with experienced care that:
    <li style={{marginTop:"20px"}}>Identifies your priorities and creates a strategy for achieving your goals</li>
    <li>Leverages in-depth knowledge of the court, probate, and other planning processes</li>
    <li>Displays your full range of legal options, so you can make the wisest possible decisions based on complete information</li>
    Whether you are planning ahead for these issues or addressing the aftermath, Hill & Watchko, LLC is uniquely equipped to offer clients thoughtful, creative, and hands-on solutions to some of life’s most sensitive and complex subjects.
</span>
       </div>
       <div className='div-img'>
        <img src={MyImage1} alt="Family" />
       </div>
      
       </div>
     <Common/>
        </div>
     
  </section>
     );
}
 
export default Home;