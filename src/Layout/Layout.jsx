import React, { Component } from 'react'
import Navbar from '../Component/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Component/Footer/Footer'

export default class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Outlet/>
        <Footer/>
      </>
    )
  }
}
