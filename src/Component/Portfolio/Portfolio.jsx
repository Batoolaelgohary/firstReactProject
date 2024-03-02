import React, { Component } from 'react'
import PortfolioComponent from '../PortfolioComponent/PortfolioComponent'


export default class Portfolio extends Component {

  state ={
    portfolioDetails:[
      {image:'images/poert1.png'},
      {image:'images/port2.png'},
      {image:'images/port3.png'},
      {image:'images/poert1.png'},
      {image:'images/port2.png'},
      {image:'images/port3.png'}
    ]
  }
  // let portfolioDetails=['images/poert1.png','images/port2.png','images/port3.png','images/poert1.png','images/port2.png','images/port3.png']
 
  render() {
  return (
    <>
   
      <div className='portfolio'>
      <div className="container py-3 text-center ">
      <h2>PORTFOLIO COMPONENT</h2>
      <span><i className="fa-solid fa-star star"></i></span>
      <div className="row py-3 g-4">
        <PortfolioComponent portfolioDetails= {this.state.portfolioDetails}/>
        
        
      </div>
      </div>
    </div>
    </>
  )
}
}

