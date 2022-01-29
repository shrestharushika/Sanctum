import React,{useState} from "react";
import "./style.css";
import {handleSpeak,RateChange,PitchChange} from "./FlashCards";
import "./CSS/button.css";




const Navbar = ({filterItem,cardList}) =>{
 

   

    return (
        <div>
            <nav className="navbar">
                
                <div className="btn-group">
                    {cardList.map((curElem) =>{ 
                        return (
                        
                            
                                <button className="button-btn" onClick={() => filterItem(curElem)}>
                                    {curElem}
                                </button>
                                
                        
                        );
                    })}
                </div>
            </nav>
        </div>

            
        
    );
};

export default Navbar;