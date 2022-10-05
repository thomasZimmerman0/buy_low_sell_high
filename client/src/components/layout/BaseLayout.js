import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../components.css'


const BaseLayout = (props) => {
  return (
      <>
            <Header className="navbar"/>
            {props.children}
            <Footer className="navbar footer"/>
      </>
  )
}

export default BaseLayout