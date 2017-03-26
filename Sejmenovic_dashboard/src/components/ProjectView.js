import React from 'react';
// import the element Axios to
import Axios from 'axios';

// component for the page projects
export default class ProjectView extends React.Component {

    // set the state with a table of projects
    constructor() {
        super();
        this.state = {
            project: null
        }
    }

    // Make the get to the project informations
    componentWillMount() {
        //
        const id = this.props.params.id;
        Axios.get(`http://localhost:23000/api/projects/${id}`).then((result) => {
            this.setState({project: result.data});
        }).catch((error) => {
            console.error('An error occured', error);
        });
    }

    render() {

        const project = this.state.project;
        /*
        if the project is null then show loading
        it's important because it takes time to charge
        we can make a better loading, like a gif
        */
        if(!project){
            return <p>Loading...</p>;
        }
        // return all the projects with their different values
        return (
            <div className="col-md-3">
                <h3>{project.title}</h3>

                <p><strong>Description of the project :</strong> {project.description}</p>
                <p><strong>Deadline :</strong> {project.deadline}</p>
                <p><strong>Status :</strong> {project.status}</p>
                <p><strong>Number of participants :</strong> {project.nbWorker}</p>
                <p>{project.tags}</p>
            </div>
        );
    }

}