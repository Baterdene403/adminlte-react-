import React from 'react'
import {Link} from "react-router-dom"
export default function Menu() {
  return (

    <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <span className="brand-text font-weight-light">Hi-Learn</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Админ</a>
      </div>
    </div>

  
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        
        <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
          
            <p>
            <p><Link to="/home">Сургалт</Link>  </p> 
              </p>
          </a>
           </li>
           <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
          
            <p>
             <Link to="/Teachers">Багш</Link>
            
            </p>
          </a>
        </li>
           <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
          
            <p>
            <p><Link to="/orders">Захиалга</Link>  </p> 
           
            </p>
          </a>


        </li>
       
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  
  {/* /.sidebar */}
</aside>

  )
}
