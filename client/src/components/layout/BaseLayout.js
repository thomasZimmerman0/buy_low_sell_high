import React from 'react'
import Header from './Header'

import '../components.css'


const BaseLayout = (props) => {
  return (
      <>
            <Header className="navbar"/>
            {props.children}
      </>
  )
}

export default BaseLayout