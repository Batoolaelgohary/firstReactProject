import React, { Component } from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Portfolio from './Component/Portfolio/Portfolio'
import Contact from './Component/Contact/Contact'
import About from './Component/About/About'
import Home from './Component/Home/Home'
import Layout from './Layout/Layout'


const myRouter =createHashRouter([
  {path:'/', element:<Layout/>,children:[
  {path:'/', element:<Home/>},
  {path:'/about', element:<About/>},
  {path:'/portfolio', element:<Portfolio/>},
  {path:'/contact', element:<Contact/>},
  {path:'*', element:<h1 className='py-5 bg-danger text-center'>404 NOT FOUND</h1>},
  ]},
 

])


export default class App extends Component {
  
  render() {
    return (
      <>
        <RouterProvider router={myRouter}/>
        
      </>
    )
  }
}
