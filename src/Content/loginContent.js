import React from 'react'
import Login from "../Components/login/login"
export default function LoginContent() {
  return (
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
       <Login/>
     
       
      </div>
      </div>
    </div>
    {/* /.container-fluid */}
  </div>
  {/* /.content */}
</div>  

  )
}
