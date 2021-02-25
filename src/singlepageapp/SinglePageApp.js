import {BrowserRouter as Router,Route ,Switch,Link} from 'react-router-dom';

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ContactUsPage from './ContactUsPage';
import TermsNConditionsPage from './TermsNConditionsPage';
import Calculate from './Calculate';

function SinglePageApp(){
    return (
        <div className="app_container">
                <Router>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/contactuspage">ContactUs</Link>
                    <Link to="/termsandconditions">Terms & Conditions</Link>
                    <Link to="/calculate">Calculate</Link>

                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/register" component={RegisterPage}></Route>
                    <Route path="/login" component={LoginPage}></Route>
                    <Route path="/contactuspage" component={ContactUsPage}></Route>
                    <Route path="/termsandconditions" component={TermsNConditionsPage}></Route>
                    <Route path="/calculate" component={Calculate}></Route>
                </Router>
        </div>
    )    
}

const HomePage=()=>{
    return (
        <div>
            Home Page
            </div>
    )
}


export default SinglePageApp;