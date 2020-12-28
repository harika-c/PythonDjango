import React from 'react';
import Nav from './Nav';
import Animations from './Animations';
import Insects from './Insects';
import Flowers from './Flowers';
import Grass from './Grass';

import { BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import {createStore } from 'redux';
import {Provider} from 'react-redux';
import Multiple_Reducer from './redux/reducers/Multiple_Reducer';

const store=createStore(Multiple_Reducer);

function App(){
    return(
        <Provider store={store}>
            <div>
                <Router>
                    <Nav/>
                    <Switch>
                        <Route path="/" exact  component={HomePage}/>
                        <Route path="/animations" component={Animations}/>
                        <Route path="/grass" component={Grass}/>
                        <Route path='/flowers' component={Flowers}/>
                        <Route path='/insects' component={Insects}/>
                    </Switch>
                </Router>
            </div>
    </Provider>
    )
}

const HomePage =()=>{
    return (
        <div>
            Home Page 
            </div>
    )
}
export default App;