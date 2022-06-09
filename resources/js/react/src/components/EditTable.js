import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'


function EditTable() {
    const [rows, setRows] = useState([]);

    const [open, setOpen] = React.useState(false);
	const [isEdit, setEdit] = React.useState(false);
	const [disable, setDisable] = React.useState(true);
	const [showConfirm, setShowConfirm] = React.useState(false);
    


    const fireAlert = (i) => {
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
  
                const list = [...rows];
                list.splice(i, 1);
                setRows(list);
                setShowConfirm(false);
  
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

    // Function For adding new row object
	const handleAdd = () => {
		setRows([
			...rows,
			{
				id: rows.length + 1, firstname: "",
				lastname: "", city: "", salary: "", total: "0"
			},
		]);
		setEdit(true);
	};
//console.log(...rows);
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
		//console.log("saved : ", rows);
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

    const total = rows.reduce((total,currentRow) =>  total = parseInt(total) + parseInt(currentRow.salary) , 0 )

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
                            <table className="table-sm table-hover table-advance table-condensed table-header-fixed w-100 dt-responsive pt-2">
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>City</th>
                                        <th>Salary</th>
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
                                                    {/*onChange={(e) => handleInputChange(e, i)} */}
                                                    <td padding="none">
						                                <input className = "form-control" value={row.salary} name="salary" onChange={(e) => handleInputChange(e, i)} />
                                                    </td>
                                                    <td padding="none"></td>
                                                </>
                                                ) : (
                                                <>
                                                    <td>{row.firstname} </td>
                                                    <td>{row.lastname} </td>
                                                    <td> {row.city}</td>
                                                    <td> {row.salary}</td>
                                                    <td>
                                                        <button className="mr10 btn btn-sm cancel" onClick={() => fireAlert(i)}>Delete
					                                </button>
                                                    </td>
                                                </>
					                        )}
					                    </tr>

				                    );
			                    })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                    {isEdit ? (
                                        <>
                                        <td colSpan="3" className="text:center">Total:</td>
                                        <td>0</td>
                                        </>
                                    ) : (
                                        <>
                                          <td colSpan="3" className="text:center">Total:</td>
                                            <td>{total}</td>
                                        </>
                                    )}
                                    </tr>  
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default EditTable