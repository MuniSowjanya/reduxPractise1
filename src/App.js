import React from 'react'
import './App.css';
import {connect} from 'react-redux'
import Users from './Users'


function App(props) {


const  handleInc=()=>{

  props.dispatch({type:'INC'})
  }
  const handleDec=()=>{
    props.dispatch({type:'DEC'})
  }
  const handleChange=(e)=>{
props.dispatch({type:"USER",payload:[e.target.value]})
  }
  const handlesubmit=()=>{
    const name=document.getElementById("name").value
    props.dispatch({type:"FETCH",payload:name})
    document.getElementById("name").value=" "
  }

 const handleEdit=(item,index)=>{
   console.log(item, index);
   console.log("state",props.data);
   
  const value=window.prompt(item)
  console.log("value------", value);
  props.dispatch({type:"UPDATE",payload:index, value:value})

  //props.data[index]=value

      // return value
  }
  console.log("--props.loading",);
  return (
    <div className="App">
   {/* <div className="spinner-border" role="status">
  <span className="sr-only">Loading...</span>
</div> */}
      <br/>
      <button className="btn btn-success" onClick={handleInc}>Increment</button>
        <button className="btn btn-danger" onClick={handleDec}>Decrement</button>
    <p>Your count is {props.count} </p>

    <input id="name" placeholder="Enter any item" /> 
    <button className="btn btn-success" onClick={handlesubmit}>Submit</button><br/>
   

   
   {props.data.map((item,index)=>{
     return(<ul key={index}><li>{item}
     <button className="btn btn-info"
       onClick={()=>handleEdit(item,index)}
      >Edit</button>
     <button className="btn btn-danger" onClick={()=>{props.dispatch({type:"DELETE_LIST",payload:index})}}>Delete</button></li></ul>)
   })}
   <Users/>
    </div>
    
  );
}

const mapStateToProps=state=>({
  state:state.test,
  state:state.test2,
  count:state.test2,
  user:state.test.user,
  data:state.test.data
})
export default connect(mapStateToProps)(App);
