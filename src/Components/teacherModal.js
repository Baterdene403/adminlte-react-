import axios from '../axios';
import React, { useContext, useState } from 'react'
import Input from './input'
import TeacherContext from '../Context/TeacherContext';
import { Modal } from 'react-bootstrap';
export default function TeacherModal(props) {
  const teacherContext = useContext(TeacherContext);
  
  const  handleInputChange=(event) => {
    const target = event.target;
    const value =  target.value;
    const name = target.name;
    teacherContext.inputValue(name,value);
  }
 
  
  return (
 <form>
  <button type="button" class="btn btn-primary" onClick={teacherContext.addModal}>
  Багш нэмэх
  </button>
  <Modal show={teacherContext.state.modalShow} onHide={teacherContext.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Багшийн жагсаалт</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Input onChange={handleInputChange} value={teacherContext.state.teacher.name} title="Нэр" name="name"/>
     <p style={{color:"red"}}>{teacherContext.inputError.name}</p>
     <Input onChange={handleInputChange} value={teacherContext.state.teacher.age} title="Нас" name="age" />
     <p>{teacherContext.inputError.age}</p>
        </Modal.Body>
        <Modal.Footer>
        <button type="reset" class="btn btn-secondary" onClick={teacherContext.closeModal}>Хаах</button>
        <button type="submit" class="btn btn-primary" onClick={()=>{
          teacherContext.modifyTeacher()
        }}>{teacherContext.state.isAdd ? "Нэмэх":"Засах"}</button>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
{/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Багш нэмэх</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
     <Input onChange={handleInputChange} value={teacherContext.state.teacher.name} title="Нэр" name="name"/>
     <p style={{color:"red"}}>{teacherContext.inputError.name}</p>
     <Input onChange={handleInputChange} value={teacherContext.state.teacher.age} title="Нас" name="age" />
     <p>{teacherContext.inputError.age}</p>
      </div>
      <div class="modal-footer">
        <button type="cancel" class="btn btn-secondary" data-dismiss="modal">Хаах</button>
        <input type="submit" value="hadgalah" ></input>
      </div>
    </div>
  </div>
</div> */}
</form>
  )
}
