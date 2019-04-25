import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

class ProjectsPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            projects:[]
        }
    }

    componentDidMount(){
        fetch("https://serene-mesa-90721.herokuapp.com/projects")
        .then(res=>res.json())
        .then(returnedData=>{
            this.setState({
                projects:returnedData,
                dataLoaded: true
            });
        }).catch(err=>{
            this.setState({ 
                dataLoaded: true
            });
        })
    }

    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Projects</h3>
                </div>
                <div className="panel-body">
                <div className="table-responsive overview-table">
                    <table className="table table-striped table-bordered">
                    <tbody>
                        {this.state.projects.map((project, index) => {
                            var daysActive = moment().diff(moment(project.ProjectStartDate), 'days');   
                                return (
                                    <tr key={index}>
                                        <td>{project.ProjectName}</td>
                                        <td>Active {daysActive} days</td>
                                    </tr>
                                    );
                                })}                    
                    </tbody>
                    </table>
              </div>
              <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
            </div>
            </div>    
        );
    }
}
export default ProjectsPanel;