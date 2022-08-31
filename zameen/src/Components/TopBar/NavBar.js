import React from "react";
import './navbar.css'


const NavBar = ()=>{
    const flg = 'data:image/png;base64,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'
    return(
        <div>
            <nav class="navbar navbar-expand-lg  navbar-dark " style={{backgroundColor:'green',color:'#ffff'}}>
            <a class="navbar-brand" href="#">
                <i class="fa-solid fa-house"></i>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">PROPERTIES <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">FLOT FINDER</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">AREA GUIDES</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">BLOG</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">PARTNERS</a>
                    </li>
                
                   
                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        TOOLS
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Home Loan Calculater</a>
                            <a class="dropdown-item" href="#">Area Unit Conerter</a>
                            <a class="dropdown-item" href="#">Land Record Pages</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        MORE
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">MAPS</a>
                            <a class="dropdown-item" href="#">FORUM</a>
                            <a class="dropdown-item" href="#">INDEX</a>
                            <a class="dropdown-item" href="#">TRENDES</a>
                        </div>
                    </li>
                    </ul>
                    <div class="form-inline my-2 my-lg-0">
                        <div style={{border:'1px solid white',padding:'2px'}}>
                        <input class="form-control mr-sm-2" type="search" placeholder="Property ID" aria-label="Search" style={{height:'20%'}}/>
                        </div>
                        
                        <button class="btn " style={{color:'black',backgroundColor:'white',padding:'2px 10px'}}> <span style={{color:'black',padding:'0px 2px',fontWeight:'bold'}}>+</span> Add Property</button>
                        
                        
                        <ul class="navbar-nav ">
                        <a class="nav-link active" href="#">
                       اُردُو
                        </a>
                        <a class="nav-link" href="#">
                        <img src={flg} alt="" className="mr-3" style={{with:'20px',height:'20px'}} />
                        </a>
                            <li class="nav-item dropdown active">
                                <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa-solid fa-gear mr-3 " style={{fontSize:20}}></i> 
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">MAPS</a>
                                    
                                </div>
                            </li>
                            <li class="nav-item active">
                        <a class="nav-link" href="#">
                        <i class="fa-solid fa-user mr-3 "style={{fontSize:20}}></i>
                        </a>
                    </li>
                        </ul>
                        
                       
                    </div>
                </div>
                </nav>
        </div>
    )
}

export default NavBar