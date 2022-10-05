import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {dataActions} from '../reducers/dataSlice'
import Chart from './Chart'
import Stack from 'react-bootstrap/Stack'
import Fade from 'react-reveal/Fade';
import './components.css'

const StockDetails = () => {

    const company = useSelector(state => state.newSlice.company)
    
    const colorObjRed = {
        backgroundColor: 'rgba(255, 0, 60, 1)',
        color: 'rgba(255, 0, 60, 0.6)',
        borderColor: 'rgba(255, 0, 0, 0.4)'
      }
    
    const colorObjGreen = {
        backgroundColor: 'rgba(85, 226, 4, 1)',
        color: 'rgba(85, 226, 4, 1)',
        borderColor: 'rgba(85, 226, 4, 1)'
    }


    useEffect(() => {
        console.log(company);
    },[])


  return (
      <div className="topSpace">
        <Fade big>
            <Stack className="stockAlt detailsDiv">

                    {company.symbol} : {company.eod[0].close}

                    <div className="chart">
                        {company.eod[0].close > company.eod[1].close ? <Chart compData={company} color={colorObjGreen}/> : <Chart compData={company} color={colorObjRed}/>}
                    </div>
            
                    <h1>{company.name}</h1>
                    <p className="averageP">{company.symbol} is currently {company.percentChange}% {company.percentChange > 0 ? 'up': 'down'} from their 4 month average</p>
            </Stack>
        </Fade>

        <Fade left>
            <Stack className="datePriceListContainer">
                <ul className='dateList'>
                    {company.eod.map((obj)=>{
                        return( 
                        <li className="listItem">
                                <div className="date">{obj.date.slice(0,10)} </div>
                                <div className="item"> Open:{(Math.round(obj.open * 100) / 100).toFixed(2)}</div>
                                <div className="item"> Low:{(Math.round(obj.low * 100) / 100).toFixed(2)}</div>
                                <div className="item"> High:{(Math.round(obj.high * 100) / 100).toFixed(2)}</div>
                                <div className="item"> Close:{(Math.round(obj.close * 100) / 100).toFixed(2)}</div>
                        </li> )
                    })}
                </ul>
            </Stack>
        </Fade>
    </div>

  )
}

export default StockDetails