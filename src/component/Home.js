import React,{useState,useEffect} from "react";
import Pro from './pro';
 import './css/Home.css';
 import gsap from 'gsap';
import img from './css/assests/transperentbackground.png';
import animation from './css/assests/clap1.gif';
import Footer from "./footer";
//  import {LightModeIcon} from '@mui/material';
import profile from './css/assests/contact-img.svg';
import playbutton from './css/assests/playButton.png';
import axios from "axios";
import { connect } from 'react-redux';
import SettingsIcon from '@mui/icons-material/Settings';
import { name } from "../redux/action";
function Home({name,counter,loader}) {
  const[progress,setProgress ]= useState(0);
  const [isLoader, setisLoader] = useState(true);
  console.log("name",name)
  const childtoParent =(data)=>{
    setisLoader(data);
  }
  
  const HandleDownloadcv=async()=>{
    const cv = 'http://localhost:3000/KajalBaisakh-Resume-MERNStackDeveloper.pdf';
  //   const config = {
  //     onDownloadProgress: (progressEvent) => {
  //       let loaded = 0;
  //       loaded = progressEvent.loaded;
  //       Setvalue((loaded / contentLength) * 100);
  //     },
  //     responseType: 'blob',
  //   };
  //   await axios.get(cv,config).then((res)=>{
  //     const contentLength = parseInt(res.headers['content-length'], 10);

  // console.log("res",contentLength,value)
  // const fileName = cv.split("/").pop();
  // const aTag = document.createElement("a");
  // aTag.href = cv;
  // aTag.setAttribute("download",fileName);
  // document.body.appendChild(aTag);
  // aTag.click();
  // aTag.remove();
  //   }).catch((err)=>{
  //     console.log("err",err)
  //   })
  try {
    const response = await axios.head(cv);
    const contentLength = parseInt(response.headers['content-length'], 10);

    let loaded = 0;

    const config = {
      onDownloadProgress: (progressEvent) => {
        loaded = progressEvent.loaded;
        setProgress((loaded / contentLength) * 100);
        console.log("(loaded / contentLength) * 10000",(loaded / contentLength) * 100)
      },
      responseType: 'blob',
    };

    const fileResponse = await axios.get(cv, config);
    const blob = new Blob([fileResponse.data], { type: 'application/pdf' });
    const downloadUrl = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'kajal.pdf'; // Replace with desired file name
    document.body.appendChild(a);
    a.click();
    a.remove();

  } catch (error) {
    console.error('Error downloading file:', error);
  }
  
  }
  useEffect(()=>{
    // setisLoader("false");
  },[isLoader])
 
  return (
    <>
    {loader?
    <div className="loader" >
      <div className="inside-loader">
        <div className="loaderleftside">
<div style={{display: "flex"}}>         
<img className="playbutton" src={playbutton}/>
<p className="toseemyprotfolio">TO SEE MY PORTFOLIO</p>
</div> 
<div style={{marginLeft: '15%'}}>
  <p style={{letterSpacing: '17px',textDecoration: 'underline'}}>CONTACT ME</p>

  <p>Email:&nbsp;kajalbaisakh123@gmail.com</p>
  <p>Phone:&nbsp;+91-7008478853</p>
</div>
        </div>
 
 <img src={profile} className="profileloader"/>
      </div>
      </div> :<>{console.log("value++",isLoader)}</>}
    <div   className="container" > 
    <SettingsIcon style={{    color: "white",right: "10px",position: "absolute",top: "20px"}}/> 
<div   style={{color:"White",zIndex: "1", position: "absolute",top: '33%',right: '58%',    fontSize: 'x-large',fontFamily: 'cursive'}}>
  <div style={{width: "50px", outline: '2px solid'}}></div>
  <div style={{display:'flex',    gap: '19px',letterSpacing: '9px'}}>
Hello I'm <div>👋</div></div> 
<div className="fontofurname">kajal Baisakh</div>
<button
        // disabled={downloaded}
         onClick={HandleDownloadcv}
        className="HandleDownload"
      > 
        Download cv
      </button>
     
      {/* <video src= {animation}
             class="slider" autoPlay loop muted>
      </video> */}
    
</div> 
   <div className="overlay">
   <img src={img} className="imageme"/>
      <div className="image1">
   <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F1C21B" transform="translate(100 100)">
    <animate attributeName = "d" dur="10000ms" repeatCount="indefinite"
    values="M38.1,-26.7C48,-18.1,53.5,-2.3,48.4,7.5C43.4,17.3,27.7,21.1,11.9,31.2C-3.9,41.3,-19.8,57.7,-26.2,54.6C-32.5,51.4,-29.3,28.7,-34.8,7.3C-40.2,-14.1,-54.2,-34.3,-49.8,-41.7C-45.5,-49.1,-22.7,-43.9,-4.3,-40.4C14.1,-37,28.3,-35.4,38.1,-26.7Z;
    M30.9,-23.9C44.2,-7.9,62.1,5.2,61.8,17.2C61.6,29.3,43.2,40.3,24.6,48C6.1,55.8,-12.5,60.2,-22.3,52.9C-32.2,45.6,-33.3,26.7,-35.1,10.4C-37,-6,-39.6,-19.9,-33.9,-34.1C-28.2,-48.4,-14.1,-63.1,-2.7,-61C8.8,-58.9,17.5,-39.9,30.9,-23.9Z;
    M42,-35.8C48.2,-25.6,42.9,-8.5,39.5,10.2C36.1,28.8,34.8,49.1,25.8,53.5C16.8,57.8,0.1,46.1,-13.3,36.4C-26.8,26.6,-36.9,18.7,-43.4,5.5C-49.9,-7.6,-52.7,-25.9,-44.8,-36.5C-37,-47,-18.5,-49.8,-0.3,-49.6C17.9,-49.3,35.7,-46,42,-35.8Z;
    M42.4,-34.2C53.8,-19.4,61.3,-1.9,58.6,14.7C55.8,31.2,42.9,46.6,27.1,52.8C11.4,59.1,-7.1,56.1,-27.1,49.1C-47.1,42.2,-68.6,31.4,-68.3,19.4C-68,7.5,-45.8,-5.7,-30.7,-21.3C-15.7,-36.9,-7.9,-55,3.8,-58C15.5,-61,30.9,-49,42.4,-34.2Z;
    "></animate>
  </path>
</svg>
   </div>
   <div className="image1">
   <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F1C21B" transform="translate(100 100)">
    <animate attributeName = "d" dur="10000ms" repeatCount="indefinite"
    values="M38.1,-26.7C48,-18.1,53.5,-2.3,48.4,7.5C43.4,17.3,27.7,21.1,11.9,31.2C-3.9,41.3,-19.8,57.7,-26.2,54.6C-32.5,51.4,-29.3,28.7,-34.8,7.3C-40.2,-14.1,-54.2,-34.3,-49.8,-41.7C-45.5,-49.1,-22.7,-43.9,-4.3,-40.4C14.1,-37,28.3,-35.4,38.1,-26.7Z;
    M30.9,-23.9C44.2,-7.9,62.1,5.2,61.8,17.2C61.6,29.3,43.2,40.3,24.6,48C6.1,55.8,-12.5,60.2,-22.3,52.9C-32.2,45.6,-33.3,26.7,-35.1,10.4C-37,-6,-39.6,-19.9,-33.9,-34.1C-28.2,-48.4,-14.1,-63.1,-2.7,-61C8.8,-58.9,17.5,-39.9,30.9,-23.9Z;
    M42,-35.8C48.2,-25.6,42.9,-8.5,39.5,10.2C36.1,28.8,34.8,49.1,25.8,53.5C16.8,57.8,0.1,46.1,-13.3,36.4C-26.8,26.6,-36.9,18.7,-43.4,5.5C-49.9,-7.6,-52.7,-25.9,-44.8,-36.5C-37,-47,-18.5,-49.8,-0.3,-49.6C17.9,-49.3,35.7,-46,42,-35.8Z;
    M42.4,-34.2C53.8,-19.4,61.3,-1.9,58.6,14.7C55.8,31.2,42.9,46.6,27.1,52.8C11.4,59.1,-7.1,56.1,-27.1,49.1C-47.1,42.2,-68.6,31.4,-68.3,19.4C-68,7.5,-45.8,-5.7,-30.7,-21.3C-15.7,-36.9,-7.9,-55,3.8,-58C15.5,-61,30.9,-49,42.4,-34.2Z;
    "></animate>
  </path>
</svg>
   </div>
   {/* <div className="child-overlay"></div> */}
   </div>
 {/* <div className="image">
 {/* <div className="imagefolder"><img src={img}/></div> */}
 
 {/* <LightModeIcon/> */}
 {/* <Pro/> */}
 {/* <img src={img} /> */}
 <div className="footersection">
  <Footer childtoParent={childtoParent} />
  </div>
    </div>
    </>
  );
}
const maptoStatePros= (state) => {
  console.log(state)
  return {
    loader:state.reducer.loader, // 'counter' is the key from the Redux store state
  };
}
export default connect(maptoStatePros)(Home) ;