import React from 'react'
import SearchBar from '../components/SearchBar'
import Nav from '../components/Nav'
import ItemContainer from '../components/ItemContainer'

const MediumStuff = () => {
  return (
    <>
      <header>
        <SearchBar />
        <Nav />
        <ItemContainer size={'medium'}/>
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

export default MediumStuff
