import React from 'react';
// import the element Axios to interact with the datas
import Axios from 'axios';
import {Link} from 'react-router';

// component for the page projects
export default class Projects extends React.Component {

    // set the state with a table of projects
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    /*
     ----------------
     Get the projects
     ----------------
     Make the get to the projects
     Gets all the projects and put it in the state
     */
    componentWillMount() {
        var self = this;
        Axios.get('http://localhost:23000/api/projects').then((results) => {
            self.setState({projects: results.data});
        }).catch((error) => {
            console.error('An error occured', error);
        });
    }

    /*
     ----------------
     Shows the list of projects
     ----------------
     maps the projects to make a list
     first return : set the information of the project
     second return : puts the list of projects in a global div
     */
    render() {
        // set the this.state like the projects so don't need to always write "this.state"
        const {projects} = this.state;
        // do a foreach on the projects
        var projectList = projects.map((project, index) => {
            // return all the projects with their different values
            return (
                <div key={index} className="col-md-2">
                    <h3>{project.title}</h3>

                    <p><strong>Description of the project :</strong> {project.description}</p>
                    <p><strong>Deadline :</strong> {project.deadline}</p>
                    <p><strong>Status :</strong> {project.status}</p>
                    <p><strong>Number of participants :</strong> {project.nbWorker}</p>
                    <Link to={`/Projects/${project.id}`}>Details...</Link>
                </div>
            );
        });

        // construct the div around the page project
        return (
            <div className="container-fluid">
                <h1>Visualize the list of projects here</h1>
                <div>
                    <button type="submit" className="btn btn-success">Create a project</button>
                </div>
                {/*give the list of projects */}
                {projectList}
            </div>
        )
    }

}