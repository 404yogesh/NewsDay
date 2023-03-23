import React, { Component } from 'react'
import './News.css'

export class News extends Component {
  render() {
    // let {title,description,imageUrl}=this.props;
    
    return (
     <>
     <div className="card bg-dark   overflow-hidden  shadow" >
     <img src={this.props.imageUrl} className="card-img-top overflow-hidden" style={{height: "12rem"}} alt="..."/>

     <div className="card-body ">
    
       <h5 className="card-title bg-dark p-2 text-light text-wrap " style={{height: "5rem" , overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}} >{this.props.mytitle?this.props.mytitle : console.log("title")}</h5>
       <div className="line bg-light"><hr /></div>
       <p className="card-text text-wrap bg-dark p-2 text-light" style={{height: "12rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>{this.props.mydes}</p>
       </div>


     <div  className=" card-body Hover border-top  d-flex justify-content-center" style={{width: "100%"}}>
     <a href={this.props.url} className="  text-center fs-4 fw-bold Link text-decoration-none p-1 card-link" style={{letterSpacing: "0.2em"}} >Read More</a>
       
     </div>
   </div>
   </>
    )
  }
}

export default News
