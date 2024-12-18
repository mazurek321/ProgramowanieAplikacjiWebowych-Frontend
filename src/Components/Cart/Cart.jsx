import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Cart.css"

const Cart = () => {

  const displayItem = () => {
    return (
      <div className="item">
        <h2>Title</h2>
        <p>Amount: <span>0</span></p>
        <p>Cost: <span>0 zł</span></p>
        <p>Total cost: <span>0 zł</span></p>
        <button>+</button>
        <button>-</button>
        <button>Remove</button>
      </div>
    )
  }

  return (
    <div className='Cart container'>
      <Navbar active={"cart"}/>
      {displayItem()}
    </div>
  )
}

export default Cart