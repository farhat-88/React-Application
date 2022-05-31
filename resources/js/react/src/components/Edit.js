import React, { useEffect, useState } from 'react'
import array from './array';
import { Link} from 'react-router-dom';



function Edit() {

	// Here usestate has been used in order
	// to set and get values from the jsx
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const[id,setid] = useState('');

	// used for navigation with logic in javascript
	//let history = useNavigate()
	
	// getting an index of an entry with an id
	var index = array.map(function(e) { return e.id; }).indexOf(id);

	// function for handling the edit and
	// pushing changes of editing/updating
	const handelSubmit = (e) =>{
		e.preventDefault(); // preventing from reload
		
		let a = array[index] // getting an index of an array

		// putting the value from the input textfield and
		// replacing it from existing for updation
		a.Name = name
		a.Email = email

		// redirecting to main page
		//history('/')
	}


	// Useeffect take care that page will be rendered only once
	useEffect(() => {
		setName(localStorage.getItem('Name'))
		setEmail(localStorage.getItem('Email'))
		setid(localStorage.getItem('id'))
	}, [])

    const handleCancelClick = () => {
        props.showAlert("Unsend Data", "danger");
    }
	
return (
	<div>
        <div className="content-wrapper">
			<section className="content">
				<div className="container-fluid">
					<div className="card form-card">
						<div className="card-header">
							<div>
								<Link to ="" className="btn float-left back-button"><i className="fas fa-arrow-left"></i></Link>
								<h3 className="card-title">
									User Form 
								</h3>
 							</div>
						</div>
						<div className="card-body">
							<form className="form-horizontal mt-2" >
								<div className="col-sm-12 col-md-8">
									<div className="form-group row">
										<div className="col-sm-12 col-md-4 col-lg-4 col-form-label">
											<label className="mx-3">Full Name</label>
										</div>
										<div className="col-sm-12 col-md-6">
											<input type="text" value={name} onChange={e => setname(e.target. value)} placeholder="Enter Name"/>
										</div>
									</div>
									<div className="form-group row">
										<div className="col-sm-12 col-md-4 col-lg-4 col-form-label">
											<label className="mx-3">Email</label>
										</div>
										<div className="col-sm-12 col-md-6">
											<input type="text" placeholder="Enter your email" value={email}onChange={e => setEmail(e.target.value)} className="form-control"/>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div className="card-footer">
							<div className="card-tools">
								<button className="btn btn-sm save" ty	onClick={e => handelSubmit(e)}type="submit">
									<i className="fas fa-save"></i> Save
								</button>
								<button onClick={handleCancelClick} className="btn btn-sm cancel mr-2">
									<i className="fas fa-times p-0"></i> Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>	
)
}

export default Edit
