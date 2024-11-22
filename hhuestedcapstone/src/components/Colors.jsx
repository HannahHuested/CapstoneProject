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

const Colors = ({ color, resistorColors}) => { 
    const [{isDragging}, drag] = useDrag(() => ({
        type: "color",
        item:{name: color},
        end: (item, monitor) =>{
          
        const dropResult = monitor.getDropResult()
        
        if (item && dropResult) {
            const resistorId = dropResult.name
            let tempList = item.name;

            localStorage.setItem(resistorColors + resistorId, JSON.stringify(tempList));
          //TODO: find a way to display the current color w/out reloading (possible, on drop update useState instead of local storage)
          //use if else to check which band, set resistor color as indicated
          window.location.reload();
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

