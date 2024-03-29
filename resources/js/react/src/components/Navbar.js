import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="main-header navbar navbar-expand navbar-dark ml-0">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src="http://172.16.1.250/assets/img/7g-fuse.svg" className="logo" alt="7gfuse" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/codeigniter-react-frontend-master/">Form</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/codeigniter-react-frontend-master/table">Table</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/codeigniter-react-frontend-master/welcome">Crud</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/codeigniter-react-frontend-master/edit_table">Editable</Link>
                        </li>
                        <div className="dropdown nav-item">
                            <div className="dropdown">
                                <button className="btn nav-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link className="dropdown-item" to="#">Action</Link>
                                    <Link className="dropdown-item" to="#">Another action</Link>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </div>
                            </div>
                        </div>
                        <li className="nav-item">
                            <Link className="nav-link" to="/codeigniter-react-frontend-master/example">UserTable</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/codeigniter-react-frontend-master/number_sum">NumberSum</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

