import React, {useEffect, useState} from 'react';
import staticJson from './saveCalls.json'
import {useDispatch, useSelector} from 'react-redux'
import {dataActions} from './components/dataSlice'

import RenderBuys from './components/RenderBuys';

function App() {

  const companies = useSelector(state => state.companies)
  const dispatch = useDispatch()

  useEffect(() => {

    // const getData = async()=>{

    //   let results = await fetch('/api')
    //   let data = await results.json();

    //   console.log(data)
    // }

    // getData()


    dispatch(dataActions.populate(staticJson))

    
    
    
  },[])
  
  return (
    <div>
      <RenderBuys />
    </div>
  )
}

export default App