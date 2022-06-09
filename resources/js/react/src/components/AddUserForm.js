import React, { useState } from 'react';
import $ from 'jquery';

const AddUserForm = props => {

	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	const handleCancelClick = () => {
        $("#exampleModal2").modal('hide');;
    }

	return (
		<>
		<div className="content-wrapper">
			<section className="content">
				<div className="container-fluid">
					<form className="form-horizontal mt-2" onSubmit={event => { 
						event.preventDefault()
						if (!user.name || !user.username) return
						props.addUser(user)
						setUser(initialFormState)
						}}>
							<div className="form-group row">
								<div className="col-sm-12 col-md-4 col-lg-4 col-form-label">
									<label className="mx-3">Name</label>
								</div>
								<div className="col-sm-12 col-md-6">
									<input type="text" name="name" value={user.name} onChange={handleInputChange} />
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-12 col-md-4 col-lg-4 col-form-label">
									<label className="mx-3">Username</label>
								</div>
								<div className="col-sm-12 col-md-6">
									<input type="text" name="username" value={user.username} onChange={handleInputChange} />
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-12 col-md-4 col-lg-4 col-form-label">
									
								</div>
								<div className="col-sm-12 col-md-6">
									<button className="btn btn-sm add-btn" onClick={handleCancelClick}>Add new User</button>
								</div>
							</div>
					</form>
					
				</div>
			</section>
		</div>
		</>
	)
}

export default AddUserForm