import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {
    state = {
        username: 'Giorgio'
    };

    usernameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        });
    };

    render () {
        const inputStyle = {
            border: '5px dotted #999',
            borderRadius: '3',
            display: 'inline-block',
            textAlign: 'center',
            alignSelf: 'center'
        };
        return (
            <div className="App">
                <UserOutput username={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserInput change={this.usernameChangeHandler} value={this.state.username} style={inputStyle}/>
            </div>
        );
    }
}

export default App;
