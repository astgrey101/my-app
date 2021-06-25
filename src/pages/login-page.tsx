import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'

interface LoginPageProps {
    isLoggedIn: boolean
    onLogin: any
}

const LoginPage: FC<LoginPageProps> = ({isLoggedIn, onLogin}) => {

    if (isLoggedIn) {
      return <Redirect to="/"/>;
    }
  
    return (
      <div className="jumbotron">
        <p>Login to see secret page!</p>
        <button
          className="btn btn-primary"
          onClick={onLogin}>
          Login
        </button>
      </div>
    );
  };
  
  export default LoginPage;