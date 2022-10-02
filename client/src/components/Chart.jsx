import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import LineChart from './LineChart'

const ChartWrapper = ({compData}) => {

  
  // const [selectedCompany, setSelectedCompany] = useState({})
  const [companyData, setCompanyData] = useState({
  
    labels: compData.eod.slice(0).reverse().map(data=> {

      let newDate = data.date.slice(0,10)


      return newDate
    }),
    datasets: [{
      label:"Stock Price",
      data: compData.eod.slice(0).reverse().map(data=> data.close),
      backgroundColor: 'rgba(255, 0, 60, 1)',
      color: 'rgba(255, 0, 60, 0.6)',
      borderColor: 'rgba(255, 0, 0, 0.4)'
      
    }]
  })

  console.log(compData);


  return (
    <div>
      <LineChart chartData={companyData}/>
    </div>
  )
}

export default ChartWrapper