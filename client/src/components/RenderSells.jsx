import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Chart from './Chart'
import {newSliceActions} from '../reducers/newSlice'
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide'

const RenderSells = () => {

  const companies = useSelector(state => state.percent.companiesWithPercents)
  const dispatch = useDispatch()

  const colorObj = {
    backgroundColor: 'rgba(85, 226, 4, 1)',
    color: 'rgba(85, 226, 4, 1)',
    borderColor: 'rgba(85, 226, 4, 1)'
  }

  
  useEffect(() => {
    
    window.scrollTo(0,0)
    
  }, [])

  return (

    <>
      <Slide left>
        <div className="d-flex justify-content-center flex-column align-items-center extra">
              {companies.map((obj)=> {

                if(obj.percentChange >= 15){
                  return(
                        <>

                          <Link onClick={()=>dispatch(newSliceActions.setCompany(obj))} to="/stockDetails" style={{textDecoration: 'none'}} className="d-flex justify-content-center widthFix">
                              <div className="topSpace stock d-flex flex-column justify-content-center align-items-center">
                              <h1 className="sellBuyHeader"><img src="https://cdn1.iconfinder.com/data/icons/vibrancie-action/30/action_060-trending_up-arrow-up-increase-512.png" width="34"/> {obj.symbol} : {obj.eod[0].close}</h1>
                                  <p className="graphSubtext">  up {obj.percentChange}% from it's four month average price!</p>
                                  <div className="graph">
                                      <Chart compData={obj} color={colorObj}/>
                                  </div>
                              </div>
                          </Link>
    
                        </>
                  )
              }
              
          })}
        </div>
      </Slide>
    </>
  )
}

export default RenderSells