import React from 'react'

const SearchBar = () => {

    const filterByInputValue = () => {

    }

  return (
    <>
        <div>
            <button onClick={filterByInputValue}>
                <img src="" alt="" />
            </button>
            <button onClick={filterByInputValue}>
                <img src="" alt="" />
            </button>
            <input type="text" onKeyDown={() => filterByInputValue()} />
        </div>
    </>
  )
}

export default SearchBar
