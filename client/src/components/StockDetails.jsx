import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {dataActions} from '../reducers/dataSlice'
import Chart from './Chart'
import Stack from 'react-bootstrap/Stack'

const RenderBuys = () => {

    const company = useSelector(state => state.persistDataReducer.company)
    const dispatch = useDispatch()


    useEffect(() => {
        console.log(company);
    },[])


  return (
    <>
    <div className="topSpace">
        <Stack className="d-flex justify-content-center stock">
            {company.symbol} : {company.eod[0].close}
            <div className="chart">
                <Chart compData={company}/>
            </div>
            
        </Stack>
    </div>
    </>
  )
}

export default RenderBuys