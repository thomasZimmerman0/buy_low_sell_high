import React, {useEffect, useState} from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {

    const getData = async()=>{

      let results = await fetch('/api')
      let data = await results.json();

      console.log(data)
    }

    getData()
    
  }, [])
  
  return (
    <div>App</div>
  )
}

export default App