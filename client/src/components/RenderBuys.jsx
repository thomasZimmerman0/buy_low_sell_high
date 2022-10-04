import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {dataActions} from '../reducers/dataSlice'
import Chart from './Chart'

const RenderBuys = () => {

    const companies = useSelector(state => state.percentSlice.companiesWithPercents)
    const dispatch = useDispatch()

    useEffect(() => {
      
      console.log(companies)

    }, [])
    


  return (

    <>
    
            {companies.map((obj)=> {

                return(
                    <>
                        <div>
                            {obj.symbol} : {obj.percentChange}
                            {/* <div style={{width: 700}}>
                                <Chart compData={obj.comp}/>
                            </div> */}
                        </div>

                    </>
            )
            
        })}
    </>
  )
}

export default RenderBuys