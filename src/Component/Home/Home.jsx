import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <>
        <div className='home'>
      <div className='container  w-50 py-5 text-center text-white d-flex justify-content-center align-items-center'>
        <div>
        <div className="img w-75 m-auto">
            <img src="images/avataaars.svg" alt=""  className='w-100'/>
        </div>
        <h2 className='py-2'>START FRAMEWORK</h2>
        <span><i className="fa-solid fa-star star"></i></span>
        <p className='pt-2'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
        </div>
        </>
    )
  }
}
