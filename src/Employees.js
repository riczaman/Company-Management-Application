import React from 'react';
import moment from 'moment';
import MainContainer from './MainContainer';

class Employees extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employees:[]
        }
    }

    componentDidMount(){
        fetch("https://serene-mesa-90721.herokuapp.com/employees")
        .then(res=>res.json())
        .then(returnedData=>{
            this.setState({
                employees:returnedData
            });
        }).catch(err=>{
            console.log(err);
        })
    }

    render(){
        return(
            <MainContainer sidebar='Employees'>
            <h1 className="page-header">Employees</h1>
            <div className="table-responsive">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name & Position</th>
                        <th>Address</th>
                        <th>Phone Num</th>
                        <th>Hire Date</th>
                        <th>Salary Bonus</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map(function (employee, index) {
                        return (
                            <tr key ={index}>
                                <td>{employee.FirstName} {employee.LastName} - {employee.Position.PositionName}</td>
                                <td>{employee.AddressStreet}, {employee.AddressCity} {employee.AddressState}, {employee.AddressZip}</td>
                                <td>{employee.PhoneNum} ext:{employee.Extension}</td>
                                <td>{moment(employee.HireDate).format('LL')}</td>
                                <td>$ {employee.SalaryBonus}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>
        </ MainContainer>
        );
    }
}
export default Employees;