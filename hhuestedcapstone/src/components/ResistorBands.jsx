import { useDrop } from "react-dnd";

/*
These objects are the individual resistor bands used in the Resistor Values game.
Each band is weighted according to the standard given by 5 band resistors.
the 5th band (tolerance) will not be used in this game and is assumed to be correct.
The weights of the bands are
1st, 2nd, 3rd: Significant digits
4th: Multiplier (*10^(colorValue))
*/

const ResistorBands = ({resistorColor, resistorId}) => {
    const [{canDrop, isOver}, drop] = useDrop(()=>({
        accept: "color",
        drop: () => ({name: resistorId}),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    }), [], ) 
    

  return (

    <div ref={drop}>
            <p><img className="band" src={resistorColor[0]}/></p>      
    </div>
  )
}


export default ResistorBands