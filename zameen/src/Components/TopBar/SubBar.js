import React from "react";
import { useState } from "react";
import logo from '../Image/logo.png'

const SubBar = ()=>{
    const [show ,setShow] = useState(true)
    return(
        <div  className='subbar'>
            <img src={logo} alt="" />
            <div  className='subbarin'>
                <div style={{padding:'0px 20px',cursor:'pointer'}} onClick={()=>{
                    setShow(!show)
                }}>BUY {' >'}</div>
                <div  className='subbarm'>
                    {
                        show?<>
                        <div>HOME</div>
                        <div>PLOTS</div>
                        <div>COMMERCAIL</div>
                        </>:null
                    }

                    <div className="subm">
                        <div>RENT</div>
                        <div>AGENTS</div>
                        <div>NEW PROJECTS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubBar