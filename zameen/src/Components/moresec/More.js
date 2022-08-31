import React from 'react'
import "./More.css"
import More1 from './More1';

const More = ({data}) => {

  return (
    <div>
        <section className='more'>
        <div className='container'>
          <h2 className='main-heading'>Explore more on Zameen</h2>
           <div className='row'>
           {data && data.map((single,index)=>{
            return (
                <div className='col-3'> 
                <More1 single={single} index={index}/>
                </div>
            )
           })}
           </div>
        </div>
        </section>
    </div>
  )
}

export default More
