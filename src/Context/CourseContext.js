import React, { useState } from "react";
import axios from "../axios";
import moment from "moment";
import { storage } from "../firebase";

const CourseContext = React.createContext();

const initialState = {
  courses: [],
  
  loading: false,
  error: null,
  modalShow:false,
  isAdd : false,
  finished : false,
  file:null,
  course: {
    lessons:[],
    teacher:"",
    createdDate:"",
    image:"",
    price:"",
    title:"",
    unitCount:"",
    unitTime : "",
    },
    
};



export const CourseStore = (props) => {
  const [state, setState] = useState(initialState);
  const[inputError,setInputError] = useState({
    createdDate:"",
    image:"",
    price:"",
    title:"",
    unitCount:"",
    unitTime : "",
  })
  const loadCourses = (userId) => {
    //Захиалгыг татаж эхлэлээ гэдгийг мэдэгдэнэ.
    // Энийг хүлээж аваад Spinner ажиллаж эхлэнэ.
    setState({ ...state, loading: true } );
    

      axios 
      .get("/courses.json")
      .then((result)=>{
      let tempData =Object.values( result.data);
      let ids = Object.keys( result.data);
      for(let i=0;i<ids.length;i++){
         tempData[i].id = ids[i];
      }
      
      setState({ ...state, courses: tempData ,loading:false ,modalShow:false , course: {
        createdDate:"",
        image:"",
        price:"",
        title:"",
        unitCount:"",
        unitTime : "",
    },});
      })
      .catch((err)=> setState({ ...state, courses: [],loading:false,modalShow:false , course: {
        createdDate:"",
        image:"",
        price:"",
        title:"",
        unitCount:"",
        unitTime : "",
    } }));
    }
    const inputValue= (name,value,target)=>{
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
      if(target.type=="file")
      {
        const file = target.files[0];
        setState({...state,file : file})
      }
      else{
        setState({...state,course : {
          ...state.course,
          [name]:value
        }})
      }
    }
    const deleteCourse = (id)=>{
      axios.delete(`courses/${id}.json`).then(res=>{
        alert("Амжилттай устгалаа");
   
         loadCourses();
        }).catch(err=>{
       alert("Амжилтгүй боллоо")})
    }
    const modifyCourse = ()=>{
      console.log("Bnu hu",state)
      if( state.course.price && state.course.title && state.course.unitCount&& state.course.unitTime)
      {
        if(state.isAdd )
        {
          if(state.file)
          {
            uploadFiles(state.file)
            
          }else{
            alert("file oruulna uu")
          }
       }
       else
       {
         if(state.file){
          uploadFiles(state.file)
         }else{
          editCourse()
        }
      }
    }
    else{
      alert("Талбаруудыг бөглөнө үү")
    }
  }
    const addCourse=(url)=>{
      state.course.createdDate=moment( Date ()).format('DD/MM/YYYY');
      state.course.image = url;
      axios.post("/courses.json",state.course).then(res=>{
        alert("Амжилттай нэмлээ");
        loadCourses();
      }).catch(err=>{
        alert("Амжилтгүй боллоо")
      })
    }
    const editCourse=(url)=>{
      //zasah ued
      if(url){
        state.course.image=url;
      }
        axios.put(`/courses/${state.course.id}.json`,state.course).then(res=>{
         alert("Амжилттай заслаа");
         loadCourses();
         }).catch(err=>{
           alert("Амжилтгүй боллоо")
          })
    }
   const uploadFiles = (file) => {
    //
    const uploadTask = storage.ref(`files/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log("progress==>",prog)
        // setProgress(prog);
      },
      
      (error) => console.log(error),
      () => {
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            if(state.isAdd){
              addCourse(url);
            }else{
              editCourse(url);
            }
            console.log(url);
          });
      }
    );
  };


  const addModal = () => {
    setState({
      ...state,
      modalShow : true, 
      isAdd : true,
      course: {
        lessons:[],
        createdDate:"",
        image:"",
        price:"",
        title:"",
        unitCount:"",
        unitTime : "",
      }})
  };//nemeh button darah ued ajilna
  const closeModal = () => {
    setState({...state,modalShow : false, course: {
      lessons:[],
     createdDate:"",
        image:"",
        price:"",
        title:"",
        unitCount:"",
        unitTime : "",
      }})
  };
  const updateModal = (item)=>{
    console.log("itemm===>",item)
    setState({...state,modalShow : true, isAdd : false,course:item})
  }

  const insertLesson=(lesson)=>{
    console.log("state=>",state)
    const tempLessons=state.course.lessons
      tempLessons.push(lesson) 
    setState({...state,course:{
      ...state.course,
      lessons:[...tempLessons]
    }})
    
  }

return (
    <CourseContext.Provider value={{ state, inputError,loadCourses,inputValue,modifyCourse ,addModal,closeModal,updateModal,deleteCourse,insertLesson}}>
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseContext;
