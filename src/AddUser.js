import React from 'react';

class AddUser extends React.Component {
  	state = {
    	firstName : '',
      	lastName : '',
      	username : '',
      	buttonDisabled : true
    }

	handleFieldChange = (event) => {
      	const field = event.target.name
    	this.setState(
          {[field] : event.target.value},
          () => {
          	const disabled = this.state.firstName === '' || this.state.lastName === '' || this.state.username === '';
            this.setState(
              {buttonDisabled: disabled}
            )
          }
        )
    }

	handleAddUser = (event) => {
    	this.props.addUserToList(event, this.state.firstName, this.state.lastName, this.state.username);
    }

	render(){
    	return(
        	<form>
          		<input type='text' name='firstName' value={this.state.firstName} onChange={this.handleFieldChange}/>
      			<input type='text' name='lastName' value={this.state.lastName} onChange={this.handleFieldChange}/>
				<input type='text' name='username' value={this.state.username} onChange={this.handleFieldChange} />
				<button disabled={this.state.buttonDisabled} onClick={this.handleAddUser}>AddUser</button>
          	</form>
        )
    }
}

export default AddUser;