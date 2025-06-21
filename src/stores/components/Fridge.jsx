import React from 'react'
import { fridgeData } from '../data/fridge'


const Fridge = () => {
  const firstFiveImage = fridgeData.slice(0,5)
  return (
    
    <>
    <div className="protitle">
      <h2>Fridge</h2>
    </div>
    <div className='prosection'>
        {
        firstFiveImage.map((item)=>{
                  
            return(
                <div className='imagBox'>
                    <img className='proimg lap' src={item.image} alt="" />
                </div>
            )

        })
}

    </div>
    
    </>
  )
}

export default Fridge