
import '../index.css'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link} from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Levels } from './Levels';
import { Equations } from './Equations';
import { Stats } from './Stats';
class MyNav extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='myNav'>
          <Navbar bg= 'dark' data-bs-theme='dark' expand="lg" className='bg-body-tertiary'>
              <Container>
                  <Navbar.Brand as={Link} to='/home'>OhmMy</Navbar.Brand>
                  <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                  <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to='/levels'>Levels</Nav.Link>
                        <Nav.Link as={Link} to='/equations'>Equations</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/stats'>User Statistics</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                  
              </Container>
          </Navbar>
        </div>
        <div className='pageBody'>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/levels' element={<Levels/>}/>
            <Route path='/equations' element={<Equations/>}/>
            <Route path='/stats' element={<Stats/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default MyNav;