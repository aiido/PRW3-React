import React from 'react';
// import the element Axios to interact with the datas
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

    // Make the get to the project information
    componentWillMount() {
        //
        const id = this.props.params.id;
        Axios.get(`http://localhost:23000/api/projects/${id}`).then((result) => {
            this.setState({project: result.data});
        }).catch((error) => {
            console.error('An error occured', error);
        });
    }

    /*
     ----------------
     Details of a project
     ----------------
     if the project is null then show loading
     it's important because it takes time to charge
     you can make a better loading style with a gif
     */
    render() {
        const project = this.state.project;

        if (!project) {
            return <p>Loading...</p>;
        }

        // list of tags
        var tagList = project.tags.map((tag, index) => {
            return (
                <div key={index} className="div-tags">
                    <p className="btn btn-info">{tag}</p>
                </div>
            );
        });

        // return all the projects views with their different informations
        return (
            <div className="col-md-12">
                <h3>{project.title}</h3>

                <p><strong>Description of the project :</strong> {project.description}</p>
                <p><strong>Deadline :</strong> {project.deadline}</p>
                <p><strong>Status :</strong> {project.status}</p>
                <p><strong>Number of participants :</strong> {project.nbWorker}</p>

                <div className="div-manager">
                    <h4>Project manager informations</h4>
                    <p><strong>Name :</strong> {project.projectManager.firstname} {project.projectManager.lastname}</p>
                    <p><strong>Role :</strong> {project.projectManager.role}</p>
                    <p><strong>e-mail :</strong> {project.projectManager.email}</p>
                </div>

                {/* give the list of tags */}
                {tagList}
            </div>
        );
    }
}