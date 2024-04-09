import React, { createContext, useState } from 'react'

export const mainContext = createContext()

const MainProvider = ({ children }) => {

  const [items, setItems] = useState([])

  const [bigStuff, setBigStuff] = useState({
    data: [],
    detailInfo: []
  })

  const [mediumStuff, setMediumStuff] = useState({
    data: [],
    detailInfo: []
  })

  const [smallStuff, setSmallStuff] = useState({
    data: [],
    detailInfo: []
  })

  return (
    <>
      <mainContext.Provider
      value={{items, setItems, bigStuff, setBigStuff, mediumStuff, setMediumStuff, smallStuff, setSmallStuff}}>
        {children}
      </mainContext.Provider>
    </>
  )
}

export default MainProvider
