import React, { Component } from 'react'

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      Emp_name: "",
      Emp_email: "",
      Emp_Phone: "",
      Emp_case: "",
      Emp_states: "",
      Emp_comp: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
   window.localStorage.setItem("Emp_name", this.state.Emp_name);
    window.localStorage.setItem("Emp_email", this.state.Emp_email);
    window.localStorage.setItem("Emp_Phone", this.state.Emp_Phone);
    window.localStorage.setItem("Emp_case", this.state.Emp_case);
    window.localStorage.setItem("Emp_states", this.state.Emp_city);
    window.localStorage.setItem("Emp_comp", this.state.Emp_comp);
     
   setTimeout(() => {
     window.localStorage.removeItem("Emp_name");
     window.localStorage.removeItem("Emp_email");
     window.localStorage.removeItem("Emp_Phone");
     window.localStorage.removeItem("Emp_case");
     window.localStorage.removeItem("Emp_states");
     window.localStorage.removeItem("Emp_comp");
  
    
   }, 15000);
  };
  componentDidMount(){
    this.setState({
      Emp_name:window.localStorage.getItem("Emp_name"),
      Emp_ID:window.localStorage.getItem("Emp_email"),
     Emp_Sal:window.localStorage.getItem("Emp_Phone"),
     Emp_Des:window.localStorage.getItem("Emp_case"),
   })
  
  }

  

  LocalStorage = () => {
    console.log(this.state.Emp_name);
    console.log(this.state.Emp_email);
    console.log(this.state.Emp_Phone);
    console.log(this.state.Emp_case);
  }

  render() {
    return (
     <div className='contact-Page'>
         <section className="authBlock">
        <article>
          <h2>Contact Us</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="Emp_name"
                placeholder="enter name"
                onChange={this.handleChange}
                value={this.state.Emp_name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ID">Email</label>
              <input
                type="text"
                id="ID"
                name="Emp_email"
                placeholder="enter email"
                onChange={this.handleChange}
                value={this.state.Emp_ID}
              />
            </div>
            <div className="form-group">
              <label htmlFor="salary">Phone</label>
              <input
                type="text"
                id="salary"
                name="Emp_Phone"
                placeholder="enter Phone"
                onChange={this.handleChange}
                value={this.state.Emp_Sal}
              />
            </div>
            <div className="form-group">
              <label htmlFor="designation">Area Of Case</label>
              <select
                id="designation"
                name="Emp_case"
                onChange={this.handleChange}
              >
                <option value="">Choose Case</option>
                <option value="Estate Planning">Estate Planning</option>
                <option value="Criminal Law">Criminal Law</option>
                <option value="Fiduciary Litigation">Fiduciary Litigation</option>
                <option value="Long-Term Care">Long-Term Care</option>
                <option value="Special Needs Planning">Special Needs Planning</option>
              </select>
            </div>

            <div className="form-group1" id="form1">
              <label htmlFor="skills">Us States</label>
              <br />
              <br />
              <input
                type="checkbox"
                id="skills"
                name="Emp_states"
                value="Albama"
                onChange={this.handleChange}
              />
              Albama
              <input
                type="checkbox"
                id="skills"
                name="Emp_skills"
                value="Alaska"
                onChange={this.handleChange}
              />
              Alaska
              <input
                type="checkbox"
                id="skills"
                name="Emp_skills"
                value="California"
                onChange={this.handleChange}
              />
              California
              <input
                type="checkbox"
                id="skills"
                name="Emp_skills"
                value="Colorado"
                onChange={this.handleChange}
              />
              Colorado
              <input
                type="checkbox"
                id="skills"
                name="Emp_skills"
                value="Hawali"
                onChange={this.handleChange}
              />
              Hawali
              <input
                type="checkbox"
                id="skills"
                name="Emp_skills"
                value="New York"
                onChange={this.handleChange}
              />
              New York
            </div>
            <div className="form-group">
              <label htmlFor="comp">Message</label>
              <textarea
                type="text"
                id="comp"
                name="Emp_comp"
                placeholder="Describe Breifly"
                onChange={this.handleChange}
                value={this.state.Emp_comp}
              />
            </div>
            <div className="form-group">
              <button className="button" onClick={this.LocalStorage}>Sign Up</button>
            </div>
          </form>
        
        </article>
      </section>
      <section>
        <article>
        <div className="Main-div7">
        <p className='p'>© 2022 <a href="#" className='Main-a'>Hill & Watchko, LLC</a>• All Rights Reserved</p>
        <p><a href="#" className='Main-a1'>Disclaimer</a>| <a href="#" className='Main-a1'> Site Map</a>|<a href="#" className='Main-a1'>Privacy Policy </a>|<a href="#" className='Main-a1'>Business Development Solutions</a>| by<a href="#" className='Main-a1'> FindLaw,</a>|  part of Thomson Reuters</p> 
     </div>
        </article>
      </section>
     </div>
    );
  }
}