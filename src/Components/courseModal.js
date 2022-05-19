import React, { useContext, useEffect, useState } from 'react'
import Input from './input'
import CourseContext from '../Context/CourseContext';
import { Button, Modal } from 'react-bootstrap';
import TeacherContext from '../Context/TeacherContext';
export default function CourseModal(props) {
  const courseContext = useContext(CourseContext);
  const teacherContext=useContext(TeacherContext)
  const [lesson,setLesson]=useState({
    
    time:"",
    title:"",
    video:"",
  })

  const [addClicked,setAddClicked]=useState(false)
  useEffect(()=> {
  teacherContext.loadTeachers();
  },[]) 
  const  handleInputChange=(event) => {
    const target = event.target;
    const value =  target.value;
    const name = target.name;
    courseContext.inputValue(name,value,target);
   
  }
  const  handleLessonInputChange=(event) => {
    const target = event.target;
    const value =  target.value;
    const name = target.name;
    setLesson({
      ...lesson,[name]:value
    })
    console.log("value ",target.value)
    console.log("name ",target.name)
    // courseContext.inputValue(name,value,target);
   
  }
 
  
  return (
 <form>
  <button type="button" class="btn btn-primary" onClick={courseContext.addModal}>
  Сургалт нэмэх
  </button>

  <Modal show={courseContext.state.modalShow} onHide={courseContext.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Сургалт нэмэх</Modal.Title>
        </Modal.Header>
        <Modal.Body>

     {/* <Input onChange={handleInputChange} value={courseContext.state.course.image} title="Зураг" name="image" /> */}
     <Input  onChange={handleInputChange} type="file" title="Зураг" name="image"    />  
      {/* value={courseContext.state.course.image} */}
     <p style={{color:"red"}}>{courseContext.inputError.image}</p>
     <Input onChange={handleInputChange} value={courseContext.state.course.price} title="Үнэ" name="price" />
     <p style={{color:"red"}}>{courseContext.inputError.price}</p>
     <Input onChange={handleInputChange} value={courseContext.state.course.title} title="Гарчиг" name="title" />
     <p style={{color:"red"}}>{courseContext.inputError.title}</p>
     <Input onChange={handleInputChange} value={courseContext.state.course.unitCount} title="Нийт оролт" name="unitCount" />
     <p style={{color:"red"}}>{courseContext.inputError.unitCount}</p>
     <Input onChange={handleInputChange} value={courseContext.state.course.unitTime} title="Нийт цаг" name="unitTime" />
     <p style={{color:"red"}}>{courseContext.inputError.unitTime}</p>
     
     <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Багш</label>
  </div>
  {
    teacherContext.state.loading? <div>unshij baina </div> :
    <select onChange={handleInputChange} name='teacher' value={courseContext.state.course.teacher} class="custom-select" id="inputGroupSelect01">
    <option selected>Багш сонгох...</option>
     
    {
      teacherContext.state.teachers.map(el=>{
        return <option value={el.id}>{el.name} </option>
      })
    }
  
  </select>
   
  }

</div>
<div><Button 
  style={{backgroundColor:"green",marginTop:"50px"}}
onClick={()=>{
  setAddClicked(!addClicked)
  console.log("bainu")
}}> Хичээл нэмэх</Button>
</div>
<div  style={{  border:" 1px solid "}} >
  
  {
   addClicked && <form>
     
      <Input  onChange={handleLessonInputChange} type="file" title="Бичлэг" name="video" />
      <Input onChange={handleLessonInputChange}   title="Цаг" name="time" />
      <Input onChange={handleLessonInputChange}   title="Гарчиг" name="title" />
      <Button  onClick={()=>{setAddClicked(false)}} style={{backgroundColor:"gray"  }}> Цуцлах</Button>
      <Button onClick={()=>{
        if(lesson.time && lesson.title && lesson.video){
        setAddClicked(false)
      console.log("value",lesson)
      
      courseContext.insertLesson(lesson)
      setLesson({
        time:"",
        title:"",
        video:"",
      })
      }
      else {
        alert("Мэдээлэл гүйцэт оруулна уу");
      }
    }
        }> Нэмэх</Button>
   </form>
  }

 {courseContext.state.course.lessons &&
 courseContext.state.course.lessons.map(el=>{
    return <div>{el.time},{el.video},{el.title} </div>
  })
    

}
</div>
        </Modal.Body>
        <Modal.Footer>
        <button type="reset" class="btn btn-secondary" onClick={courseContext.closeModal}>Хаах</button>
        <button type="submit" class="btn btn-primary" onClick={()=>{
          courseContext.modifyCourse()
        }}>{courseContext.state.isAdd ? "Нэмэх":"Засах"}</button>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

</form>
  )
}
