import React from 'react'
import { connect } from 'react-redux';

function Usertable(props) {
   console.log("--usertable",props.isLoading);
    return (
<>
        
                {props.item.map((item, index) => {
                    console.log("--table",item);
                    return (
                        <tbody>         
            <tr key={index}>
<th class="col-sm-3">{item.id}</th>
      <td class="col-sm-3">{item.name}</td>
      <td class="col-sm-3">{item.address.city}</td>
      <td class="col-sm-3">{item.phone}</td>
      <td class="col-sm-3">{item.email}</td>
      <td class="col-sm-3">{item.company.name}</td>
      </tr></tbody>

       
                    )
                })}

            
</>
    )
}
const mapStateToProps=state=>({
    state:state.Users,
    isLoading:state.Users.isLoading

})
export default connect(mapStateToProps)(Usertable)