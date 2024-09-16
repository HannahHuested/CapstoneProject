import React, { useEffect, useState } from 'react'
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

  //List of available colors
  const [colors, setColors] = useState([]);
  //Used to hold colors currently inside resistor bands
  //TODO:: Instead of using an array, use class. Properties: string resistorColorURL, int resistorColorID
  const [resistorColor1, setResistorColor1] = useState([]);
  const [resistorColor2, setResistorColor2] = useState([]);
  const [resistorColor3, setResistorColor3] = useState([]);
  const [resistorColor4, setResistorColor4] = useState([]);
  
  //Initailize available colors and store in local storage (not nessisary)
  useEffect(()=>{
    const initialValues = [[Black, 0], [Brown,1],[Red,2],
    [Orange,3],[Yellow,4], [Green,5],[Blue,6],[Violet,7],
    [Gray,8],[White,9]];
    localStorage.setItem("resistorValues", JSON.stringify(initialValues))

    let array = localStorage.getItem("resistorValues");
    setColors(JSON.parse(array))
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

  return (
    <div ><h3>Resistor Values Game</h3>
    {colors.map(item => 
      <Colors
      key= {new Date().getTime() + Math.floor(Math.random()*1000)}
      color = {item}
      //Problem area. Resistor colors must communicate which box is being dropped into.
      //TODO:: create array for all bands
      resistorColors="resistorColor1"
      />
    )}  
    
    <table>
      <tbody>
      <tr>
        <td><div className='rband'>
          <ResistorBands resistorColors = {resistorColor1}/>
        </div></td>
      <td>
        <div className='rband'>
          <ResistorBands resistorColors = {resistorColor2}/>
        </div>
      </td>
      <td>
        <div className='rband'>
          <ResistorBands resistorColors = {resistorColor3}/>
        </div>
      </td>
      <td>
        <div className='rband'>
          <ResistorBands resistorColors = {resistorColor4}/>
        </div>
      </td>
      </tr>
      </tbody>
    </table>

    </div>
  )
}

export default ResistorValuesGame