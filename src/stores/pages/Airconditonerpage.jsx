import React from 'react'
import Navbar from '../components/Navbar'
import { acData } from '../data/ac'

const Airconditonerpage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
        {acData.map((item)=>{
            return(
                <div>
                    <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="promodel">
                        {item.company},{item.category}
                    </div>
                </div>
            )
        })}

    </div>
    </>
  )
}

export default Airconditonerpage