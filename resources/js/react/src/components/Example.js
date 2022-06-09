import React, { useState } from 'react'
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import UserTable from './UserTable';
import Swal from 'sweetalert2';


const Example = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Ali', username: 'root' },
		{ id: 2, name: 'Alia', username: 'alia' },
		{ id: 3, name: 'Zainab', username: 'zainab' },
	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
	
	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ]);
	}

	const deleteUser = id => {
		Swal.fire({
            title: 'Are you sure to delete?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonClass: 'sweet1Button',
            cancelButtonClass: 'sweet2Buttton',
            confirmButtonText: "Yes",
            cancelButtonText: "No",
        }
        ).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
  
				setEditing(false)

				setUsers(users.filter(user => user.id !== id))
  
            } else
                Swal.fire({
                    title: 'Cancelled',
                    showConfirmButton: false,
                    showCancelButton: true,
                    cancelButtonClass: 'sweet1Button',
                    cancelButtonText: "Ok",
                    icon: 'error'
                })
  
        })
	
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		
		<div className="container">
			<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
			<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Users</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<EditUserForm editing={editing} setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/>
						</div>
					</div>
				</div>
			</div>
			<div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">Users</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<AddUserForm addUser={addUser} />
					</div>
				
					</div>
				</div>
			</div>
			
		</div>
	)
}

export default Example