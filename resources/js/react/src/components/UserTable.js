import React from 'react'

const UserTable = props => (
    <>
    <div className="content-wrapper">
        <section className="content">
            <div className="container-fluid">
                <div className="card mt-4-new table-card">
                    <div className="card-header">
						<div>
							<h3 className="card-title">
								Users Table
							</h3>
						</div>
                        <div className="card-tools">
							<button className="btn add-btn" data-toggle="modal" data-target="#exampleModal2">Create</button>
						</div>
					</div>
                    <div className="card-body pt-1">
                        <table id= "example2" className="table-sm table-hover table-advance table-condensed table-header-fixed no-footer w-100 dt-responsive pt-2">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.users.length > 0 ? (
                                props.users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>
                                        <button type="button" className="btn btn-sm edit" data-toggle="modal" data-target="#exampleModal" onClick={() => {props.editRow(user)}}>   Edit
                                        </button>
                                        <button onClick={() => props.deleteUser(user.id)} className="btn btn-sm cancel"> Delete</button>
                                    </td>
                                </tr>
                                ))
                                ) : (
                                <tr>
                                    <td colSpan={3}>No users</td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
    
 
)

export default UserTable