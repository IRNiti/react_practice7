import React from 'react';

function ErrorMessage(props){
  const message = (props.showMessage ? 'A user with this username already exists. Please choose something else!' : '')
  return(
  	<p>{message}</p>
  )

}

export default ErrorMessage;