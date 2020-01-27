import React from "react";
import { Link } from 'react-router-dom';
import mockRequests from "./requests.json";
import UserDisplay from "./UserDisplay";

class Requests extends  React.Component {
		state={
			user:mockRequests
		}
	deleteUser = (index,e) => {
		const users = Object.assign([],this.state.user);
		console.log(users);
		users.splice(index,1);
		this.setState({user:users})
	}
	changeUserName = (id,e) =>{
		const index = this.state.user.findIndex((user)=>{
			return user.id == id;
		}
		);
		const user = Object.assign({},this.state.user[index]);
		user.status = e.target.value;
		user.updated_at = new Date().toISOString();
		console.log(user);
		
		const users = Object.assign([],this.state.users);
		users[index] = user;
		this.setState({user:users});
	}
	 render() {
		  let rowData = this.state.user;
		  let sortByDate  = rowData.sort((a,b)=>{return new Date(b.updated_at)-new Date(a.updated_at)});
		  return (
			<div>
				  <table className="table-striped table-hover" data-pagination="true">
				  {
					 sortByDate.map((userdata,index) =>{
						return (<UserDisplay id={userdata.id}title={userdata.title}status={userdata.status}created={userdata.created_at}updated={userdata.updated_at} delEvent={this.deleteUser.bind(this,index)} changeEvent={this.changeUserName.bind(this,userdata.id)}>{userdata.title}</UserDisplay>)
					})
				  }delEvent
				</table>
			</div>
		 );
	 }
}


//console.log('asasas');


console.log(mockRequests);

export default Requests;
