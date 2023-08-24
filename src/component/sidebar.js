import React,{useState} from "react";
import './css/sidebar.css';
// import mail_window from 'mail_window';
function Pro() {
    const [section,setSection] = useState(false);
    const aboutsection =()=>{
        setSection(true);
    }
  return (
    <>
    <div class = "sidebar">
        <div>
       <div> Home</div>
       <div onMouseLeave={aboutsection}>about</div>
        <div>contact</div>
        
        </div>
        {section?<div>
            Education 
            work profile
        </div>:<></>}
        
    </div>
    </>
  );
}

export default Pro;