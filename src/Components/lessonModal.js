import React from 'react'
import { Button, Modal } from 'react-bootstrap';
export default function LessonModal() {
  return (
 
<Modal show={true} >
<Modal.Header closeButton>
  <Modal.Title>Сургалт нэмэх</Modal.Title>
</Modal.Header>
<Modal.Body>

<p>dadada</p>
<Button ></Button>
{/* <div class="input-group mb-3">
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

</div> */}

</Modal.Body>
<Modal.Footer>
{/* <button type="reset" class="btn btn-secondary" onClick={courseContext.closeModal}>Хаах</button>
<button type="submit" class="btn btn-primary" onClick={()=>{
  courseContext.modifyCourse()
}}>{courseContext.state.isAdd ? "Нэмэх":"Засах"}</button> */}
  {/* <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleClose}>
    Save Changes
  </Button> */}
</Modal.Footer>
</Modal>
  )
}
