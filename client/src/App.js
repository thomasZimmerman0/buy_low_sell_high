import React, {useEffect, useState} from 'react';
import staticJson from './saveCalls.json'
import {useDispatch, useSelector} from 'react-redux'
import {dataActions} from './reducers/dataSlice'
import {percentActions} from './reducers/percentSlice'
import './App.css'

import GraphSlider from './components/GraphSlider';
import SearchBar from './components/SearchBar';
import RenderBuys from './components/RenderBuys';

import Slide from 'react-reveal/Slide';

function App() {

  const companies = useSelector(state => state.persistDataReducer.companies)
  const companiesWithPercents = useSelector(state => state.percentSlice.companiesWithPercents)
  const [modifiedList, setModifiedList] = useState([])

  const [companyAvgs, setCompanyAvgs] = useState([])
  const [buyArr, setBuyArr] = useState([])

  const dispatch = useDispatch()
      
      useEffect(() => {
        let companyAvgs1 = []
      
        const getAverages = () => {
      
            let compiledAvgs = []
        
            companies.forEach(comp=>{
      
                let avg = 0
                let temp = {}
        
                comp.eod.forEach(data=>{
                    avg += data.close
                })
      
                avg = avg / comp.eod.length
                temp = {
                    symbol : comp.symbol,
                    fourMonthAvg : avg
                }
      
                compiledAvgs.push(temp)
                companyAvgs1.push(temp)
      
              })
              
              setCompanyAvgs([...compiledAvgs])
          }
    
    dispatch(dataActions.populate(staticJson))
    
    getAverages()
    
    console.log(companyAvgs1)
    // determine()
    const determine = () => {
      
      let stocksWithPercents = []
      
      companies.forEach(comp=>{
        
        let percentChange = 0
        
        
        for(let i = 0; i < companyAvgs1.length; i++){
          
          if(comp.symbol === companyAvgs1[i].symbol){
              let final = comp.eod[0].close
              let avg = companyAvgs1[i].fourMonthAvg
              
              percentChange = ((final - avg) / avg) * 100
              
              percentChange = Math.round(percentChange * 100) / 100
  
              break;
            }
        }
  
        let newObj = {...comp}
        newObj['percentChange'] = percentChange
        stocksWithPercents.push(newObj)
        
      })

      return stocksWithPercents
    }

    dispatch(percentActions.populatePercents(determine()))

    console.log(companiesWithPercents)

  },[])

  
  return (
    <>
      <div className="container justify-content-center graphs">
        <GraphSlider />
      </div>
      <div className="pageBreak pb1">
        <div className="opacityLayer">
            <div className="textLayer">
              <Slide top>
                  <h1 className="header"> Welcome To Buy Low Sell High</h1>
                  <p className="para">
                      On this website you can get up-to-date stock information from the companies listed
                      on the NASDAQ-100 index. The idea behind this webpage was to design a resource
                      capable of making it simple for the user to see which stocks would be worthwile buying or selling based
                      on the most fundamental principal of any investment: buy low, sell high. So far this 
                      website is only tracking 4 months of information, yet it makes it easy to see solid blue-chip
                      stocks that could have had a sharp drop or increase. The speculaiton surrounding stocks
                      in modern times is confusing at best and opposite of reality at worst. When things
                      get too complicated, it's best to go back to basics.
                  </p>
                </Slide>

            </div>
        </div>
      </div>

      <div>
          <SearchBar />
          <RenderBuys />
      </div>
    </>
    
  )
}

export default App