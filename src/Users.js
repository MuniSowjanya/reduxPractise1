import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers,fetchingUsers} from './Actions/action'
import Usertable from './Usertable'


 function Users(props) {
 console.log("--users component",props.isLoading);
 if (props.isLoading) {
  return (
    <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  )}
   else{
     return(
        <div>
            {/* <button onClick={()=>props.dispatch(fetchingUsers())}>Click for Users</button> */}
            <button onClick={props.fetchUsr}>Click for Users</button>
          {/* <button></button> */}
          {props.isLoading ?
          <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>  :
        <div className="container">
         <table className="table">
         <thead>
           <tr >
             <th class="col-sm-2">S.no</th>
             <th class="col-sm-2">Name</th>
             <th class="col-sm-2" >address</th>
             <th class="col-sm-2">Phone</th>
             <th class="col-sm-2">E-mail</th>
             <th class="col-sm-2">Company</th>
           </tr>
         </thead>
       
     {props.User.map((item,index)=>{
        
         return (
             <Usertable key={index} item={item}/>
             )
            
     })} 
   
    
     </table>
     </div>}
    
         
        </div>
    )}
}

const mapDispatchToProps=dispatch=>{
    return {
      fetchUsr : ()=>dispatch(fetchingUsers())
     
    }
 }
const mapStateToProps=state=>({
    state:state.Users,
    User:state.Users.users,
   isLoading:state.Users.isLoading
})
export default connect(mapStateToProps, mapDispatchToProps)(Users)