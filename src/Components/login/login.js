import React, { useState } from 'react'
import {Link} from "react-router-dom"
import css from "./style.module.css"
export default function Login() {
  const [username, setUsername] = useState('');
   const [pass, setPass] = useState('');
   console.log("name",username);
   console.log("pass",pass);
  return (
    <div >
    <form className={css.Login} >
    <div >
    {/* <!-- Email input --> */}
    <div class="form-outline mb-4"  >
      <input placeholder='и-мэйл'
       onChange={(username)=>setUsername(username.target.value)} 
        type="email"
        id="form2Example1" 
        class="form-control" />
   </div>
    {/* <!-- Password input --> */}
    <div class="form-outline mb-4">
      <input placeholder='нууц үг ' 
      
       onChange={(pass)=>setPass(pass.target.value)} 
       type="password" id="form2Example2"
       class="form-control" />
    </div>
  
    {/* <!-- 2 column grid layout for inline styling --> */}
    <div class="row mb-4">
      <div class="col d-flex justify-content-center">
        {/* <!-- Checkbox --> */}
    
      </div>
  
    
    </div>
    {/* <!-- Submit button --> */}
    <Link to="/home" >
      <button  type="button" class="btn btn-primary btn-block mb-4"
        onClick={()=>{
        console.log("bnuu")
        
        if(username==='admin' && pass==="admin" ){
         console.log("hey");
       
         }
          else{
            alert("Нууц үг эсвэл нэвтрэх нэр буруу байна")
          }
         }
        }
        >Нэвтрэх</button>
    </Link>
     </div>
     </form>
     </div>
         )
        }
