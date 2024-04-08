import React, { createContext } from 'react'

export const mainContext = createContext()

const MainProvider = ({ children }) => {



  
  return (
    <>
      <mainContext.Provider
      value={{}}>

      </mainContext.Provider>
    </>
  )
}

export default MainProvider
