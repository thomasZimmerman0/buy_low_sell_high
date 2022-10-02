import React, {useEffect, useState} from 'react';
import staticJson from './saveCalls.json'
import {useDispatch, useSelector} from 'react-redux'
import {dataActions} from './reducers/dataSlice'
import Chart from './components/Chart'
import './App.css'

import RenderBuys from './components/RenderBuys';
import ImageSlider from './components/ImageSlider';

function App() {

  const companies = useSelector(state => state.companies)
  const dispatch = useDispatch()

  useEffect(() => {


    dispatch(dataActions.populate(staticJson))

    
    
  },[])
  
  return (
    <div className="container justify-content-center graphs">
      <ImageSlider data={companies}/>

      {companies.map((obj)=>{
 
        return(
            
            <div className="d-flex justify-content-center">
              {obj.symbol} : {obj.eod[0].close}
              <div style={{width: 700}}>
                <Chart compData={obj}/>
              </div>
            </div>
        );
      })}
    </div>
  )
}

export default App