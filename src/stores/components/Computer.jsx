import React from 'react'
import { computerData } from '../data/computers'

const Computer = () => {
  const firstFiveImage = computerData.slice(0,5)

  return (
    
    <>
    <div className="protitle">
      <h2>Computer</h2>
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

export default Computer