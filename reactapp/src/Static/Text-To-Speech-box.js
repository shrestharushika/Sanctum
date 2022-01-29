import {handleSpeak} from "./FlashCards";
import "./style.css";
import React,{useState,useEffect} from "react";
import "./CSS/button.css";
import "./CSS/fa_icons.css";







const TextToSpeechbox=()=>{
    
    const [text,setText]=useState("You can write also");
    

    
   

    const handleTextChange=(e)=>{
        console.log(e.target.value);
        setText(e.target.value);
    }

   
   

    
   
    
    
    return(
           <>
           
                <div className="features">
                          
                       <input  className="text" type="text" placeholder={text} onChange={handleTextChange} id="speech-msg"/>
                       {/* <i className="fas fa-microphone"></i> 🗣*/}
                       <button className="microphone" onClick={()=>handleSpeak(text)}>🗣</button> 
                       {/* <button  className="speak" onClick={()=>handleSpeak(text)}></button> */}
               </div>
           </>   
    );
};

export default TextToSpeechbox;
