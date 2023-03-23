import React, { Component } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Newsitem from './components/Newsitem'
import SecNav from './components/SecNav'
// import Loader from './components/Loader'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


export default class App extends Component {
 
  render() {
    return (
      <>
        
<Router>
        <Navbar/>
       <SecNav/>
     
<Routes>  

<Route exact path="/" element={ <>  <div className="  fs-3 fw-bold text-dark   container  rounded-3  p-0">
            <div className=" text-center  pt-4 pb-3 fs-1 fw-bold   w-100   text-white  rounded-3 border-grey border-start border-end " 
            style={{backgroundColor:'rgb(112 115 111)', textShadow:"5px 2px 5px black", fontFamily:"cursive"}}>@NewsDay</div>
       </div>

         <div key="gereral" className="container  border-bottom-0 border-top-0" style={{border:"0.5px solid white", backgroundColor:"rgba(234, 188, 255, 0.744)"}}> 
        {/* <Newsitem pageSize={12} apiKey="https://newsapi.org/v2/everything?q=space&from=2023-02-03&sortBy=publishedAt&apiKey=fdf1e43aab0046ee99d68551792b028b"/> */}
        <Newsitem pageSize={12} apiKey="https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=cc6c8e5ee2c24134ad542f5b6bfe8271"/> 
        </div>
        </>
      } />

<Route exact path="/business" element={<>  <div className="  fs-3 fw-bold text-dark   container  rounded-3  p-0">
            <div className=" text-center  pt-4 pb-3 fs-1 fw-bold   w-100   text-white  rounded-3 border-grey border-start border-end " 
            style={{backgroundColor:'rgb(112 115 111)', textShadow:"5px 2px 5px black", fontFamily:"cursive"}}>@Business</div>
       </div>
            <div key="business" className="container  border-bottom-0 border-top-0" style={{border:"0.5px solid white", backgroundColor:"rgba(234, 188, 255, 0.744)"}}> 
        <Newsitem pageSize={12} apiKey="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cc6c8e5ee2c24134ad542f5b6bfe8271"/>
        </div></>
      } />

<Route exact path="/entertainment" element={<>  <div className="  fs-3 fw-bold text-dark   container  rounded-3  p-0">
            <div className=" text-center  pt-4 pb-3 fs-1 fw-bold   w-100   text-white  rounded-3 border-grey border-start border-end " 
            style={{backgroundColor:'rgb(112 115 111)', textShadow:"5px 2px 5px black", fontFamily:"cursive"}}>@Entertainment</div>
       </div>
<div key="entertainment" className="container  border-bottom-0 border-top-0" style={{border:"0.5px solid white", backgroundColor:"rgba(234, 188, 255, 0.744)"}}> 
        <Newsitem pageSize={12} apiKey="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=cc6c8e5ee2c24134ad542f5b6bfe8271"/>
        </div></>
      } />


<Route exact path="/health" element={<>  <div className="  fs-3 fw-bold text-dark   container  rounded-3  p-0">
            <div className=" text-center  pt-4 pb-3 fs-1 fw-bold   w-100   text-white  rounded-3 border-grey border-start border-end " 
            style={{backgroundColor:'rgb(112 115 111)', textShadow:"5px 2px 5px black", fontFamily:"cursive"}}>@Health</div>
       </div>
       <div key="health" className="container  border-bottom-0 border-top-0" style={{border:"0.5px solid white", backgroundColor:"rgba(234, 188, 255, 0.744)"}}> 
        <Newsitem pageSize={12} apiKey="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=cc6c8e5ee2c24134ad542f5b6bfe8271"/>
        </div></>
      } />

<Route exact path="/sports" element={<>  <div className="  fs-3 fw-bold text-dark   container  rounded-3  p-0">
            <div className=" text-center  pt-4 pb-3 fs-1 fw-bold   w-100   text-white  rounded-3 border-grey border-start border-end " 
            style={{backgroundColor:'rgb(112 115 111)', textShadow:"5px 2px 5px black", fontFamily:"cursive"}}>@Sports</div>
       </div>
<div key="sports" className="container  border-bottom-0 border-top-0" style={{border:"0.5px solid white", backgroundColor:"rgba(234, 188, 255, 0.744)"}}> 
        <Newsitem pageSize={12} apiKey="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=cc6c8e5ee2c24134ad542f5b6bfe8271"/>
        </div>
       </>
      } />

<Route exact path="/science" element={<>  <div className="  fs-3 fw-bold text-dark   container  rounded-3  p-0">
            <div className=" text-center  pt-4 pb-3 fs-1 fw-bold   w-100   text-white  rounded-3 border-grey border-start border-end " 
            style={{backgroundColor:'rgb(112 115 111)', textShadow:"5px 2px 5px black", fontFamily:"cursive"}}>@Science</div>
       </div>
<div key="science" className="container  border-bottom-0 border-top-0" style={{border:"0.5px solid white", backgroundColor:"rgba(234, 188, 255, 0.744)"}}> 
        <Newsitem pageSize={12} apiKey="https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=cc6c8e5ee2c24134ad542f5b6bfe8271"/>
        </div>
       </>
      } />

<Route exact path="/technology" element={<>  <div className="  fs-3 fw-bold text-dark   container  rounded-3  p-0">
            <div className=" text-center  pt-4 pb-3 fs-1 fw-bold   w-100   text-white  rounded-3 border-grey border-start border-end " 
            style={{backgroundColor:'rgb(112 115 111)', textShadow:"5px 2px 5px black", fontFamily:"cursive"}}>@Technology</div>
       </div>
       <div key="technology" className="container  border-bottom-0 border-top-0" style={{border:"0.5px solid white", backgroundColor:"rgba(234, 188, 255, 0.744)"}}> 
        <Newsitem pageSize={12} apiKey="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=cc6c8e5ee2c24134ad542f5b6bfe8271"/>
        </div>
       </>
      } />

</Routes>
     
</Router>
      
       
 

    
      </>
    )
  }
}

