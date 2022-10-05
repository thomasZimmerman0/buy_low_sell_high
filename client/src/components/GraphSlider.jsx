import React, {useState} from 'react'
import Chart from './Chart'
import Stack from 'react-bootstrap/Stack'
import './components.css'
import {newSliceActions} from '../reducers/newSlice'
import {useDispatch, useSelector} from 'react-redux'

import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ImageSlider = () => {

const companies = useSelector(state => state.percent.companiesWithPercents)
const dispatch = useDispatch()

const[current, setCurrent] = useState(0)
const length = companies.length

const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

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


  return (
   <>
    <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow"  onClick={nextSlide}/>
        <FaArrowAltCircleRight className="right-arrow" onClick={prevSlide}/>
        {companies.map((comp, index)=>{
            return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                    <Link onClick={()=>dispatch(newSliceActions.setCompany(comp))} to="/stockDetails"  style={{textDecoration: 'none'}}>
                    <Stack className="d-flex justify-content-center stock">
                        {comp.symbol} : {comp.eod[0].close}
                        <div className="chart">
                            {comp.eod[0].close>comp.eod[1].close ? <Chart compData={comp} color={colorObjGreen}/> : <Chart compData={comp} color={colorObjRed}/>}
                        </div>
                    </Stack>
                    </Link>
                    )}
        
                </div> 
             )
        })}


    </section>
   </>
  )
}

export default ImageSlider