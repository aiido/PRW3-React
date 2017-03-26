import React from 'react';

// component for the homepage
export default class Home extends React.Component {

    /*
     ----------------
     Homepage
     ----------------
     Returns just a simple content with explication of the project
     */
    render() {
        return (
            <div className="container-fluid">
                <h1>React - Dashboard</h1>
                <p>Welcome on the application Dashboard made with React.js.
                    You can navigate to the different pages with the menu. The pages already
                made are : Home and Projects. </p>
                <p>In the view project, you can find the list of projects.</p>
            </div>
        )
    }
}
