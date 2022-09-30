import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {dataActions} from './dataSlice'

const RenderBuys = () => {

    const companies = useSelector(state => state.companies)
    const dispatch = useDispatch()

    const [buyArr, setBuyArr] = useState([])
    const [companyAvgs, setCompanyAvgs] = useState([])

    useEffect(() => {

        let companyAvgs = []

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
                companyAvgs.push(temp)
    
            })
    
            setCompanyAvgs([...compiledAvgs])
        }


        getAverages()


        const determine = (type) => {

            let stocksToBuy = []

            companies.forEach(comp=>{

                let percentChange = 0

                
                for(let i = 0; i < companyAvgs.length; i++){

                    if(comp.symbol === companyAvgs[i].symbol){
                        let final = comp.eod[0].close
                        let avg = companyAvgs[i].fourMonthAvg

                        percentChange = ((final - avg) / avg) * 100

                        percentChange = Math.round(percentChange * 100) / 100

                        break;
                    }
                }

                switch(type){
                    case 'buy':
                        if(percentChange <= -20){
        
                            let temp = {
                                symbol : comp.symbol,
                                percentChange,
                            }
        
                            stocksToBuy.push(temp)
                        }

                    case 'sell':
                        if(percentChange >= 15){
        
                            let temp = {
                                symbol : comp.symbol,
                                percentChange,
                            }
        
                            stocksToBuy.push(temp)
                        }
                }
            })

            setBuyArr([...stocksToBuy])
        }

        determine('buy')


        console.log(companies);

        
    },[companies])



  return (

    <>

            {/* {companyAvgs.map((obj)=> {

                return(
                    <div>
                        {obj.symbol} : {obj.fourMonthAvg}
                    </div>
            )
                
            })} */}

            {buyArr.map((obj)=> {

                return(
                    <div>
                        {obj.symbol} : {obj.percentChange}
                    </div>
            )
                
            })}
    </>
  )
}

export default RenderBuys