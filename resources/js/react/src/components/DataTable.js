
import React, { useEffect, useState } from "react";
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

function DataTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        fetch("./data.json").then(
            function(res){
            return res.json()
            }).then(function(data){
            // store Data in State Data Variable
            console.log(data);
            setData(data)
            }).catch(
            function(err){
                console.log(err, ' error')
            }
        )
  
    };

   useEffect(() => {
        // $("#example2").DataTable();
        setTimeout(()=>{
          $("#example2").DataTable();
        },100)
    }, [])

    return (
        <div className="content-wrapper">
            <section className="content">
                <div className="container-fluid">
                    <div className="card mt-4-new table-card">
                        <div className="card-header">
                            <div>
                                <h3 className="card-title">
                                    Route Table
                                </h3>
                            </div>
                        </div>
                        
                        <div className="card-body pt-1">
                            <table id= "example2" className="table-sm table-hover table-advance table-condensed table-header-fixed no-footer w-100 dt-responsive pt-2">
                                <thead>
                                    <tr>
                                        <th>Network</th>
                                        <th>Target</th>
                                        <th>IP Gateway</th>
                                        <th>Metric</th>
                                    </tr>
                                </thead>
                                <tbody>
                
                                {data &&
                                    data.map(data => (
                                    <tr>
                                        <td>{data.device}</td>
                                        <td>{data.dst}</td>
                                        <td>{data.gateway}</td>
                                        <td>{data.metric}</td>
                                    </tr>           ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
}
export default DataTable;  