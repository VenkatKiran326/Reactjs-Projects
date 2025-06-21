import React from 'react'
import { kitchenData } from '../data/kitchen'

const Kitchen = () => {
  const firstFiveImage = kitchenData.slice(0,5)

  return (
    <>
    <div className="protitle">
      <h2>Kitchen</h2>
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

export default Kitchen