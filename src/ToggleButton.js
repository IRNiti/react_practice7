import React from 'react';

function ToggleButton(props){
  	const buttonText = (props.hideGames ? 'Show Games' : 'Hide Games')
	return(
    	<button onClick={props.handleToggle}>{buttonText}</button>
    )
}

export default ToggleButton;