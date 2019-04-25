import React from 'react';
import moment from 'moment';
import MainContainer from './MainContainer';

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state={
            projects: []
        }
    }

    componentDidMount(){
        fetch("https://serene-mesa-90721.herokuapp.com/projects")
        .then(res=>res.json())
        .then(returnedData=>{
            this.setState({
                projects:returnedData
            });
        }).catch(err=>{
            console.log(err);
        })
    }

    render(){
        return(
            <MainContainer sidebar="Projects">
                <h1 className="page-header">Projects</h1>
                <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.projects.map((project, index) => {
                            return (
                                <tr key ={index}>
                                    <td>{project.ProjectName}</td>
                                    <td>{project.ProjectDescription}</td>
                                    <td>{moment(project.ProjectStartDate).format('LL')}</td>
                                    <td>{(project.ProjectEndDate == null ? 'n/a' : moment(project.ProjectEndDate).format('LL'))}</td>
                                </tr>
                                );
                            })}
                    </tbody>
                </table>
                </div>
            </MainContainer>
        );
    }
}
export default Projects; 