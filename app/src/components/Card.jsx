import React from 'react'
import '../App.css';
import img1 from "../img/card1.jpg"

function Card() {
  return (
    <div className='card'>
      <img src={img1} alt="" />
      <div className="card-body">
        <h4 className='card-title'>Titulo</h4>
        <p className="card-text text-secondary">tatem officia porro minus qui harum doloremque, explicabo dolorum? Qui, sed.</p>
        <a href="" className='btn btn-outline-secondary border-0'  >Go to the</a>
      </div>
    </div>
  )
}


export default Card
