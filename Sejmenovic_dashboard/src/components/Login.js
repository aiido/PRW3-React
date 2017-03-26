import React from 'react';

// component for the login
// you can't use it for now
export default class Login extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <p className="notice">It's not functional for the moment.</p>

                <h1>Login right here</h1>
                <p>Enter your pseudo and your password in the right fields. </p>

                <li>
                    <label className="col-2 col-form-label">Pseudo :</label>
                    <input className="form-control" type="text" value="Reactor" id="example-text-input"/>
                </li>
                <li>
                    <label className="col-2 col-form-label">Password :</label>
                    <input className="form-control" type="text" value="123..." id="example-text-input"/>
                </li>
                <button type="submit" className="btn btn-success">Submit</button>
            </div>
        )
    }
}
