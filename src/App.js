import MyNav from './components/navbar.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
function App() {
  
  return (
    <body>
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <header><MyNav/></header>
      <footer>H. Huested 2024</footer>
    </div>
    
    </DndProvider>
    </body>
  );
}

export default App;
