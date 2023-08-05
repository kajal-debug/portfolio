import React,{useState} from "react";
import { HashRouter,Link } from 'react-router-dom';
  import image from "./css/assests/gmail-icon1.png";
// import mail_window from 'mail_window';
function Pro() {
  
  const [downloaded, setDownloaded] = useState(false);
  const HandleDownload = () => {
      const blob = new Blob(["./css/assests/KajalBaisakh-Resume-MERNStackDeveloper.pdf" ], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
  
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "kajalbaisakh_resume";
      anchor.click();
  
      // setDownloaded(true);
    };
  return (
    <div style= {{color:"#fff"}} >   
 
       
    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dibyaprakash1993@gmail.com" style={{textDecoration: "none"}} target="_blank">
    <img src= {image}     width="45px" height= "45px" style={{borderRadius: "17px"}} /></a>
       {/* <Link to="/"> */}
      <button
        // disabled={downloaded}
        onClick={HandleDownload}
        className="btn btn-primary"
      > 
        Download cv
      </button>
    {/* </Link> */}
    </div> 
  );
}

export default Pro;