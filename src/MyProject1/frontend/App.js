import {React,useEffect} from 'react';
import Nav from './Nav';
import SearchClothes from './postcalls/SearchClothes';
import SearchElectronicDevices from './postcalls/SearchElectronicDevices';
import SearchFruitsVegetables from './postcalls/SearchFruitsVegetables';
import SearchHomeUtensils from './postcalls/SearchHomeUtensils';
import SearchGroceries from './postcalls/SearchGroceries';
import HomePage from './postcalls/HomePage';

import thunk from 'redux-thunk';
import { BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import {applyMiddleware, createStore } from 'redux';
import {Provider, useSelector,connect} from 'react-redux';
import Multiple_Reducer from './redux/reducers/Multiple_Reducer';
import CartPage from './postcalls/CartPage';
import CheckoutPage from './postcalls/CheckoutPage';
const store=createStore(Multiple_Reducer,applyMiddleware(thunk));

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
                    </Switch>
                </Router>
            </div>
    </Provider>
    )
}

 
export default App;