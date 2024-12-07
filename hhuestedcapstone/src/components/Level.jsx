import React, { useState, useEffect } from 'react';
import ResistorValuesGame from './ResistorValuesGame'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { collection, getDocs,query, where } from 'firebase/firestore';
import {db} from '../firebase/utils';


async function fetchLesson(lessonNum){
    const lessonCollection = collection(db,'Lessons');
    const q = query(lessonCollection, where('LessonNum','==', lessonNum));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(doc => ({
        id:doc.id,
        ...doc.data()
    }));
    return data;
}

const Level = (lessonNum) => {
    const [lessonData, setLessonData] = useState([]); 

    async function fetchData(){
      const data = await fetchLesson(lessonNum);
      setLessonData(data);
  } 

    useEffect(()=> { 
    fetchData();
}, []);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function nextLesson() {
    lessonNum = lessonNum+1;
    fetchData();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Start
      </Button>

      <Offcanvas className="offcanvas" show={show} onHide={handleClose} placement='end' backdrop={false}>
        <Offcanvas.Header className='offcannvas-header' closeButton>
          <Offcanvas.Title className='offcanvas-title'> <b>{lessonData.map((lesson) => (
            <div key ={lesson.id}>
                {lesson.LessonTitle}
            </div>
          ))}</b></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='offcanvas-body'>
          {lessonData.map((lesson) => (
            <div key ={lesson.id}>
              <p className='lessonText' dangerouslySetInnerHTML={{__html:lesson.LessonText}}></p>
            </div>
          ))}
        <Button variant='primary' onClick={handleClose}>Finish Lesson</Button>
        </Offcanvas.Body>

      </Offcanvas>
    </>
  );
}

export default Level;