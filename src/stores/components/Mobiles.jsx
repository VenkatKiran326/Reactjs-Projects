import React from 'react'
import { mobileData } from '../data/mobiles'
const Mobiles = () => {

    const firstFiveImage = mobileData.slice(0,5)
  return (
    
    <>
    <div className="protitle">
      <h2>Mobiles</h2>
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

    </div></>
  )
}

export default Mobiles