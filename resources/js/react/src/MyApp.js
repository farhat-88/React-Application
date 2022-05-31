import React,  { useState }  from 'react';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Form from './components/Form';
import DataTable from './components/DataTable';
import Alert from './components/Alert';
import Create from './components/Create';
import Edit from './components/Edit';
import EditTable from './components/EditTable';
import Example from './components/Example';
import './MyApp.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

	const [alert, setAlert] = useState(null);

	const showAlert = (message, type)=>{
	    setAlert({
	      msg: message,
	      type: type
	    })
	    setTimeout(() => {
	        setAlert(null);
	    }, 1500);
	}
	
		return (
			
			<React.Fragment>
			    <Router>
				<Navbar  />
				<Alert alert={alert}/>
				<div className="container my-3">
				<Switch>
			
				
				<Route exact path="/codeigniter-react-frontend-master/">
					<Form showAlert={showAlert}/>
				</Route>
				<Route exact path="/codeigniter-react-frontend-master/table">
					<DataTable />
				</Route>
				<Route exact path="/codeigniter-react-frontend-master/welcome">
					<Welcome showAlert={showAlert}/>
				</Route>
				<Route exact path="/codeigniter-react-frontend-master/create">
					<Create showAlert={showAlert}/>
				</Route>
				<Route exact path="/codeigniter-react-frontend-master/edit">
					<Edit showAlert={showAlert}/>
				</Route>
				<Route exact path="/codeigniter-react-frontend-master/edit_table">
					<EditTable showAlert={showAlert}/>
				</Route>
				<Route exact path="/codeigniter-react-frontend-master/example">
					<Example showAlert={showAlert}/>
				</Route>
				</Switch>
				</div>
				</Router>
				
				
			</React.Fragment>
		);
	
}

export default App;
