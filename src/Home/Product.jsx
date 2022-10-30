import Common from './Common'

const Product = () => {
    return ( 
        <div className="product-div">
            <div className="product-div1">
                <h2>Caring For You In The Long Term</h2>
            </div>
            <div className="product-div2">
                <div className='product-main1'>
                    <h2>A Strong Foundation For Legal Success</h2>
                    <p style={{textAlign:"justify",marginTop:"10px"}}>Hill & Watchko, LLC is a small, boutique wills, trusts, estates, and elder law firm able to provide personalized, efficient, and reasonably priced services of the quality found in the typical large, downtown firm. Established in the thriving Forsyth County, our firm serves clients throughout the metro Atlanta area and beyond.</p>
                    <p style={{marginTop:"20px",marginBottom:"10px",textAlign:"justify"}}>Our firm was initially founded by Magistrate Judge Phill Bettis, who has practiced law in Forsyth County for over 35 years. Our legal team builds upon Phill’s esteemed reputation in the community. We focus on developing extensive and thorough legal strategies. Our lawyers are well-respected and experienced in our chosen areas of practice.</p>
                    <span style={{textAlign:"justify"}}>Learn about our individual attorneys and their contributions to our firm’s success:</span>
                    <li style={{marginTop:"10px"}}><a href="#">John Cleveland Hill, Esq. </a> (“Cleve”), Managing Partner</li>
                    <li><a href="#">Sarah Randal Watchko, Esq., </a> (“Cleve”), Partner</li>
                    <li><a href="#">Rachel Keller, Esq.,</a> (“Cleve”), Counsel</li>
                    <li><a href="#">Caroline Munroe, Esq., </a> (“Cleve”), Special Outside Counsel</li>
                    <li><a href="#">Laura Baxter, Esq.,</a> (“Cleve”), Of Counsel</li>
                    <p style={{textAlign:"justify",marginTop:"10px",textAlign:"justify"}}>Our firm also leverages specialty and certified attorneys. We are proud that partner Sarah R. Watchko, Esq. has been named a certified elder law attorney (“CELA”) by the National Elder Law Foundation, the only national certifying program for <a href="#">elder law and special needs</a>  attorneys. Sarah is among the few CELAs in the state of Georgia.</p>
                    <h3>Comprehensive Legal Services For Long-Term Planning</h3>
                    <p style={{marginTop:"10px"}}>If you are seeking aid with <a href="#">wills and trusts</a>, guardianships, long-term care planning, or another planning issue, our attorneys are available to help you find a reliable and effective solution. <a href="#">Email our office</a> or dial <a href="">770-450-4480.</a></p>
                </div>
                <div className='product-main2'>
                <h2>Practice Areas</h2>
                <ul>
                    <li><a href="#">Estate Planning</a>
                    <ul>
                        <li><a href="#" style={{marginLeft:"-20px"}}>Wills & Trusts</a></li>
                        <li><a href="#" style={{marginLeft:"-20px"}}>Powers Of Attorney</a></li>
                        <li><a href="#" style={{marginLeft:"-20px"}}>Healthcare Directives</a></li>
                        <li><a href="#" style={{marginLeft:"-20px"}}>Special Needs Planning</a></li>
                    </ul>
                    <li><a href="#">Long-Term Care Planning (VA And Medicaid)</a></li>
                    <li><a href="#">Guardianship And Conservatorship</a></li>
                    <li><a href="#">Estate And Trust Administration / Probate</a></li>
                    <li><a href="#">Fiduciary Litigation</a></li>
                    <li><a href="#">Business Law</a>
                    <ul>
                        <li><a href="#">Wills & Trusts</a></li>
                        <li><a href="#">Powers Of Attorney</a></li>
                        </ul></li>
                    </li>
                    <li><a href="#">Asset Protection and Wealth Preservation</a></li>
                </ul>
                </div>
            </div>
            <Common/>
        </div>
     );
}
 
export default Product;
