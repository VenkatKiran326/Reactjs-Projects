import React from 'react'
import { booksData } from '../data/books'

const Books = () => {
  const firstFiveImage = booksData.slice(0,5)

  return (
    
    <>
    <div className="protitle">
      <h2>Books</h2>
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

export default Books