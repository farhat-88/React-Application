import React, { useState } from 'react';
import array from './array';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
// import Array from './Array';

function Create() {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	//let history = useNavigate();


	// Function for creating a post/entry
    const handelSubmit = (e) =>{
        e.preventDefault();  // Prevent reload
  
        const ids = uuid() // Creating unique id
        let uni = ids.slice(0,8) // Slicing unique id
  
        // Fetching a value from usestate and 
        // pushing to javascript object
        let a = name, b=email
        array.push({id:uni,Name:a,Email:b})
  
  
       // Redirecting to home page after creation done
      // history('/codeigniter-react-frontend-master/')
         
    }

	const handleCancelClick = () => {
        props.showAlert("Unsend Data", "danger");
    }

	return(
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
											<input type="text" placeholder="Enter your name.." onChange={e => setName(e.target.value)} className="form-control"/>
										</div>
									</div>
									<div className="form-group row">
										<div className="col-sm-12 col-md-4 col-lg-4 col-form-label">
											<label className="mx-3">Email</label>
										</div>
										<div className="col-sm-12 col-md-6">
											<input type="text" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} className="form-control"/>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div className="card-footer">
							<div className="card-tools">
								<button onClick={e => handelSubmit(e)} className="btn btn-sm save" type="submit">
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
	)
}

export default Create



