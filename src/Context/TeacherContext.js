import React, { useState } from "react";
import axios from "../axios";

const TeacherContext = React.createContext();

const initialState = {
  teachers: [],
  loading: false,
  error: null,
  modalShow:false,
  isAdd : false,
  finished : false,
  teacher: {
    name : "",
    age : ""},
};



export const TeacherStore = (props) => {
  const [state, setState] = useState(initialState);
  const[inputError,setInputError] = useState({
    name : "",
    age : ""
  })
  const loadTeachers = (userId) => {
    // Захиалгыг татаж эхлэлээ гэдгийг мэдэгдэнэ.
    // Энийг хүлээж аваад Spinner ажиллаж эхлэнэ.
    setState({ ...state, loading: true } );
    

      axios 
      .get("/teachers.json")
      .then((result)=>{
      let tempData =Object.values( result.data);
      let ids = Object.keys( result.data);
      for(let i=0;i<ids.length;i++){
         tempData[i].id = ids[i];
      }
      setState({ ...state, teachers: tempData ,loading:false ,modalShow:false , teacher: {
        name : "",
        age : ""},});
      })
      .catch((err)=> setState({ ...state, teachers: [],loading:false,modalShow:false , teacher: {
        name : "",
        age : ""} }));
    }
    const inputValue= (name,value)=>{
      if(value === ""){
        
        setInputError({
          ...inputError,
          [name] : "Хоосон утга байж болохгүй"}
        )
      }else{
        setInputError({
          ...inputError,
          [name] : ""}
        )
      }
      setState({...state,teacher : {
        ...state.teacher,
        [name]:value
      }})
    }
    const deleteTeacher = (id)=>{
      axios.delete(`teachers/${id}.json`).then(res=>{
        alert("Амжилттай устгалаа");
   
         loadTeachers();
        }).catch(err=>{
       alert("Амжилтгүй боллоо")})
    }
    const modifyTeacher = ()=>{
       if(state.teacher.age && state.teacher.name ){
         if(state.isAdd){//nmeh ued
          axios.post("/teachers.json",state.teacher).then(res=>{
           alert("Амжилттай нэмлээ");
      
            loadTeachers();
           }).catch(err=>{
          alert("Амжилтгүй боллоо")})
           }else{//zasah ued
            axios.put(`/teachers/${state.teacher.id}.json`,state.teacher).then(res=>{
             alert("Амжилттай заслаа");
           loadTeachers();
              

             }).catch(err=>{
               alert("Амжилтгүй боллоо")})
             }
           }else{
          alert("Талбаруудыг бөглөнө үү")
        }
         
    }
    
  const addModal = () => {
    setState({...state,modalShow : true, isAdd : true,teacher: {
    name : "",
    age : ""}})
  };//nemeh button darah ued ajilna
  const closeModal = () => {setState({...state,modalShow : false, teacher: {
    name : "",
    age : ""}})
  };
  const updateModal = (item)=>{
    setState({...state,modalShow : true, isAdd : false,teacher:item})
  }
  return (
    <TeacherContext.Provider value={{ state, inputError,loadTeachers,inputValue,modifyTeacher ,addModal,closeModal,updateModal,deleteTeacher}}>
      {props.children}
    </TeacherContext.Provider>
  );
};

export default TeacherContext;
