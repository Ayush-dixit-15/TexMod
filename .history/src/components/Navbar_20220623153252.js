  import React from 'react'
  import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

  export default function Navbar(props) {
    return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand" to={"/"}>{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span classNam e="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to={"/"}>Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/about"}>{props.aboutText}</Link>
          </li>
        </ul>
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{
            {props.toggleMode('primary')}
          }} style={{height:'30px', width:'30px', cursor:'pointer' }}></div>
         
          <div className="bg-danger rounded mx-2" onClick={()=>{
            {props.toggleMode('danger')}
          }} style={{height:'30px', width:'30px', cursor:'pointer' }}></div>
          <div className="bg-success rounded mx-2" onClick={()=>{
            {props.toggleMode('success')}
          }} style={{height:'30px', width:'30px', cursor:'pointer' }}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>{
            {props.toggleMode('warning')}
          }} style={{height:'30px', width:'30px', cursor:'pointer' }}></div>
        </div>
        {/* <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
        <div className={`custom-control custom-switch  text-${props.mode==='light' ?'dark' : 'light'}`}>
    <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={()=>{
            {props.toggleMode(null)}
          }}/>
    <label className="custom-control-label" htmlFor="customSwitch1">Toggle mode</label>
  </div>
      </div>
    </nav>
    )
  }
  Navbar.propTypes = {title: PropTypes.string.isRequired,
                      aboutText:PropTypes.string.isRequired}
                      //yha pe, he have specified ki jo prop ka type hai wo kyaa hai
  Navbar.defaultProps={
      title: 'Set title here',
      aboutText: 'About'
  }
  // it is as simple as that we have created a component naming navbar.js in which, we can add props according to our requirement. Wherever, we need to make a particulaar element a variable, we simply write {props.(name of the variable)}. For example here above, we have written {props.title}. So, whenever we will import our navbar.js in our app.js, we would simply write <Navbar title="whatever you need" />.So, here the navbar has become a function in which after inserting different values, we will import it as we require. Also, the props should not change once defined
