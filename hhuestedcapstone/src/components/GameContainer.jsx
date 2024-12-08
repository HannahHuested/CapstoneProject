import React, {useState, useEffect} from "react";
import ResistorValuesGame from "./ResistorValuesGame";
import { db } from "../firebase/utils";
import {doc, getDoc} from "firebase/firestore";


export const GameContainer = () => {

    const [data, setData] = useState([]);
    
    function getRandNum(eng){
        var min=1;
        var max=6;
        if(eng)
        {
            min=min+5;
            max=max+5;
        }
        var num = Math.floor(Math.random()*(max-min)+min);
        num = num.toString();
        return (num);
    }
    async function getVal(num){

        const docRef = doc(db, "Target", num);
        const docSnapshot = await getDoc(docRef);

        if(docSnapshot.exists())
        {
            setData(docSnapshot.data());
        }
        else{
            alert("invalid record "+num+".");
        }
    }

    useEffect(()=> { 
        getVal(getRandNum(false));
    }, []);
   // var displayVal = data.DisplayVal
    //var realVal = data.RealVal

return(

    <div className="gameContainer">
    <div>
        <h3>Drag colors into the resistor bands to represent the value {data.DisplayVal}Ω</h3>
    </div>      
        {ResistorValuesGame(data.RealVal)}
    </div>
) 
}

export default GameContainer;