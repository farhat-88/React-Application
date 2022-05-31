import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link } from 'react-router-dom';


function EditTable() {
    const [rows, setRows] = useState([]);

    const [open, setOpen] = React.useState(false);
	const [isEdit, setEdit] = React.useState(false);
	const [disable, setDisable] = React.useState(true);
	const [showConfirm, setShowConfirm] = React.useState(false);

    // Function For adding new row object
	const handleAdd = () => {
		setRows([
			...rows,
			{
				id: rows.length + 1, firstname: "",
				lastname: "", city: ""
			},
		]);
		setEdit(true);
	};

    // Function to handle edit
	const handleEdit = (i) => {
		// If edit mode is true setEdit will
		// set it to false and vice versa
		setEdit(!isEdit);
	};

    // Function to handle save
	const handleSave = () => {
		setEdit(!isEdit);
		setRows(rows);
		console.log("saved : ", rows);
		setDisable(true);
		setOpen(true);
	};

    // The handleInputChange handler can be set up to handle
	// many different inputs in the form, listen for changes
	// to input elements and record their values in state
	const handleInputChange = (e, index) => {
		setDisable(false);
		const { name, value } = e.target;
		const list = [...rows];
		list[index][name] = value;
		setRows(list);
	};

    // Showing delete confirmation to users
	const handleConfirm = () => {
		setShowConfirm(true);
	};

    // Handle the case of delete confirmation where
	// user click yes delete a specific row of id:i
	const handleRemoveClick = (i) => {
		const list = [...rows];
		list.splice(i, 1);
		setRows(list);
		setShowConfirm(false);
	};

    // Handle the case of delete confirmation
	// where user click no
	const handleNo = () => {
		setShowConfirm(false);
	};

    return (
        <div className="content-wrapper">
            <section className="content">
                <div className="container-fluid">
                    <div className="card mt-4-new table-card">
                        <div className="card-header">
                            <div>
                                <h3 className="card-title">
                                    Editable Table
                                </h3>
                            </div>
                            <div className="card-tools">
                            {isEdit ? (
			                    <div className="display_btn">
				                    <button className= "btn add-btn" onClick={handleAdd}>ADD</button>
				                    {rows.length !== 0 && (
                                        <div> 
                                        {disable ? (
                                            <button className= "btn add-btn" disabled onClick={handleSave}>SAVE</button>
                                        ) : (
                                            <button className= "btn add-btn" onClick={handleSave}> SAVE</button>
                                        )}
                                        </div>
				                    )}
			                    </div>
			                ) : (
			                    <div className="display_btn">
				                    <button className= "btn add-btn" onClick={handleAdd}> ADD </button>
                                    {rows.length !== 0 && (
                                        <div> 
                                        {disable ? (
                                            <button className="btn add-btn" onClick={handleEdit}>EDIT</button>
                                        ) : (
                                            <button className= "btn add-btn" onClick={handleEdit}>EDIT</button>
                                        )}
                                        </div>
				                    )}
				                    
                                </div>
                            )}
                            </div>
                        </div>
                        <div className="card-body pt-1">
                            <table className="table-sm table-hover table-advance table-condensed table-header-fixed no-footer w-100 dt-responsive pt-2">
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>City</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
			                        {rows.map((row, i) => {
			                        return (
				                        <tr> 
                                            {isEdit ? (
                                                
					                            <>
						                            <td padding="none">
						                                <input className="form-control" value={row.firstname} name="firstname" onChange={(e) => handleInputChange(e, i)}/>
                                                    </td>
                                                
						                            <td padding="none">
						                                <input className = "form-control" value={row.lastname} name="lastname" onChange={(e) => handleInputChange(e, i)}/>
	                                                </td>
						                            <td padding="none">
						                                <select  className="form-control" name="city" value={row.city} onChange={(e) => handleInputChange(e, i)}>
                                                            <option value="">Please Choose</option>
		                                                    <option value="Karachi">Karachi</option>
                                                            <option value="Punjab">Punjab</option>
                                                            <option value="Islamabad">Islamabad</option>
                                                        </select>
						                            </td>
                                                    <td padding="none"></td>
                                                </>
                                                ) : (
                                                <>
                                                    <td>{row.firstname} </td>
                                                    <td>{row.lastname} </td>
                                                    <td> {row.city}</td>
                                                    <td>
                                                        <button className="mr10 btn btn-sm cancel" onClick={() => handleRemoveClick(i)}>Delete
					                                </button>
                                                    </td>
                                                </>
					                            )}
					                            {/* {isEdit ? (
					                                <button className="mr10" onClick={handleConfirm}>Delete
					                                </button>
					                            ) : (
                                                <button className="mr10" onClick={handleConfirm}> Delete</button>
					                            )} */}
					                            {/* {showConfirm && (
					                                <>
						                                <div className= "card"  onClose={handleNo} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                                                            <div className="card-header" id="alert-dialog-title"> {"Confirm Delete"}
                                                            </div>
						                                    <div className = "card-body"> 
                                                                <span id="alert-dialog-description">
                                                                    Are you sure to delete
                                                                </span>
						                                    </div>
						                                    <div className= "card-footer">
							                                    <button onClick={() => handleRemoveClick(i)} color="primary" autoFocus> Yes </button>
							                                    <button onClick={handleNo} color="primary" autoFocus> No </button>
						                                    </div>
						                                </div>
					                                </>
					                            )} */}
				                            </tr>
				                   
			                        );
			                    })}
		                    </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default EditTable