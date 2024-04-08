import React, { useEffect, useState } from 'react'

const ItemContainer = ({size}) => {
  const [items, setItems] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/item")
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
      });
  }, []);
  console.log('items:',items)
  return (
    <>
      {items.map((item)=>{
        if(item.size == size){
          return (
            <div className='item' key={item._id}>
              <h3>{item.titel}</h3>
              <p>{item.room}</p>
              <img src={item.imageUrl} alt="bild" />
            </div>
          )
        }
      })}
    </>
  )
}

export default ItemContainer
