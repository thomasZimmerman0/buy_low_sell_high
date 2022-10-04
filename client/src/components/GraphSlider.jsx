import React, {useState} from 'react'
import Chart from './Chart'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import Stack from 'react-bootstrap/Stack'
import './components.css'
import {newSliceActions} from '../reducers/newSlice'
import {useDispatch, useSelector} from 'react-redux'

const ImageSlider = () => {

const companies = useSelector(state => state.percentSlice.companiesWithPercents)
const dispatch = useDispatch()

const[current, setCurrent] = useState(0)
const length = companies.length

const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
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
                    <a onClick={()=>dispatch(newSliceActions.setCompany(comp))} href="/stockDetails">
                    <Stack className="d-flex justify-content-center stock">
                        {comp.symbol} : {comp.eod[0].close}
                        <div className="chart">
                            <Chart compData={comp}/>
                        </div>
                    </Stack>
                    </a>
                    )}
        
                </div> 
             )
        })}


    </section>
   </>
  )
}

export default ImageSlider