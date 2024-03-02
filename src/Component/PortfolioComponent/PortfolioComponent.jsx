import React, { Component } from 'react'

export default class PortfolioComponent extends Component {
  render() {
    return (
      <>
      {this.props.portfolioDetails.map(val=>
      <div className="col-md-4 rounded-4 img">
      <div className="img-cover rounded-4 d-flex justify-content-center align-items-center">
      <i className="fa-solid fa-plus"></i>
      </div>
      <img  src={val.image} alt=""  className='w-100 rounded-4'/>
    </div>
        )}
        
      </>
    )
  }
}
