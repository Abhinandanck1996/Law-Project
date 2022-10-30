import { BrowserRouter, Switch ,Route} from "react-router-dom";
import Home from "./Home/Home";
import Product from "./Home/Product";
import Navbar from "./Navbar/Navbar";
import './global.css';
import MyImage from './HillWatchkoLogoR6blue.png'
import Practice from "./Home/Practice";
import Blog from "./Home/Blog";
import Contact from "./Home/Contact";
import React ,{useRef,useState}from 'react';


const App = () => {
    let[disc,setDisc]=useState(true)
    let SearchRef=useRef()
    let DisclimerRef=useRef();
    let HandleClick1=()=>{
        setDisc(!disc)
        if (disc==true) {
            DisclimerRef.current.classList.add("open1")
        }
        else{
            DisclimerRef.current.classList.remove("open1")
        }
    }

    let HandleClick=()=>{
        let search=SearchRef.current.value;
        console.log({search});
    }
    
    return ( 
      <section className="Main-sec">
        <article className="Main-art">
        <div className="Main-Logo">
            <a href="/"><img src={MyImage} alt="Logo" /></a>
        </div>
        <div className="Main-text"><BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact><Home/></Route>
                <Route path="/Product" exact><Product/></Route>
                <Route path="/Practice" exact><Practice/></Route>
                <Route path="/blog" exact><Blog search={SearchRef} Handleclick={HandleClick}/></Route>
                <Route path="/contact" exact><Contact discliamer={DisclimerRef} HandleClick1={HandleClick1}/> </Route>
            </Switch>
            </BrowserRouter></div>
        </article>
      </section>
     );
}
 
export default App;