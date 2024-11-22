import React, { useEffect, useState } from 'react'
import Modals from './modals';
import Button from 'react-bootstrap/Button';
import Colors from './Colors'
import ResistorBands from './ResistorBands';
import Black from '../images/Black.png';
import Brown from '../images/Brown.png';
import Red from '../images/Red.png';
import Orange from '../images/Orange.png';
import Yellow from '../images/Yellow.png';
import Green from '../images/Green.png';
import Blue from '../images/Blue.png';
import Violet from '../images/Violet.png';
import Gray from '../images/Gray.png';
import White from '../images/White.png';

export const ResistorValuesGame = () => {
  
  var goal = 3000;
  //List of available colors
  const [colors, setColors] = useState([]);
  //Used to hold colors currently inside resistor bands
  //TODO:: Instead of using an array, use class. Properties: string resistorColorURL, int resistorColorID
  const [resistorColor1, setResistorColor1] = useState([]);
  const [resistorColor2, setResistorColor2] = useState([]);
  const [resistorColor3, setResistorColor3] = useState([]);
  const [resistorColor4, setResistorColor4] = useState([]);
  
  const ColorCode = [[Black, 0], [Brown,1],[Red,2],
  [Orange,3],[Yellow,4], [Green,5],[Blue,6],[Violet,7],
  [Gray,8],[White,9]];
  
  //Initailize available colors and store in local storage (not nessisary)
  useEffect(()=>{
    /*const initialValues = [[Black, 0], [Brown,1],[Red,2],
    [Orange,3],[Yellow,4], [Green,5],[Blue,6],[Violet,7],
    [Gray,8],[White,9]];
    localStorage.setItem("resistorValues", JSON.stringify(initialValues))*/

    //let array = localStorage.getItem("resistorValues");
    setColors(ColorCode);
  }, [])
 
  

  //Get resistors currently saved in localhost and set them to ResistorColors
  useEffect(()=> {
    let array = localStorage.getItem('resistorColor1');
    if(array)
    {
      setResistorColor1(JSON.parse(array));
    }
  }, [])
  useEffect(()=> {
    let array = localStorage.getItem('resistorColor2');
    if(array)
    {
      setResistorColor2(JSON.parse(array));
    }
  }, [])
  useEffect(()=> {
    let array = localStorage.getItem('resistorColor3');
    if(array)
    {
      setResistorColor3(JSON.parse(array));
    }
  }, [])
  useEffect(()=> {
    let array = localStorage.getItem('resistorColor4');
    if(array)
    {
      setResistorColor4(JSON.parse(array));
    }
  }, [])
  
  function ClearColors() {
    return(
      localStorage.setItem('resistorColor1', JSON.stringify(ColorCode[0])),
      localStorage.setItem('resistorColor2', JSON.stringify(ColorCode[0])),
      localStorage.setItem('resistorColor3', JSON.stringify(ColorCode[0])),
      localStorage.setItem('resistorColor4', JSON.stringify(ColorCode[0])),

      setResistorColor1(JSON.parse(localStorage.getItem('resistorColor1'))),
      setResistorColor2(JSON.parse(localStorage.getItem('resistorColor2'))),
      setResistorColor3(JSON.parse(localStorage.getItem('resistorColor3'))),
      setResistorColor4(JSON.parse(localStorage.getItem('resistorColor4')))
      //window.location.reload()
    );
  } //end ClearColors

  function checkAnswer()
  {
    var success = false;
    var answer = ((resistorColor1[1]*100) + (resistorColor2[1]*10) + (resistorColor3[1])) * (10**resistorColor4[1]);
    if(answer==goal) {success = true};

    return(success)
  }
  return (
    <div className='RGame' ><h3>Drag colors into the resistor bands to represent the value {goal}Ω</h3>
    <div className='draggableColors'>
    <br></br>
    {colors.map(item => 
      <Colors
      key= {new Date().getTime() + Math.floor(Math.random()*1000)}
      color = {item}

      resistorColors="resistorColor"
      />
    )}  </div>
    <br></br>
    <table className='resistor'>
      <tbody>
      <tr>
        <td><div className='rband'>
          <ResistorBands resistorColor = {resistorColor1} resistorId={1}/>
        </div></td>
      <td>
        <div className='rband'>
          <ResistorBands resistorColor= {resistorColor2} resistorId={2}/>
        </div>
      </td>
      <td>
        <div className='rband'>
          <ResistorBands resistorColor = {resistorColor3} resistorId={3}/>
        </div>
      </td>
      <td>
        <div className='rband'>
          <ResistorBands resistorColor = {resistorColor4} resistorId={4}/>
        </div>
      </td>
      </tr>
      </tbody>
      </table>
    <div className="gameButtons">
    <p>{resistorColor1[1]}{resistorColor2[1]}{resistorColor3[1]} x10<sup>{resistorColor4[1]}</sup>Ω</p>
        {Modals(checkAnswer())}
        <Button variant='secondary' onClick={ClearColors}>Clear</Button>{''}
    </div>

    </div>
  )
}

export default ResistorValuesGame