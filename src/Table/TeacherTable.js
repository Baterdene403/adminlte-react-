import React, { useContext, useEffect} from "react";
import axios from "../axios";
import Button from "../Components/button";
import TeacherContext from "../Context/TeacherContext";
const TeacherTable = (props) => {
  const teacherContext = useContext(TeacherContext);
 


  useEffect(()=> {
    const script = document.createElement("script");
    script.src = "js/init_datatable.js";
    script.async = true;
    document.body.appendChild(script);
    teacherContext.loadTeachers();
  
  },[]) 

 
    return (
      
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Багшийн жагсаалт</h3>
        </div>
        {/* /.card-header */}
        <div className="card-body">
         {teacherContext.state.loading ? "Unshij baina" : <table id="example1" className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Нэр</th>
                <th>Нас</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
          {
            teacherContext.state.teachers.map(el=> 
              <tr>
              <td>{el.name}</td>
              <td>{el.age}</td>
              <td><Button onClick={()=>{
                console.log("clicked item",el)
                teacherContext.updateModal(el)
              }} className={"btn btn-primary"} text="Засах"/></td>
              <td><Button onClick={()=>{
                console.log("clicked item",el)
                teacherContext.deleteTeacher(el.id)
              }} className={"btn btn-danger"} text="Устгах"/></td>
            </tr> )
          }
           
            </tbody>
            <tfoot>
              <tr>
                <th>Нэр</th>
                <th>Нас</th>
                <th></th>
                <th></th>
              </tr>
            </tfoot>
          </table>}
        </div>
        {/* /.card-body */}
     
      </div>
    );
  
}
export default TeacherTable;