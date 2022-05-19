import React from 'react'

export default function Input(props){

  return (
      <>
    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-default">{props.title}</span>
    </div>
   
    <input type={props.type} onChange={props.onChange} name={props.name} class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
     value={props.value}/>
  </div>
  </>
  )

}
