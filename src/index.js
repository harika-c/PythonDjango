import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './weather.component/App';
// import App from './redux/App';
// import App from './functional_context_api/App';
import App from './MyProject1/frontend/App';
// import App from './redux_tutorial/App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { AuthProvider } from './Auth';
import Routes from './Routes';
import ResultComponent from './calculator/ResultComponent';
// const domain=process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId=process.env.REACT_APP_AUTH0_CLIENT_ID;
ReactDOM.render(
  
  // domain={domain}
  // clientId={clientId}
  // redirectUri={window.location.origin}>

  <App />,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
