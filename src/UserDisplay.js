import React from "react";

const UserDisplay = (props) =>{
	
//console.log(props);
	return(<tr>
		<td>{props.id}</td>
		<td>{props.title}</td>
		<td>{props.status}</td>
		<td><input onChange={props.changeEvent} value={props.status}/></td>
		<td>{props.created}</td>
		<td>{props.updated}</td>
		<td><button onClick={props.delEvent}>Delete</button></td>
	</tr>);
}
export default UserDisplay;