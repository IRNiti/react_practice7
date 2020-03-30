import React from 'react';

function UserRow(props) {
  	const gamesDisplay = (props.hideGames ? '\\*' : props.user.games)
	return(
    	<p>
      		{props.user.username} has played {gamesDisplay} games
      	</p>
    )
}

export default UserRow;