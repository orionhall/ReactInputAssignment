import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Your username is:</p>
            <p>{props.username}</p>
        </div>
    )
};

export default UserOutput;
