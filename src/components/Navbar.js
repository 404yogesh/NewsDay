import React, { Component } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export class Navbar extends Component {

  render() {
    // let Style = {
    //   "fontSize": "32px",
    //   "fontWeight": "800",
    //   "fontFamily": "cursive",
    // }
    return (
      <div >
        <div >
          <nav className=" fixed-top navbar  navbar-expand-lg p-0 " style={{"backgroundColor":"rgb(176 176 176)"}}>{/*----,borderBlockStart:"2px solid white",borderBlockEnd:"2px solid white"*/ }
            <span className="nav-brand bg-light p-1  logoBorder" style={{ borderRadius: "0px 55px 55px 0px"}}> <a className="navbar-brand text-dark fst-italic  px-3 fontStyle"  href="/">@NewsD@y</a>
            </span>
            <div className="container-fluid  text-center mx-5  ">
              <div className="collapse navbar-collapse mx-5 text-center" id="navbarSupportedContent">
                <ul className="navbar-nav mx-5 mb-2 mb-lg-0 ">
                  <li className="nav-item mx-5">
                    <Link className="nav-link mx-5 fs-4 fw-bold text-light" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item mx-5">
                    <Link className="nav-link mx-5 fs-4 fw-bold text-light" to="/">About</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    
      </div>
    )
  }
}

export default Navbar
