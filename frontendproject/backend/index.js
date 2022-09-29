const express = require('express')
const app = express()
var request = require('request');
const {StringStream} = require("scramjet");
const axios = require('axios').default;
const symbols = require('./public/NASDAQ100.json')

const params = {
    access_key: '3166e6a2a87e16c24008b8cbd16f9a8c'
  }


function sleep(milliseconds) {

    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);

}


const getData = async(symbol) => {
    try {
        const response = await axios.get(`http://api.marketstack.com/v1/tickers/${symbol}/eod`, {params});
      
        return(response.data.data)
        
    } catch (error) {
        console.error(error);
    }
    
}

const compileData = async() => {

    let dataList = []

    for(let i = 0; i < symbols.name.length; i++){

        let data = await getData(symbols.name[i])
        dataList.push(data)

        if(i % 5 == 0){
            sleep(1001)
        }
    }
    
    return dataList
}



app.get("/api", async(req, res) => {
    
    res.json(await compileData())
})

app.listen(5000, () => {console.log("Server started on port 5000")} )