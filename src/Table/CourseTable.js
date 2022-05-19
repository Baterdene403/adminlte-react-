import React, { useContext, useEffect} from "react";
import Button from "../Components/button";
import CourseContext from "../Context/CourseContext"
const CourseTable = (props) => {
  const courseContext = useContext(CourseContext);
 
  useEffect(()=> {
    const script = document.createElement("script");
    script.src = "js/init_datatable.js";
    script.async = true;
    document.body.appendChild(script);
    courseContext.loadCourses();
  
  },[]) 

 
    return (
      
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Сургалтын жагсаалт</h3>
        </div>
        {/* /.card-header */}
        <div className="card-body">
         {courseContext.state.loading ? "Unshij baina" : <table id="example1" className="table table-bordered table-striped">
            <thead>
              <tr>
             
                <th></th>
                <th>Үнэ</th>
                <th>Гарчиг</th>
                <th>Нийт хичээл</th>
                <th>Нийт цаг</th>
                <th>Сургалт үүсгэсэн огноо</th>
                 <th>Багш</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
          {
            courseContext.state.courses.map(el=> 
              <tr>
               <td><img src= {el.image} width="200" height="200"/></td> 
              <td>{el.price}</td>
              <td>{el.title}</td>
              <td>{el.unitCount}</td>
              <td>{el.unitTime}</td>
              <td>{el.createdDate}</td>
              <td>{el.createdDate}</td>
              <td><Button onClick={()=>{
                console.log("clicked item",el)
                courseContext.updateModal(el)
              }} className={"btn btn-primary"} text="Засах"/></td>
              <td><Button onClick={()=>{
                console.log("clicked item",el)
                courseContext.deleteCourse(el.id)
              }} className={"btn btn-danger"} text="Устгах"/></td>
            </tr> )
          }
           
            </tbody>
            <tfoot>
              <tr>
              
              <th></th>
                <th>Үнэ</th>
                <th>Гарчиг</th>
                <th>Нийт хичээл</th>
                <th>Нийт цаг</th>
                <th>Сургалт үүсгэсэн огноо</th>
                <th>Багш</th>
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
export default CourseTable;