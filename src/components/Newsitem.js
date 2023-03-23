import React, { Component } from 'react'
import Loader from './Loader'
import News from './News'

export class Newsitem extends Component {

    arraynews=[]
    constructor() {
        super();
        this.state = {
            arraynews: this.arraynews,
            isLoading:false,
            page:1,
         
        }       
    }

    async componentDidMount(){

        let url=`${this.props.apiKey}&pageSize=${this.props.pageSize}`
        // let url2=`${this.props.apiKey}&pageSize=${this.props.pageSize}`
        this.setState({isLoading:true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            arraynews : parsedData.articles,
            totalResults : parsedData.totalResults,
            isLoading:false  
        })

    }

     handlePreclick= async()=>{
        if(this.state.page <=1){
          
        }
        else{
        let url=`${this.props.apiKey}&page=${this.state.page -1}&pageSize=${this.props.pageSize}`
        this.setState({isLoading:true})
        let data = await fetch(url)
        let parsedData = await data.json()
             this.setState({
            page :  this.state.page -1,
            arraynews : parsedData.articles,
            isLoading:false
            

        })
    }
    }

    handleNextclick= async()=>{
        
            if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
                
               
            }else{
        let url=`${this.props.apiKey}&page=${this.state.page +1}&pageSize=${this.props.pageSize}`
        this.setState({isLoading:true})
        let data = await fetch(url)
        let parsedData = await data.json()
        
        this.setState({
            page:this.state.page +1,
            arraynews : parsedData.articles,
            isLoading:false

        })

    }
}

  

    render() {
        return (
            <>

                <div className='container'>
                  <div className="container d-flex justify-content-center ">{this.state.isLoading?<Loader/>:""}</div>
                
                {/* <div className="bg-dark fs-1  text-white container rounded-pill"><p className='text-center'> a cUp oF tEa aLong NEWSDAY</p></div> */}
                    <div className='row'>
                        {
                            this.state.arraynews.map((object) => {
                                return <div className="col-md-3 my-5" key={object.url }>
                                    <News url={object.url ? object.url:""} mytitle={object.title ? object.title:""} mydes={object.description } imageUrl={object.urlToImage } />
                                </div>
                            })}

                    </div>
                <div className="conatiner d-flex justify-content-between  pb-3">
                <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePreclick}>&larr; Previous</button>
                <button  disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark"  onClick={this.handleNextclick}>Next &rarr;</button>
                </div>
                </div>

            </>
        )
    }
}

export default Newsitem
