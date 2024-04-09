import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BigStuff from './pages/BigStuff'
import MediumStuff from './pages/MediumStuff'
import SmallStuff from './pages/SmallStuff'
import Register from './pages/Register'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/bigstuff' element={<BigStuff />} />
        <Route path='/mediumstuff' element={<MediumStuff />} />
        <Route path='/smallstuff' element={<SmallStuff />} />
        <Route path='/register' element={<Register/>}/>
      </Routes>

    </>
  )
}

export default App
