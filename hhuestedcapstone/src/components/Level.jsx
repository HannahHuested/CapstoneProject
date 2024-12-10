import React, { useState, useEffect } from 'react';
import ResistorValuesGame from './ResistorValuesGame'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { doc, getDoc } from 'firebase/firestore';
import {db} from '../firebase/utils';





const Level = (lessonNum) => {

  const [lessonData, setLessonData] = useState([]);  
  const [nextLesson, setNextLesson] = useState(1);
  const [previousLesson, setPreviousLesson] = useState(-1);
  const [firstLesson, setFirstLesson] = useState(true);
  const [lastLesson,setLastLesson] = useState(false);
  const lessonQuantity = 3;

  async function fetchLesson(lessonNum){
      const docRef = doc(db, "Lessons", lessonNum.toString());
      const docSnapshot = await getDoc(docRef);
  
      if(docSnapshot.exists())
      {
          setLessonData(docSnapshot.data());
      }
      else{
          alert("invalid record "+lessonNum+".");
      }
  }
    
    useEffect(()=> { async function fetchData(){
        fetchLesson(lessonNum);
    }
    fetchData();
}, []);

  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);  setNextLesson(1); setPreviousLesson(-1);}
  const handleShow = () => {
    setShow(true); 
    fetchLesson(lessonNum);
    if(lessonNum==lessonQuantity){setLastLesson(true);}
    else {setLastLesson(false);}
    if(lessonNum>0){setFirstLesson(false);}
    else {setFirstLesson(true);}
  }

  const advance = () => {

    setNextLesson(nextLesson+1);
    setPreviousLesson(previousLesson+1);

    if(firstLesson){setFirstLesson(false);}
    
    if((lessonNum+nextLesson)==lessonQuantity){setLastLesson(true);}

    fetchLesson(lessonNum+nextLesson);
  }

  const goBack = () => {

    setPreviousLesson(previousLesson-1);
    setNextLesson(nextLesson-1);
    if((lessonNum+previousLesson)==0){setFirstLesson(true);}
    if(lastLesson){setLastLesson(false);}
    fetchLesson(lessonNum+previousLesson);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Start
      </Button>

      <Offcanvas className="offcanvas" show={show} onHide={handleClose} placement='end' backdrop={false}>
        <Offcanvas.Header className='offcannvas-header' closeButton>
          <Offcanvas.Title className='offcanvas-title'> <b>{lessonData.LessonTitle}</b></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='offcanvas-body'>
              <p className='lessonText' dangerouslySetInnerHTML={{__html:lessonData.LessonText}}></p>
              <Button variant='primary' onClick={goBack} hidden={firstLesson}><b>←</b></Button>
              <Button variant='secondary' onClick={handleClose}>Finish Lesson</Button>
              <Button variant='primary' onClick={advance} hidden={lastLesson}><b>→</b></Button>
        </Offcanvas.Body>

      </Offcanvas>
    </>
  );
}

export default Level;