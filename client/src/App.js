import React, {useEffect, useState} from 'react';
import staticJson from './saveCalls.json'
import {useDispatch, useSelector} from 'react-redux'
import {dataActions} from './reducers/dataSlice'
import Chart from './components/Chart'
import './App.css'

import RenderBuys from './components/RenderBuys';
import ImageSlider from './components/ImageSlider';

function App() {

  const companies = useSelector(state => state.persistDataReducer.companies)
  const company = useSelector(state => state.persistNewSlice.company)
  const dispatch = useDispatch()

  useEffect(() => {


    dispatch(dataActions.populate(staticJson))

    console.log(company)
  },[])
  
  return (
    <>
      <div className="container justify-content-center graphs">
        <ImageSlider data={companies}/>
      </div>
      <div className="pageBreak pb1">
        <div className="opacityLayer">
            <div >
                <h1 className="textLayer">Welcome To Buy Low Sell High</h1>
                <p className="para">
                    On this website you can get up-to-date stock information from the companies listed
                    on the NASDAQ-100 index. The behind this webpage was to design a resource
                    about making it simple to see which stocks would be worthwile buying or selling based
                    on the most fundamental principal of any investment: buy low, sell high. So far this 
                    website is only tracking 4 months of information, yet it makes it easy to see solid blue-chip
                    stocks that could have had a sharp drop or increase. The speculaiton surrounding stocks
                    in modern times is confusing at best and downright wrong at worst. When things
                    get too complicated, it's best to go back to basics.

                </p>


            </div>
        </div>
      </div>
    </>
    
  )
}

export default App