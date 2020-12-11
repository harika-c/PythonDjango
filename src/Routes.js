import React from 'react';
// import { BrowserRouter as Router , Route, Switch ,Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch ,Link} from 'react-router-dom';
import App from './App';

import HomePage from './components/HomePage';
import LoginButton from './components/LoginButton';
import LoginPage from './components/LoginPage';
import SignUp from './SignUp';
import Login from './SignIn';
function Routes() {
    return (
        <div className="Routes">
            
                <Router>
                    <Switch>
                        
                        <Route path="/userpage"><LoginPage /></Route>
                        <Route path="/login" > <LoginButton /> </Route>
                        <Route path="/signup"><SignUp/></Route>
                        <Route path="/signin"><Login/></Route>
                        <Route path="/" > <App /> </Route>
                        
                        
                    </Switch>
                </Router>
            
        </div>
    )
}

export default Routes
