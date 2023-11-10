import React, { useEffect, useRef, useState } from 'react'
import './main.css'
import Logo from '../icons/logo.svg'
import Rules from '../icons/image-rules.svg'
import Dynamic from './Dynamic'
import Staticpage from './Staticpage'
import { useData } from '../Export'
const Main = () => {

  const {score} = useData();
  const{mainclick} = useData();
  const staticpage = useRef();
  const dynamicpage = useRef(); 
  const [click, setClick] = useState(false);
  const rules = useRef();
  useEffect(()=>{
    if(click){
      rules.current.style.display="grid";
    }
    else{
      rules.current.style.display="none";
    }
  },[click]);
  useEffect(()=>{
    if(mainclick){
     staticpage.current.style.display="block";
     dynamicpage.current.style.display="none";
    }
    else{
      dynamicpage.current.style.display="block";
      staticpage.current.style.display="none";
    }
  })

  return (
    <div className='main'>
        <div className='main-wrapper-header container'>
          <div className='header'>
            <div className="header-logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="header-score">
              <div className='score-board'>
                <h5>Score</h5>
                <h3>{score}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='main-wrapper-router container'>
          <div className="static" ref={staticpage}>
           <Staticpage />  
          </div>
         <div className="dynamic" ref={dynamicpage}>
           <Dynamic />
         </div>
        </div>
        <div className='main-wrapper-footer'>
          <div className="rules" ref={rules}>
            <div className="rules-header">
              <h3>Rules</h3>
              <p><i class="fa-regular fa-circle-xmark" onClick={()=>{setClick(false)}}></i></p>
            </div>
            <div className="rules-img">
              <img src={Rules} alt="rules-img" />
            </div>
          </div>
          <button onClick={()=>{setClick(true)}}>Rules</button>
        </div>
    </div>
  )
}

export default Main