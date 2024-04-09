import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BigStuff from './pages/BigStuff'
import MediumStuff from './pages/MediumStuff'
import SmallStuff from './pages/SmallStuff'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/bigstuff' element={<BigStuff />} />
        <Route path='/mediumstuff' element={<MediumStuff />} />
        <Route path='/smallstuff' element={<SmallStuff />} />
      </Routes>

    </>
  )
}

export default App
