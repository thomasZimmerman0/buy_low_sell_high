import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {dataActions} from '../reducers/dataSlice'
import Chart from './Chart'
import Stack from 'react-bootstrap/Stack'
import Fade from 'react-reveal/Fade';
import './components.css'

const RenderBuys = () => {

    const company = useSelector(state => state.persistDataReducer.company)
    const dispatch = useDispatch()


    useEffect(() => {
        console.log(company);
    },[])


  return (
      <div className="topSpace">
        <Fade big>
            <Stack className="stock detailsDiv">

                    {company.symbol} : {company.eod[0].close}

                    <div className="chart">
                        <Chart compData={company}/>
                    </div>
            
                    <h1>{company.name}</h1>
                    <p className="averageP">{company.symbol} is currently {company.percentChange}% from their 4 month average</p>
            </Stack>
        </Fade>

        <Fade left>
            <Stack className="datePriceListContainer">
                <ul className='dateList'>
                    {company.eod.map((obj)=>{
                        return <li className="listItem">
                            <div className="date">{obj.date.slice(0,10)} </div>
                            <div>Open: {obj.open}</div>
                            <div>Low: {obj.low}</div>
                            <div>High: {obj.high}</div>
                            <div>Close: {obj.close}</div>

                        
                            </li>
                    })}
                </ul>
            </Stack>
        </Fade>
    </div>

  )
}

export default RenderBuys