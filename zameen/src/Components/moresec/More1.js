import React,{useState} from 'react'

const More1 = ({single,index}) => {

     const [isHover,setisHover]=useState(false)
     
  return (
    <div className="card mb-3 border-card">
      <a href='' >
    <div className="row g-0 mt-3 px-2" onMouseEnter={()=>setisHover(true)}
    onMouseLeave={()=>setisHover(false)}>
     
      <div className="col-md-3 images">
        <img src={single.image} className="img-fluid rounded-start mt-4" style={{width:"110px",objectFit:"cover"}} alt="..."/>
      </div>
      <div className="col-md-9">
        <div className="card-body">  
          <h5 className="card-title">{single.title}</h5>
          
          <p className="card-text fw-lighter">
            {single.details}
            </p>
        </div>
      </div>     
    </div>
    </a>
  </div>
  )
}
export default More1

