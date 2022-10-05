import React, {useState} from 'react'
import Chart from './Chart'
import Stack from 'react-bootstrap/Stack'
import './components.css'
import {newSliceActions} from '../reducers/newSlice'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

const SearchBar = () => {

const companies = useSelector(state => state.percent.companiesWithPercents)

const dispatch = useDispatch()

const [filteredData, setFilteredData] = useState([])

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

const handleChange = (e) => {
    const searchWord = e.target.value 
    const newFilter = companies.filter((obj)=>{
        return obj.symbol.toLowerCase().includes(searchWord.toLowerCase())
    })

    if(searchWord === ""){
        setFilteredData([]);
    } else {
        setFilteredData(newFilter)
    }
}

  return (
    <div className="search">
        <h1 className="searchHeader">Search</h1>
        <div className="searchInputs">
            <input type="text" placeholder="Enter a stock symbol" onChange={handleChange}/>
        </div>
        {filteredData.length !=0 &&(
            <div className="dataResult">
                {filteredData.slice(0,3).map((comp, key)=>{
                    return (
                    <Fade big>
                        <Link onClick={()=>dispatch(newSliceActions.setCompany(comp))} to="/stockDetails"  style={{textDecoration: 'none'}}>
                            <Stack className="d-flex justify-content-center stock">
                                {comp.symbol} : {comp.eod[0].close}
                                <div className="chart">
                                    {comp.eod[0].close>comp.eod[1].close ? <Chart compData={comp} color={colorObjGreen}/> : <Chart compData={comp} color={colorObjRed}/>}
                                </div>
                            </Stack>
                        </Link>
                    </Fade>
                    )
                })}
            </div>
        )}
    </div>
  )
}

export default SearchBar