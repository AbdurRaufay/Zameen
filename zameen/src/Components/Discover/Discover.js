import React from 'react'
import "./Discover.scss"

import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import List from './List';
import { useRef,useState } from 'react';
const Discover = () => {
  const [slideNumber,setslideNumber]=useState(0)
  const listRef=useRef()

  const handle=(direction)=>{
    let distance=listRef.current.getBoundingClientRect().x-50
    if(direction=="left" && slideNumber>0){
      setslideNumber(slideNumber-1)
      listRef.current.style.transform=`translateX(${230+distance}px)`
    }
    if(direction=="right"&& slideNumber<5){
      setslideNumber(slideNumber+1)
      listRef.current.style.transform=`translateX(${-230+distance}px)`
    }
  }

  return (
    <div className='list'>
      <span className='listtitle'>Discover New Projects</span>
    <div className='wrappe'>
    <ArrowBackIosOutlinedIcon className='slider-arrow left'
    onClick={()=>handle("left")}
    />
      <div className='contain' ref={listRef}>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      </div>
    <ArrowForwardIosOutlinedIcon
    onClick={()=>handle("right")}
    className='slider-arrow right'/>
    </div>
    </div>
  )
}

export default Discover