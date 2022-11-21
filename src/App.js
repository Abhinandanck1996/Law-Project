import { BrowserRouter, Switch ,Route, Link} from "react-router-dom";
import Home from "./Home/Home";
import Product from "./Home/Product";
import Navbar from "./Navbar/Navbar";
import './global.css';
import MyImage from './HillWatchkoLogoR6blue.png'
import Practice from "./Home/Practice";
import Blog from "./Home/Blog";
import Contact from "./Home/Contact";
import React ,{useRef,useState}from 'react';
import Common from "./Home/Common";
import Notfound from "./Home/Notfound";
import Attorney from "./Home/Attorney";


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
                <Route path="/" component={Home} exact/>
                <Route path="/Product" component={Product} exact/>
                <Route path="/Practice" component={Practice} exact/>
                <Route path='/attorney'component={Attorney} exact/>
                <Route path="/blog" exact><Blog search={SearchRef} Handleclick={HandleClick}/></Route>
                <Route path="/contact" exact><Contact discliamer={DisclimerRef} HandleClick1={HandleClick1}/> </Route>
                <Route path="*" component={Notfound} exact/>
            </Switch>
            </BrowserRouter></div>
        </article>
      </section>
     );
}
 
export default App;