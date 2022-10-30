import { useRef } from "react";
import Common from "./Common";
import Logo from './findlaw.png';

const Blog = (props) => {
 let SearchRef=props.search;
 let HandleClick=props.Handleclick;
    return (  
        <div className="product-div">
        <div className="product-div1">
            <h2>Caring For You In The Long Term</h2>
        </div>
        <div className="product-div2">
                <div className='product-main1'>
                    <h2>Atlanta Estate Planning Blog</h2>
                    <div>
                    <h3 style={{marginBottom:"10px"}}><a href="#">Are guardians just for children?</a> </h3>
                    <span >On Behalf of <a href="#">Hill & Watchko, LLC </a>| Oct 17, 2022 | <a href="#">Estate Planning</a></span>
                    <p style={{marginTop:"10px"}}>Guardianships can certainly be used for children, and they are a major part of estate planning. In fact, one thing that often spurs people to begin thinking about estate planning is when they have a child. They know that the child needs to be cared for if they pass...</p>
                    </div>
                    <div>
                    <h3 style={{marginBottom:"10px"}}><a href="#">Why it’s important to get input when making an estate plan</a> </h3>
                    <span >On Behalf of <a href="#">Hill & Watchko, LLC </a>| Oct 4, 2022 | <a href="#">Estate Planning</a></span>
                    <p style={{marginTop:"10px"}}>When making an estate plan, it’s a good idea to talk to people who will be impacted by that plan. This includes your heirs and beneficiaries. You want to get feedback from them and get their input on how this plan should be set up. Legally speaking, the plan is...</p>
                    </div>
                    <div>
                    <h3 style={{marginBottom:"10px"}}><a href="#">What you need to know when designating your IRA beneficiaries</a> </h3>
                    <span >On Behalf of <a href="#">Hill & Watchko, LLC </a>| Sep 26, 2022 | <a href="#">Estate Planning</a></span>
                    <p style={{marginTop:"10px"}}>If you’re like many Americans, a good portion of your assets are in retirement accounts. If you’ve been putting money away regularly, you likely have one or more individual retirement accounts (IRAs) with pretty healthy balances. You should already have beneficiaries...</p>
                    </div>
                    <div>
                    <h3 style={{marginBottom:"10px"}}><a href="#">4 estate planning mistakes</a> </h3>
                    <span >On Behalf of <a href="#">Hill & Watchko, LLC </a>| Sep 18, 2022 | <a href="#">Estate Planning</a></span>
                    <p style={{marginTop:"10px"}}>Having your estate plan worked out now can go a long way toward protecting your future and your family. While you may believe you have a full-proof estate plan, there may be issues you don’t realize. Here are some of the common errors your need to avoid: 1. Writing...</p>
                    </div>
                    <div>
                    <h3 style={{marginBottom:"10px"}}><a href="#">Why a financial power of attorney is helpful</a> </h3>
                    <span >On Behalf of <a href="#">Hill & Watchko, LLC </a>| Sep 2, 2022 | <a href="#">Estate Planning</a></span>
                    <p style={{marginTop:"10px"}}>When you're picking a power of attorney, you may start by thinking about the medical side of things. You want to choose an agent to make your medical decisions for you. You know that you could become incapacitated at a later date, and it's important to know that...</p>
                    </div>
                    <div>
                    <h3 style={{marginBottom:"10px"}}><a href="#">When might a will be challenged?</a> </h3>
                    <span >On Behalf of <a href="#">Hill & Watchko, LLC </a>| Aug 23, 2022 | <a href="#">Estate Planning</a></span>
                    <p style={{marginTop:"10px"}}>Drafting a will is a fundamental component of estate planning. A will can perform several functions but it largely relates to how your assets will be divided upon your death.  There are several options when drafting a will, you can even draft one on your own, but this...</p>
                    </div>
                    </div>
                    <div className='product-main2'>
                        <div style={{marginTop:"20px",marginLeft:"20px"}}>
                            <input type="text" placeholder="Search..."  ref={SearchRef}/>
                            <button className="btn" onClick={HandleClick}>Search</button>
                        </div>
                <h2>Recent Posts</h2>
                <ul>
                    <li><a href="#">Are guardians just for children?</a></li>
                    <li><a href="#">Why it’s important to get input when making an estate plan</a></li>
                    <li><a href="#">What you need to know when designating your IRA beneficiaries</a></li>
                    <li><a href="#">4 estate planning mistakes</a></li>
                    <li><a href="#">Why a financial power of attorney is helpful</a></li>
                </ul>
                <h2>Archives</h2>
                <ul>
                    <li><a href="#">October 2022</a></li>
                    <li><a href="#">September 2022</a></li>
                    <li><a href="#">August 2022</a></li>
                    <li><a href="#">July 2022</a></li>
                    <li><a href="#">June 2022</a></li>
                    <li><a href="#">May 2022</a></li>
                    <li><a href="#">April 2022</a></li>
                    <li><a href="#">March 2022</a></li>
                    <li><a href="#">February 2022</a></li>
                    <li><a href="#">January 2022</a></li>
                </ul>
                <h2>Categories</h2>
                <ul>
                    <li><a href="#">Estate Planning</a></li>
                    </ul>
                    <h2>RSS Feed</h2>
                <ul>
                    <li><a href="#">Subscribe To This Blog’s Feed</a></li>
                    </ul>
                  <a href="/">  <img src={Logo} alt="Findlaw Network" width="85%" style={{marginLeft:"25px",marginTop:"10px",marginBottom:"10px"}} /></a>
                </div>
                    </div>
                    <Common/>
        </div>
    );
}
 
export default Blog;