import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "./SecNav.css"

export class SecNav extends Component {

    render() {

      return (

        <nav className="navbar  z-3  container bg-dark mt-5 position-relative   ">
        <ul className="w-100 myBorder shadow text-dark text-center text-decoration-none  fixed-top secNav-top container-fluid   saperator-color " >
          <li className=" px-5   ">
               <NavLink to="/business">Business</NavLink>
            </li>
          <li className=" px-5  ">
               <NavLink to="/entertainment">Entertainment</NavLink>
            </li>
          <li className=" px-5  ">
              <NavLink to="sports">Sports</NavLink>
          </li>
          <li className=" px-5  ">
               <NavLink to="/science">Science</NavLink>
          </li>
          <li className=" px-5  ">
               <NavLink to="technology">Technology</NavLink>
          </li>
          <li className=" px-5  ">
              <NavLink to="/health">Health</NavLink>
            </li>
        </ul> 
        
        </nav>
      )
    }
}
export default SecNav