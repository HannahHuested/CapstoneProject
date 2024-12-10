import React from 'react'
import '../index.css'
import Button from 'react-bootstrap/Button';
import { Link, Route, Routes } from 'react-router-dom';
import { Levels } from './Levels';

export const Home = () => {
  return (
    <div className='homePage'>
      <br></br>
      <h1>Welcome! To begin learning press start</h1>
      <br></br>
      <br></br>
      <Button variant='success' size='lg' className='startButton' as={Link} to='/levels'>Start</Button>
      <Routes>
        <Route path='/levels' element={<Levels/>}/>
      </Routes>
    </div>
  )
}
