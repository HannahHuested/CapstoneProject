import { useDrag } from "react-dnd"


/*The color object is used in the resistor values game in which the user
is given a vaule and has to drag the colors into the proper band to
reflect that value. Colors are given a value from range 0-9 in rainbow order.
Black: 0
Brown: 1
Red: 2
Orange: 3
Yellow: 4
Green: 5
Blue: 6
Violet: 7
Gray: 8
White: 9
*/

const Colors = ({ color, resistorColors,r1,r2,r3,r4}) => { 
    const [{isDragging}, drag] = useDrag(() => ({
        type: "color",
        item:{name: color},
        end: (item, monitor) =>{
          
        const dropResult = monitor.getDropResult()
        
        if (item && dropResult) {
            const resistorId = dropResult.name
            let tempList = item.name;

            localStorage.setItem(resistorColors + resistorId, JSON.stringify(tempList));
            if(resistorId==1){
              r1(JSON.parse(localStorage.getItem('resistorColor1')));
            }
            else if(resistorId==2) {
              r2(JSON.parse(localStorage.getItem('resistorColor2')));
            }
            else if(resistorId==3) {
              r3(JSON.parse(localStorage.getItem('resistorColor3')));
            }
            else{
              r4(JSON.parse(localStorage.getItem('resistorColor4')));
            }
        } 
    },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
         })
    }), [])
               
  return (
    <div ref={drag}><img src={color[0]} alt={color[0]} className="box"/></div>
  )
}

export default Colors

