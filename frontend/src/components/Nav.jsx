import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className='divNavBar'>
            <button className='buttonNavBar' onClick={() => navigate('/')}>
                HOME
            </button>
            <button className='buttonNavBar' onClick={() => navigate('/bigstuff')}>
                BIG STUFF
            </button>
            <button className='buttonNavBar' onClick={() => navigate('/mediumstuff')}>
                NOT SO BIG STUFF
            </button>
            <button className='buttonNavBar' onClick={() => navigate('/smallstuff')}>
                SMALL STUFF
            </button>
        </div>
    </>
  )
}

export default Nav
