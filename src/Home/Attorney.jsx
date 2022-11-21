import Common from "./Common";

const Attorney = () => {
    return ( 
        <div className="product-div">
        <div className="product-div1">
            <h2>Caring For You In The Long Term</h2>
        </div>
        <div className="product-div2">
            <div className='product-main3'>
               <h1>Attorneys</h1>
               <h2>Learn More About Our Debt Relief Team</h2>
               <p>At Rothschild & Ausbrooks, PLLC, you will find board-certified bankruptcy lawyers with decades of experience helping people just like you overcome debt. To learn more about the backgrounds of our debt relief team members, review the profiles below:

</p>
<ul>
    <li>Edgar Meyer Rothschild III (Retired)</li>
    <li><a href="#">Jodie Thresher</a></li>
</ul>
<div className="Attorney-image">
<img src="https://www.rothschildbklaw.com/wp-content/uploads/sites/1201201/2020/10/ausbrooks_mary_beth.jpg" alt="image" />
<h4>Mary Beth Ausbrooks</h4>
</div>
            </div>
            <div className='product-main4'>
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
 
export default Attorney;