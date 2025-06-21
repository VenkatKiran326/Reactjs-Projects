import React from 'react'
import { acData } from '../data/ac'

const Ac = () => {
    const firstFiveImage = acData.slice(0,5)


  return (
    
    <>
    <div className="protitle">
      <h2>Air Conditoner</h2>
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

export default Ac