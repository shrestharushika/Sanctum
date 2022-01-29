import React , { useState,useEffect } from "react";
import "./style.css";
import Cards from "./CardList";
import FlashCards from "./FlashCards";
import Navbar from "./Navbar";
import TextToSpeechbox from"./Text-To-Speech-box";
import {handleSpeak,RateChange,PitchChange} from "./FlashCards";
import "./CSS/button.css";
import "./CSS/fa_icons.css";

// get the data from local Storage
const localStorageData=()=>{
    const lists=localStorage.getItem("MySpeakingCards");
    // console.log("lsd",JSON.parse(lists));
    
    if(lists){
        return JSON.parse(lists);
    }else{
        return Cards;
    }
   
};
const cards=localStorageData();

const List=[
    
    ...new Set(
       cards.map((curElem)=>{
           return curElem.category;
       }) 
    ),
   
];

const TTS=()=>{
    const [cardData,setCardData]=useState(localStorageData()); // to hold the initial data
    const [cardList,setDataList]=useState(List);
    const [newCategory,setCategory]=useState("");
    const [newDescription,setDescription]=useState("");
    const [rate,setRate]=useState(1);// set Rate
    const [pitch,setPitch]=useState(1);//pitch
    const [isOpen,setIsOpen]=useState(false);
    const [formOpen,setFormopen]=useState(false);
  //to set rate & pitch value
    const handleRateChange=(e)=>{
        // console.log(e.target.value);
        setRate(e.target.value);
        RateChange(rate)
    }  

    const handlePitchChange=(e)=>{
        setPitch(e.target.value);
        PitchChange(pitch);
    }

    const Form=()=>{
        formOpen==true?setFormopen(false):setFormopen(true);
    }

    const ToggleSidebar=()=>{
        isOpen===true ? setIsOpen(false):setIsOpen(true);
    }
    // 1643012580465
    // To dynamically add new cards
    const AddCards=()=>{
        // console.log(newCategory,newDescription);
        // console.log(Cards);
        const newData={
            id:new Date().getTime(),
            category:newCategory,
            description:newDescription
        };
        if(newData){
            setCardData([... cardData,newData])
            Cards.push(newData);
            localStorage.setItem("MySpeakingCards",JSON.stringify(Cards));
       }
    }

  
    const filterItem=(category)=>{
        const updatedList=cards.filter((curElem)=>{
            return curElem.category===category;
        });

        setCardData(updatedList);
    };
    

    const handleAddCategory=(e)=>{
        setCategory(e.target.value);
    }

    const handleAddDescription=(e)=>{
        setDescription(e.target.value);
    }

  
    return(
            <>
                
                                 
                 <div className={`form ${formOpen==true ? 'active':''}`}>
                        
                            <div className="btn btn-primary" ><i className="fa fa-times" aria-hidden="true" onClick={Form}></i></div>
                        <center>
                            <label><b>Category:</b></label><br></br><br></br>
                            <input type="text"  className="textbox" onChange={handleAddCategory}></input><br></br>
                            <label><b>Description</b></label><br></br><br></br>
                            <input type="text"  className="textbox" onChange={handleAddDescription}></input><br></br>
                            <button type="submit" onClick={()=>AddCards()}>Add</button>
                        </center>
                 </div>
                 <div className={`form-overlay ${isOpen == true ? 'active':'' }`} onClick={Form}></div>
                
                <div className="navbar2">
                  
                    
                    {/* <div className="head"> */}
                        <div className="nav-btn1" onClick={ToggleSidebar}>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </div>
                         
                            
                        <div className="nav-btn2">
                            <i className="fa fa-plus" aria-hidden="true" onClick={Form}></i>
                        </div>
                        
                    {/* </div> */}
                </div>

                <div className = {`sidebar ${isOpen == true ? 'active':''}`}>
                            <div className="sd-header">
                                <h3>Features</h3>
                                <div className="btn btn-primary"  onClick={ToggleSidebar}><i className="fa fa-times" aria-hidden="true"></i></div>
                            </div>
                            <div className="sd-body">
                                <ul>
                                    <div className="ratevalue">
                                        <label for="Rate"><b>Rate</b></label>
                                        <input type="range" id="rate" min="0.1" max="10" step="0.1"  name="rate" value={rate} onChange={handleRateChange}></input>
                                    </div>

                                    <div className="pitchvalue">
                                        <label for="Pitch"><b>Pitch</b></label>
                                        <input type="range" id="pitch" min="0" max="2" step="0.1"  name="pitch" value={pitch} onChange={handlePitchChange}></input>
                                    </div>

                                    
                                </ul>
                            </div>
                </div>
                <div className={`sidebar-overlay ${isOpen == true ? 'active':'' }`} onClick={ToggleSidebar}></div>
                <TextToSpeechbox/>
                <Navbar filterItem={filterItem} cardList={cardList}/>
                <FlashCards cardData={cardData} />
              {/* </div> */}
            </>
    );
};

export default TTS