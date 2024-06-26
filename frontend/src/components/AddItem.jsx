import React from 'react'

const AddItem = () => {
  const sub = (event) =>{
    console.log("test")
    event.preventDefault()
    const form = event.target
    const formData= new FormData(form)
    fetch(import.meta.env.VITE_BACKEND_URL+'/item/create', {
      method: 'POST',
      body: formData
    })
  }
  const test = (event) =>{
    console.log("das hier wird angezeigt")
  }
  return (
    <>
      <form onSubmit={sub}>
        <input type="text" name="titel" id="titelInput" placeholder='titele'/>
        <input type="text" name="room" id="roomInput" placeholder='room'/>
        <label htmlFor="image">Datei wählen:</label>
        <input type="file" name="image" id="imageInput"/>
        <input type="text" name="text" id="textInput" placeholder='text'/>
        <label htmlFor="size">Size:</label>
        <select name="size" id="inputSize">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button>submit</button>
      </form>
    </>
  )
}

export default AddItem
