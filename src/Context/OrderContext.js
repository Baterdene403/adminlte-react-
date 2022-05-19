import React, { useState } from "react";
import axios from "../axios";

const OrderContext = React.createContext();

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

export const OrderStore = (props) => {
  const [state, setState] = useState(initialState);

  const loadOrders = (userId) => {
    // Захиалгыг татаж эхлэлээ гэдгийг мэдэгдэнэ.
    // Энийг хүлээж аваад Spinner ажиллаж эхлэнэ.
    setState({ ...state, loading: true });

    // const token = getState().signupReducer.token;

    //`orders.json?&auth=${token}&orderBy="userId"&equalTo="${userId}"`
    /*axios
      .get(`/orders.json`)
      .then((response) => {
        const loadedOrders = Object.entries(response.data).reverse();
        setState({ ...state, orders: loadedOrders });
      })
      .catch((err) => setState({ ...state, error: err }));
      */
    axios.get('/orders.json') 
    .then ((result)=>{
      let tempData =Object.values( result.data);
      axios.get('/courses.json') 
    .then ((result)=>{
      let courses = Object.values(result.data);
      let courseIds = Object.keys(result.data);
      console.log("courses result===>",courses) ;
      console.log("courseIds result===>",courseIds) ;
      tempData = tempData.map(el=>{
        el.courses = el.courses.map(course=>{
          console.log("order courses",course);
          let index = courseIds.findIndex(ids=>ids == course);
          console.log("index",index);
          if(index>0)
          return courses[index].title

        })
        return el;
      })
    
      setState({ ...state, orders: tempData ,loading:false });
      
      console.log("new array result===>",tempData) ;
    }).catch(ex=>{ 
        setState({ ...state, orders: [] ,loading:false });
      console.log("ex",ex);
    })
     
      
    }
     )
    .catch(err=> setState({ ...state, orders: [] ,loading:false }))
  }

  

  return (
    <OrderContext.Provider value={{ state, loadOrders }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
