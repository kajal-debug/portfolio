import React,{useState} from "react";
import { useNavigate  } from 'react-router-dom';

import './css/dashboard.css';
// import img from './css/assests/img.png';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import SkipPreviousTwoToneIcon from '@mui/icons-material/SkipPreviousTwoTone';
import Pro from './pro';
import Sidebar from './sidebar';
import Footer from "./footer";
//  import {LightModeIcon} from '@mui/material';
function Dashboard() {
  const [value,setValue]= useState(false);
  const navigate = useNavigate();
  const SkipPreviousTwoToneIcons=()=>{
  navigate('/');
  }

  return (
    <div className="containers" style={{color:"White"}}>   
 <div className="image">
 <div className="imagefolder">
  {/* <img src={img}/> */}
  </div>
  <SkipPreviousTwoToneIcon style={{fontSize: "46px", color: "white",left: "20px",position: "absolute",top: "20px"}}
  onClick={SkipPreviousTwoToneIcons} />
  <MenuBookTwoToneIcon style={{fontSize: "46px", color: "white",right: "20px",position: "absolute",top: "20px"}} 
  onClick={()=>{setValue(!value)}}/>
 </div>
 {/* <LightModeIcon/> */}
 <div style={{marginTop:"60px"}}>
  {value===true?<Sidebar/>:<>{console.log("value",value)}</>}

 <Pro/>
 </div>
{/* <Footer  props =  {value}/> */}
    </div>
  );
}
export default Dashboard;