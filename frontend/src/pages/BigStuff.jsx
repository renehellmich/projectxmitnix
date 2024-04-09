import React from 'react'
import SearchBar from '../components/SearchBar'
import Nav from '../components/Nav'
import ItemContainer from '../components/ItemContainer'

const BigStuff = () => {
  return (
    <>
      <header>
        <SearchBar />
        <Nav />
        <ItemContainer size={'large'}/>
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

export default BigStuff
