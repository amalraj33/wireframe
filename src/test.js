import React from "react";
import { Link } from 'react-router-dom';
import mockRequests from "./requests.json";

class Requests extends  React.Component {
	constructor(props){
		super(props);
		this.state={
			user:mockRequests
		}
		//this.componentDidMount = this.componentDidMount.bind(this);
	}
	// componentDidMount(user) {
            // this.setState({
                // user: mockRequests
            // })
			
    // }
	tableHeader() {
        return (
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Status</th>
					<th>Created</th>
					<th>Updated</th>
					<th>Delete</th>
				</tr>
            </thead>
        );
    }
	tableData(){
		//console.log(this.state.user);
		let rowData = mockRequests;
		let sortByDate  = mockRequests.sort((a,b)=>{return new Date(b.updated_at)-new Date(a.updated_at)});
		//console.log(sortByDate);
		
		 let rowData_sort = sortByDate.map(userdata =>
            <tr key={userdata.id.toString()}>
                {this.tableRows(userdata)}
            </tr>);
			//console.log(rowData[1]);
			return <tbody>{rowData_sort}</tbody>;
			//console.log(rowData);
//return <tbody>{rowData.sort(function(a,b){return new Date(b.rowData.updated_at)-new Date(a.rowData.updated_at)})}</tbody>;
	}        
	// sort(rowData){
		 	// let sortedCars1 = cars.sort((a, b) =>
            // a.initialRegistration.split('/').reverse().join().localeCompare(b.initialRegistration.split('/').reverse().join()));
	// }
	//(mockRequests){
		//let t1 = 
		//return new Date(b.updated_at)-new Date(a.updated_at);
		//return mockRequests;
	//}https://www.youtube.com/watch?v=tJYBMSuOX3s
   
	tableRows(user) {
        return (
		<tr>
			 <td style={{paddingLeft: '60px'}}>{user.title}</td>
				<td style={{paddingLeft: '60px'}}>{user.status}</td>
				<td style={{paddingLeft: '60px'}}>{user.created_at}</td>
				<td style={{paddingLeft: '60px'}}> {user.updated_at}</td>
				<td style={{paddingLeft: '60px'}}>
                    <Link to={{
                        pathname: "/Delete",
                        id: user.id
                    }}>
                        Delete
                    </Link>
					
					
					<button onClick={this.deleteRow(user.id)}>click me </button>
				</td>
		</tr>
        );
    }
	 //deletedata(){
		//const items = this.state.user.filter(item => item.id !== itemId);
		//const items = mockRequests.splice(user,1);
		//console.log('amal');
	//}
	deleteRow= (index) =>{
		var contacts = [...this.state.user];
		contacts.splice(index, 1);
		this.setState({contacts});
	  }
		 render() {
			  return (
				 <table className="table-striped table-hover" data-pagination="true">
						<label>
							Filter by Status:
							<select>
							  <option value="All">All</option>
							  <option value="Approved">Approved</option>
							  <option selected value="Pending">Pending</option>
							  <option value="Denied">Denied</option>
							</select>
						</label>
					
					{this.tableHeader()}
					{this.tableData()}
				</table>
             );
		 }
}

//const Requests = () => "Your code goes here!";

//console.log('asasas');


console.log(mockRequests);

export default Requests;
