import React from 'react';


class SideBar extends React.Component{
    render(){
        return(
            <div className="col-sm-3 col-md-2  sidebar">
              <ul className="nav nav-sidebar">
                <li className={(this.props.highlight==="Overview" ? 'active':"")}><a href="/">Overview <span className="sr-only">(current)</span></a></li>
              </ul>
              <ul className="nav nav-sidebar">
                <li className={(this.props.highlight==="Projects" ? 'active':"")}><a href="/projects">Projects</a></li>
                <li className={(this.props.highlight==="Teams" ? 'active':"")}><a href="/teams">Teams</a></li>
                <li className={(this.props.highlight==="Employees" ? 'active':"")}><a href="/employees">Employees</a></li>
              </ul>
            </div>

        );
    }
}

export default SideBar;