import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import LineChart from './LineChart'

const ChartWrapper = ({compData, color}) => {

  // const [selectedCompany, setSelectedCompany] = useState({})
  const [companyData, setCompanyData] = useState({
  
    labels: compData.eod.slice(0).reverse().map(data=> {

      let newDate = data.date.slice(0,10)


      return newDate
    }),
    datasets: [{
      label:"Stock Price",
      data: compData.eod.slice(0).reverse().map(data=> data.close),
      backgroundColor: color.backgroundColor,
      color: color.color,
      borderColor: color.borderColor
      
    }]
  })



  return (
    <div>
      <LineChart chartData={companyData}/>
    </div>
  )
}

export default ChartWrapper