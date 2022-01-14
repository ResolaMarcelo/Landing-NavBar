import React from 'react'
import Card from "./Card"

function Cards() {
    return (
        <div className='container d-flex justify-content-center h-100  p-5'>
           <div className="row ">
               <div className="col-md-4">
                   <Card></Card>
               </div>
               <div className="col-md-4">
                   <Card></Card>
               </div>
               <div className="col-md-4">
                   <Card></Card>
               </div>
           </div>
        </div>
    )
}

export default Cards
