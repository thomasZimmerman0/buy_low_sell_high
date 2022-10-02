import React, {useState} from 'react'
import Chart from './Chart'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import './components.css'

const ImageSlider = ({data}) => {
const[current, setCurrent] = useState(0)
const length = data.length

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
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
        {data.map((comp, index)=>{
            return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (<div className="d-flex justify-content-center">
                        {comp.symbol} : {comp.eod[0].close}
                        <div style={{width: 700}}>
                            <Chart compData={comp}/>
                        </div>
                    </div>)}
        
                </div> 
             )
        })}


    </section>
   </>
  )
}

export default ImageSlider