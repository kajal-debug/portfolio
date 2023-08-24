import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Pro from './pro';
 import './css/Home.css';
import img from './css/assests/screen2.jpg';
import { connect } from "react-redux";
import { loader } from "../redux/action";
import HomeIcon from '@mui/icons-material/Home';
// import { useEffect } from "react";
//  import {LightModeIcon} from '@mui/material';
function Footer({props,loader}) {
  const [value,setValue] = useState('true');
  // const childtoparent =()=>{
  //   props.childtoParent(load)
  // }
  useEffect(()=>{
    // props.childtoParent('false')
    setValue('false')
    console.log("value from footer",value)
  },[value])
  return (
    <div className="footersection" >  
  <div className="f1" onClick={loader}>
    <Link to='/'    className="childf1"><HomeIcon/>Home</Link></div>
  <div className="f1">
  <Link to='/dashboard'  className="childf1">About</Link></div>
  <div className="f2">Contact</div>
  </div>
  );
}
const maptoStatePros =(state)=>{
return{}
}
export default connect(maptoStatePros,{loader}) (Footer);