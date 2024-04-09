import React from 'react'

const RegisterForm = () => {
    const register = (event) =>{
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        console.log('form:',formData)
        fetch(import.meta.env.VITE_BACKEND_URL + '/user/register',{
            method:'POST',
            body:formData
        })
    }
    console.log(import.meta.env.VITE_BACKEND_URL + '/user/register')
  return (
    <div>
        <form onSubmit={register}>
            <input type="text" name="username" id="usernameInput" placeholder='username'/>
            <input type="text" name="password" id="passwordInput" placeholder='password'/>
            <input type="email" name="email" id="emailInput" placeholder='email' />
            <button>register</button>
        </form>
    </div>
  )
}

export default RegisterForm
