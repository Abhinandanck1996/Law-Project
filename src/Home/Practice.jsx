import Common from './Common'

const Practice = () => {
    return ( 
        <div className="product-div">
            <div className="product-div1">
                <h2>Caring For You In The Long Term</h2>
            </div>
            <div className="product-div2">
                <div className='product-main1'>
                    <h2>Experience And Wisdom For Your Estate Planning And Elder Law Needs</h2>
                    <p style={{textAlign:"justify",marginTop:"10px"}}>It is a misconception to think that only those with extraordinary wealth require an “estate plan” or would benefit from a trust. Believe it or not, most everyone has an estate. Your estate consists of items like your home or other real estate, cars, financial accounts, investments, personal items, and life insurance — just to name a few. No matter how large, most of us have an estate with value, and we know that we cannot take it with us when we go.</p>
                    <p style={{marginTop:"20px",marginBottom:"10px",textAlign:"justify"}}>At Hill & Watchko, LLC, one of the very few Georgia firms with a nationally certified elder law attorney, long term care planning is a strong area of focus, complementing a full array of estate planning services. Our decades of combined experience allow us to spot potential issues in all related matters, including creating a thorough estate plan that guarantees your loved ones know, understand, and follow your wishes. <a href="#">Speak with our attorneys</a> about your needs.</p>
                    <h3>Our Estate Planning Services</h3>
                    <p style={{marginTop:"10px"}}>To ensure your desires are followed, you should provide instructions stating whom you want to receive your assets, what portion you want them to receive, and when they are to receive it (immediately or over time in trust).</p>
                    <p style={{marginTop:"10px"}}>Most people want these instructions to be carried out in a cost efficient, tax efficient, and time efficient manner. That is estate planning: making a plan and naming whom you want to manage your estate and whom you want to receive your assets after you pass.</p>
                    <span style={{textAlign:"justify"}}>Some of our trust and estate planning services include:</span>
                    <li style={{marginTop:"10px"}}>Creating reliable estate plans, including <a href="#">comprehensive wills</a>, durable <a href="#"> powers of attorney</a></li>
                    <li>Establishing proper and effective advance <a href="#">health care directives</a></li>
                    <li>Planning for <a href="#">long-term care</a> and <a href="#">special needs</a></li>
                    <li>Developing a long-term plan for your family and for <a href="#">your business</a></li>
                    <li>Managing your estate via trusts</li>
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
 
export default Practice;
