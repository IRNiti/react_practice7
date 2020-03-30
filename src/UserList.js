import React from 'react';
import UserRow from './UserRow';
import ToggleButton from './ToggleButton';

class UserList extends React.Component {
  
  state = {
  	hideToggle : false
  }

  toggleGamesShow = () => {
  	this.setState((prevState) =>({
    	hideToggle : !prevState.hideToggle
    }))
  }

	render(){
      return(
      	<div>
         	{this.props.users.map((dbuser) => (
      			<UserRow key={dbuser.username} user={dbuser} hideGames={this.state.hideToggle}/>
      		))}
        	<ToggleButton hideGames={this.state.hideToggle} handleToggle={this.toggleGamesShow}/>
        </div>
      )
    }
}

export default UserList;

