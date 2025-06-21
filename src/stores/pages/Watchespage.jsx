import React from 'react'
import { watchData } from '../data/watch'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Watchespage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
        {watchData.map((item)=>{
            return(
                <div>
                   <Link to={`/watch/${item.id}`}>    {/*  this line to open further into item to display below code is needed*/}
                    <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                    </Link>
                    <div className="promodel">
                        {item.brand},{item.model}
                    </div>
                </div>
            )
        })}
        
        </div>
    </>
  )
}

export default Watchespage