import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser';
import UserList from './UserList';
import ErrorMessage from './ErrorMessage';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  
  state = {
	users : [{
    	'firstName': 'Raluca',
      	'lastName': 'Niti',
      	'username': 'rniti',
      	'games': 0
    },
    {
    	'firstName': 'Dan',
      	'lastName': 'Crisan',
      	'username': 'corgi',
      	'games': 3
    }],
    error: false
  }

  handleAddUser = (event, firstName, lastName, username) => {
    event.preventDefault();
    
    const duplicate = this.state.users.filter((user) => (user.username === username));
    
    if(duplicate.length !== 0){
      this.setState({
      	error: true
      })
    } else {
    	const user = {
          'firstName': firstName,
          'lastName': lastName,
          'username': username,
          'games': 0
    	}
    
      this.setState((prevState) => ({
          users: [...prevState.users, user],
          error: false
      }))
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<ErrorMessage showMessage={this.state.error}/>
    	<AddUser addUserToList={this.handleAddUser}/>
    	<UserList users={this.state.users}/>
      </div>
    );
  }
}

export default App;
