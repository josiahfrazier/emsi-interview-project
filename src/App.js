import React, { useState, useEffect }  from 'react';
// import DataProvider from './components/DataProvider.js'

import ReportTitle from './components/ReportTitle.js'
import SelectionHeadline from './components/SelectionHeadline.js'
import Summary from './components/Summary.js'

export const DataContext = React.createContext(null);



function App() {

  const [occData, setOccData] = useState([])

  useEffect(() => {
    const getOccData = async () => {
      const fetchOccData = await fetchOccDataJSON()
      setOccData(fetchOccData)
    }
    getOccData()
  }, [])

  const fetchOccDataJSON = async () => {
    const fetched = await fetch('http://localhost:5432/all')
    // const fetched = await fetch('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32')
    const data = await fetched.json()

    return data
  }

  if (occData.occupation) {
    return (
      <DataContext.Provider value={occData}>
        <div className="App">
          <ReportTitle />
          <SelectionHeadline />
          <Summary />
        </div>
      </DataContext.Provider>
    )
  }
  else {
    return (
      <>
        Loading...
      </>
    )
  }


}

export default App;
