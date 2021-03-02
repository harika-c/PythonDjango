import {React,useEffect} from 'react';
import Nav from './Nav';
import SearchClothes from './postcalls/SearchClothes';
import SearchElectronicDevices from './postcalls/SearchElectronicDevices';
import SearchFruitsVegetables from './postcalls/SearchFruitsVegetables';
import SearchHomeUtensils from './postcalls/SearchHomeUtensils';
import SearchGroceries from './postcalls/SearchGroceries';
import HomePage from './postcalls/HomePage';
import Login from './login/Login';
import SignUp from './login/SignUp';

import { BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import {Provider, useSelector,connect} from 'react-redux';
import CartPage from './postcalls/CartPage';
import CheckoutPage from './postcalls/CheckoutPage';
import store from './Store';
import MyProfile from './login/MyProfile';
import Favourites from './login/Favourites';
import SavedAddress from './login/SavedAddress';
import ChangePassword from './login/ChangePassword';


function App(){
    
    return(
        <Provider store={store}>
            <div>
                
                <Router>
                    <Nav/>
                    <Switch>
                    
                        <Route path="/" exact  component={HomePage}/>
                        <Route path="/clothes" component={SearchClothes}/>
                        <Route path="/electronics" component={SearchElectronicDevices}/>
                        <Route path='/groceries' component={SearchGroceries}/>
                        <Route path='/fruitsandvegs' component={SearchFruitsVegetables}/>
                        <Route path='/homeutensils' component={SearchHomeUtensils}/>
                        <Route path='/cart' component={CartPage}/>
                        <Route path='/checkout' component={CheckoutPage}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={SignUp}/>
                        <Route path='/myprofile' component={MyProfile}/>
                        <Route path='/savedaddress' component={SavedAddress}/>
                        <Route path='/changepassword' component={ChangePassword}/>
                        <Route path='/favourites' component={Favourites}/>
                    </Switch>
                </Router>
                <div>
                    <link rel='manifest' href="%PUBLIC_URL%/manifest.json"/>
                    <link rel='manifest' href="%PUBLIC_URL%/styles/font.css"/>
                    <link rel='manifest' href="%PUBLIC_URL%/styles/font-awesome.min.css"/>
                    <link rel='manifest' href="%PUBLIC_URL%/styles/bootstrap-grid.css"/>
                   
                </div>
            </div>
    </Provider>
    )
}

 
export default App;