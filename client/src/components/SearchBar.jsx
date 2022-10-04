import React, {useState} from 'react'
import Chart from './Chart'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import Stack from 'react-bootstrap/Stack'
import './components.css'
import {newSliceActions} from '../reducers/newSlice'
import {useDispatch, useSelector} from 'react-redux'

const SearchBar = () => {

const companies = useSelector(state => state.persistDataReducer.companiesWithPercents)

const [filteredData, setFilteredData] = useState([])

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
        <div className="searchInputs">
            <input type="text" placehoder="Enter a stock Symbol" onChange={handleChange}/>
            <div className="searchIcon"></div>
        </div>
        {filteredData.length !=0 &&(
            <div className="dataResult">
                {filteredData.slice(0,15).map((obj, key)=>{
                    return <div>{obj.symbol}</div>
                })}
            </div>
        )}
    </div>
  )
}

export default SearchBar