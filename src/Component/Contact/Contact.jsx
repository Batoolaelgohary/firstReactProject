import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <>
      <div className='contact '>
      <div className="container w-50 py-3 text-center">
      <h2>CONTACT SECTION</h2>
      <span><i className="fa-solid fa-star star"></i></span>
      <div className=" pt-5">
        <form >
          <input type="text" name="name" id="name" className='w-100 p-2 rounded' placeholder='User Name' />
          <input type="number" name="age" id="age" className='w-100 p-2 rounded my-4' placeholder='User Age' />
          <input type="email" name="mail" id="mail" className='w-100 p-2 rounded' placeholder='User Email' />
          <input type="password" name="password" id="password" className='w-100 p-2 my-4 rounded' placeholder='User Password' />
          <textarea name="msg" id="msg" cols="30" rows="5" className='w-100 rounded px-2' placeholder='Your Message'></textarea>
          <button className='btn me-auto btn-sm my-3'>Send Message</button>
        </form>
      </div>
      </div>
    </div>
    </>
    )
  }
}

