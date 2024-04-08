import React from 'react'
import SearchBar from '../components/SearchBar'
import Nav from '../components/Nav'
import ItemContainer from '../components/ItemContainer'

const SmallStuff = () => {
  return (
    <>
      <header>
        <SearchBar />
        <Nav />
        <ItemContainer size={'small'}/>
      </header>
      <main>
        <section className='mainSection'>

        </section>
        <div>
          <p>Add Something</p>
          <img src="" alt="" />
        </div>

      </main>
      <footer>

      </footer>
    </>
  )
}

export default SmallStuff
