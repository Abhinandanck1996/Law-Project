import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <ul className="ul">
            <li><Link to="/">Home</Link></li>
         <li>   <Link to="/Product">About</Link></li>
         <li>   <Link to="/attorney">Attorneys</Link></li>
         <li>   <Link to="/Practice">Practice Areas</Link></li>
         <li>   <Link to="blog">Blog</Link></li>
         <li>   <Link to="contact">Contact Us</Link></li>
       
        </ul>
     );
}
 
export default Navbar;
