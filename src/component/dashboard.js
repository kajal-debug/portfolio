import React from "react";
import Pro from './pro';
import './css/dashboard.css';
import img from './css/assests/img.png';
//  import {LightModeIcon} from '@mui/material';
function dashboard() {
  return (
    <div className="container" style={{color:"White"}}>   
  Hello I'm kajal
 <div className="image">
 <div className="imagefolder"><img src={img}/></div>
 </div>
 {/* <LightModeIcon/> */}
 <Pro/>
    </div>
  );
}
export default dashboard;