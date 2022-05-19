import React from "react";
import Footer from "./Components/Footer";
import {Route,Switch} from "react-router-dom"
import OrderContent from "./Content/OrderContent";
import TeacherContent from "./Content/TeacherContent";
import { OrderStore } from "./Context/OrderContext";
import { TeacherStore } from "./Context/TeacherContext";
import { CourseStore } from "./Context/CourseContext";
import CourseContent from "./Content/CourseContent"
import Login from "./Components/login/login";
export default function App(){
  return <div>
      <CourseStore>
         <TeacherStore>
            <OrderStore>
              <Switch>
                <Route path='/home' component={CourseContent} />
                <Route path='/orders' component={OrderContent} />
                <Route path='/teachers' component={TeacherContent} />
                <Route path='/' component={Login} />
              </Switch>
             </OrderStore>
          </TeacherStore>
    </CourseStore>
    <Footer/>
  </div>
}