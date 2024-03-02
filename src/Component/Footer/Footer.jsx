import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
      <div className="container py-5 text-center">
        <div className="row py-3">
          <div className="col-md-4">
            <h3 className='text-uppercase'>location</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 ">
            <h3 className='text-uppercase'>around the web</h3>
            <ul className='d-flex justify-content-center  align-items-center list-unstyled'>
              <li><a href="https://www.facebook.com" target='_blank' rel='noreferrer' className='text-white '><i className="fa-brands fa-facebook"></i></a></li>
              <li className='mx-3'><a href="https://www.twitter.com" target='_blank' rel='noreferrer' className='text-white '><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="https://www.linkedin.com" target='_blank' rel='noreferrer' className='text-white '><i className="fa-brands fa-linkedin-in"></i></a></li>
              <li className='ms-3'><a href="https://www.google.com" target='_blank' rel='noreferrer' className='text-white '><i className="fa-solid fa-globe"></i></a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className='text-uppercase'>about freelancer</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <div className='footer py-4 d-flex justify-content-center align-items-center'>
      <p>Copyright © Your Website 2021</p>
        </div>
        </footer>
    )
  }
}

