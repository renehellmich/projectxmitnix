import React from 'react'

const AddItem = () => {
  const sub = (event) =>{
    event.preventDefault()
    const form = event.target
    const formData= new FormData(form)
    fetch('http://localhost:3000/item', {
      method: 'POST',
      body: formData
    })
  }
  return (
    <>
      <form onSubmit={sub}>
        <input type="text" name="titel" id="titelInput" />
        <input type="text" name="room" id="roomInput" />
        <input type="file" name="image" id="imageInput" />
        <input type="text" name="text" id="textInput" />
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
