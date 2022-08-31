import React from "react";
import { useState } from "react";

const Selection = ()=>{
    const city= [
        'Islamabad',
        'peshawar',
        'lahore',
        'karachi',
        'Multan',
        'Wah',
        'Sahiwal'
    ]
    const [sl,setsl]= useState(0)
    return(
        <div className="container-fluid bck">
            <div className="row">
                <div className="col-8 dc">
                    <div style={{fontSize:'24px'}}>Search properties for sale and to rent in Pakistan</div>
                    <div className="buttons">
                        <button>BUY</button>
                        <button>RENT</button>
                        <button>PROJECTS</button>
                    </div>
                    <div className="selection  d-flex align-items-center justify-content-center">
                       <div className="col-8 bll align-items-center">
                            <div className="row align-items-center" style={{alignItems:'center'}}>
                            <div className="col-3 ">
                                <div className="pd bl">
                                <div className="tt " style={{textAlign:'left'}}>city</div>
                                <div class="dropdown">
                                    <div class=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        {city[sl]}
                                    </div>

                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        {
                                            city.map((e,i)=>{
                                                return(
                                                    <li onClick={()=>{
                                                        setsl(i)
                                                    }}><div class="dropdown-item" >{e}</div></li>
                                                )
                                            })
                                        }
                                        
                                       
                                    </ul>
                                    </div>
                                </div>
                        </div>
                        <div className="col-6 ">
                            <div className="pd bl">
                                <div className="tt">
                                    LOCATION
                                </div>
                                <input type="text" className="sr"/>
                            </div>
                        </div>
                        <div className="col-3" >
                            <div className="pd d-flex align-items-center justify-content-center" style={{backgroundColor:'green',height:'50px'}}>
                                FIND
                            </div>
                        </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="cng">
                        <div className="til">
                            Popular Cities
                        </div>
                        <div className="wspace">
                        <i class="fa-solid fa-angle-up"></i>                       </div>
                        <div className="citylist">
                        {
                            city.map((e,i)=>{
                                return(
                                    <div className="row">
                                        <div className="col-6">{e}</div>
                                        <div className="col-6">{'('}{i+898}{")"}</div>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className="wspace">
                        <i class="fa-solid fa-angle-down"></i> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Selection