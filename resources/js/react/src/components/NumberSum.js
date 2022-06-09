import React, { Component } from 'react';
import { render } from 'react-dom';

export default class NumberSum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:  [{
                firstName: "John",
                lastName: "Erwin",
                email: "john@gmail.com",
                salary:8000
            },
            {
                firstName: "Ram",
                lastName: "Kumar",
                email: "john@gmail.com",
                salary:5000
            }]
        }
    }
    render() {
        const tableBody=this.state.data.map((item =>
        <tr key={item.firstname}>
            <td >{item.firstName}</td>
            <td >{item.lastName}</td>
            <td >{item.email}</td>
            <td>{item.salary}</td>
        </tr>
        ));
        const total=(this.state.data.reduce((total,currentItem) =>  total = total + currentItem.salary , 0 ));
        return (
            <>
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <div className="card mt-4-new table-card">
                            <div className="card-header">
                                <div>
                                    <h3 className="card-title">
                                        Users Information
                                    </h3>
                                </div>
                            </div>
                            <div className="card-body pt-1">
                                <table id= "example2" className="table-sm table-hover table-advance table-condensed table-header-fixed w-100 dt-responsive pt-2">
                                    <thead>
                                        <tr>
                                            <th>first</th>
                                            <th>last</th>
                                            <th>Email</th>
                                            <th>Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableBody}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="3" className="text:center">Total:</td>
                                            <td>{total}</td>
                                        </tr>  
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </>
        )
    } 
}
