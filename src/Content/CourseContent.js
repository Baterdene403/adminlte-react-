import React from 'react'
import CourseTable from "../Table/CourseTable"
import CourseModal from "../Components/courseModal"
import Menu from '../Components/Menu'
import Header from '../Components/Header'
export default function CourseContent() {
  return (
    <div>
      <Menu/>
      <Header/>
   <div className="content-wrapper">
      
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
        </div>{/* /.col */}
        <div className="col-sm-6">
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
          
          {/* /.card */}
        
          </div>
          {/* /.card */}
        </div>
        {/* /.col-md-6 */}
       <div>
        </div>
        {/* /.col-md-6 */}
      </div>
      {/* /.row */}
      <div className='row'>
      <div className="col-12"> 
      {/* <Button  text='Багш нэмэх'/> */}
       <CourseModal/>
       <CourseTable/>
    
      </div>
      </div>
    </div>
    {/* /.container-fluid */}
  </div>
  {/* /.content */}
</div>  
</div>
  )
}
