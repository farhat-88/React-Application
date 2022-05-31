import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Form(props) {
    // react Hook For State Handler
    const [hostdata , setHostData]=useState({
      value: ''
    })

   useEffect(() => {
      fetch("./hostname.json")
        .then(res => res.json())
        .then(function(data){
         
            console.log(data)
            //setIsLoaded(true);
            setHostData(data);
          }).catch(
                function(err){
                    console.log(err, ' error')
                }
        )
    }, [])

   // const [inputValue, setInputValue] = useState(''); //for functional component
    const inputHandler = (event) => setHostData(event.target.value);

    const handleOnClick = () => {
        if (hostdata.length > 0 || hostdata.length === undefined){
            props.showAlert("Successfully Updated", "success");
        }else{
            props.showAlert("Hostname is required", "danger");
        } 
        
    }

    const handleCancelClick = () => {
        props.showAlert("Unsend Data", "danger");
    }
  
    return (
        <>
        {/* <!-- Content Wrapper. Contains page content --> */}
        <div className="content-wrapper">
        {/* <!-- Main content --> */}
        <section className="content">
            <div className="container-fluid">
                <div className="card form-card">
                    <div className="card-header">
                        <div>
                            <Link to ="" className="btn float-left back-button"><i className="fas fa-arrow-left"></i></Link>
                            <h3 className="card-title">
                                Hostname 
                            </h3>
                        </div>
                    </div>
                    <div className="card-body">
                        <form className="form-horizontal mt-2">
                            <div className="col-sm-12 col-md-8">
                            {/* {
                            // use data State Variable For Get Data Use JavaScript Map Mathod
                                hostdata? hostdata.map(
                                    function(hostdata){
                                            return (  */}
                                                <div className="form-group row">
                                                    <div className="col-sm-12 col-md-4 col-lg-4 col-form-label">
                                                        <label className="mx-3">Hostname</label>
                                                            <button className="ml-1 btn-tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" data-bs-original-title="<h6>Set the DNS (Domain Name System) name for the appliance.</h6>">  
                                                                <i className="fas fa-exclamation-circle information mt-2"></i>
                                                            </button>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6">
                                                        {/* <input type="text" name="hostname" className="form-control"  /> */}
                                                        <input type='text' className="form-control" value={hostdata.value} onChange={inputHandler} />
                                                    </div>
                                                </div>
                                            {/* )
                                            }
                                    ):""
                                }                           
                               */}
                            
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="card-tools">
                            <button onClick={handleOnClick} className="btn btn-sm save">
                                <i className="fas fa-save"></i> Save
                            </button>
                            <button onClick={handleCancelClick} className="btn btn-sm cancel mr-2">
                                <i className="fas fa-times p-0"></i> Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /.container-fluid --> */}
        </section>
        {/* <!-- /.content --> */}
    </div>
    {/* <!-- /.content-wrapper --> */}
        </>
    )
}
