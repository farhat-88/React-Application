import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const handleCancelClick = () => {
    $("#exampleModal").modal('hide');;
  }

  return (
    <>
    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
        <form onSubmit={event => { event.preventDefault()
          props.updateUser(user.id, user)}}>
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
									<button className="btn btn-sm add-btn" onClick={handleCancelClick}>Update User</button>
								</div>
							</div>
          </form>
        </div>
      </section>
    </div>
    

      {/* <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button> */}
  
    </>
  )
}

export default EditUserForm