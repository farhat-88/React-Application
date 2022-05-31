import React from 'react'
import array from './array'; 

import { Link } from 'react-router-dom';
  
function Welcome() {

  
	//let history = useNavigate()
  
	// You may skip this part if you're
	// using react-context api or redux
	function setID(id,name,email){
	  localStorage.setItem('id', id);
	  localStorage.setItem('Name', name);
	  localStorage.setItem('Email', email);
	}
	
	// Deleted function - functionality 
	// for deleting the entry
	function deleted(id){

		
	  var index = array.map(function(e) { return e.id; }).indexOf(id);
	  console.log(index);
	  // deleting the entry with index
	  array.splice(index,1)
	
	  // We need to re-render the page for getting 
	  // the results so redirect to same page.
	  //history('/codeigniter-react-frontend-master/welocome')
	  //window.location.reload();
	}

  return (
	
  
	<div className="content-wrapper">
		<section className="content">
			<div className="container-fluid">
				<div className="card mt-4-new table-card">
					<div className="card-header">
						<div>
							<h3 className="card-title">
								Users
							</h3>
						</div>
						<div className="card-tools">
							<Link to= "/codeigniter-react-frontend-master/create">
								<button className="btn add-btn">Create</button>
							</Link>
						</div>
					</div>
					<div className="card-body pt-1">
						<table id= "example2" className="table-sm table-hover table-advance table-condensed table-header-fixed no-footer w-100 dt-responsive pt-2">
							<thead>
								<tr>
									<th>Name</th>
									<th>Email</th>
									<th>Edit</th>
									<th>Delete</th>
								</tr>
							</thead>
							<tbody>
  								{/* Mapping though every element in the array and showing the data in the form of table */}
								{array.map((item) => {
								return(
									<tr>
										<td>{item.Name}</td>
										<td>{item.Email}</td>
										<td>
											<Link to= "/codeigniter-react-frontend-master/edit">
												<button className="add-btn" onClick={(e) =>setID(item.id,item.Name,item.Email)} >Update</button>
											</Link>
										</td>
										<td>
											<button className="cancel-btn" onClick={e => deleted(item.id)}>Delete</button>
										</td>
									</tr>
								)})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	</div>
  )
}
  
export default Welcome