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

                    </Switch>
                </Router>
            </div>
    </Provider>
    )
}

 
export default App;