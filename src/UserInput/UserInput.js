import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.change} value={props.value} style={props.style}/>
        </div>
    )
};

export default UserInput;
