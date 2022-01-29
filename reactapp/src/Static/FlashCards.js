import React,{useState} from "react";
import "./style.css";
import { useSpeechSynthesis } from 'react-speech-kit';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Alert } from "react-bootstrap";
import "./CSS/button.css";

var rate;
var pitch;
var pause;

export const handleSpeak=(text)=>{  //text to speech conversion 

    var msg= new SpeechSynthesisUtterance();
    msg.lang='en-US';
   
    msg.volume = 2;
    msg.text=text;
   

    // console.log(text+" "+rate.value+" "+pitch.value);
    
    // speakerror
    msg.onerror=e => {
        console.log("Something went wrong");
        // Alert("")
    }

   
    //setting pitch and rate
       if(pitch!=null){
        console.log("pitch value="+ pitch);
        msg.pitch=pitch;
       }
       else{
           msg.pitch=1;
       }
    
       if(rate!=null){
        console.log("rate value="+ rate);
        msg.rate=parseFloat(rate);
    }
        else{
            msg.rate=1;
        }
        
       
        speechSynthesis.speak(msg);
    
     

}


export const RateChange=(rateValue)=>{
    
            rate=rateValue;
            console.log("changed value="+ rate);
}  

export const PitchChange=(pitchValue)=>{
    console.log("changed pvalue="+ pitchValue);
    pitch=pitchValue;
}  

const FlashCards =({cardData})=>{
     
    console.log(cardData);
    return (
        // 🗣
        

                <section className="main-card--cointainer">
                   
                   
                    <div className="card-container">
                         
                        {/* <div className="Add">
                            <div><label className="AddCard" >Add Cards</label></div>
                        </div> */}

                        {cardData.map((curElem)=> {
                                // const {value}={description}
                            
                                const {id,description} = curElem;
                               
                                return(
                                    <>
                                        
                                        <div className="card" key={id}>
                                            {/* call handlespeak() speak({text:description}) */}
                                            <button value="I"  onClick={()=> handleSpeak(description)}>{description}</button>
                                            
                                        </div>
                                       
                                        {/* <div>Hi {value}</div> */}
                                    </>
                                );

                            })}
                        </div>
                       
                </section>    
        
         
        
    );
};


export default  FlashCards;