require('styles/App.css');

import React from 'react';

// with this element, you need to replace the <a> with <Link>
import {Link} from 'react-router';

// component for the complete application
class AppComponent extends React.Component {
    render() {
        return (
            <div className="index">
                <div className="notice">React - Dashboard</div>
                <div>
                    {/* menu */}
                    <ul className="list-group">
                        <li><Link className="list-group-item justify-content-between" to="/">Home</Link></li>
                        <li><Link className="list-group-item justify-content-between" to="/Projects">Projects</Link></li>
                        <li><Link className="list-group-item justify-content-between" to="/Login">Login</Link></li>
                    </ul>

                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AppComponent;
