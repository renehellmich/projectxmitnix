import React, { createContext, useState } from 'react'

export const mainContext = createContext()

const MainProvider = ({ children }) => {

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
      value={{bigStuff, setBigStuff, mediumStuff, setMediumStuff, smallStuff, setSmallStuff}}>
        {children}
      </mainContext.Provider>
    </>
  )
}

export default MainProvider
