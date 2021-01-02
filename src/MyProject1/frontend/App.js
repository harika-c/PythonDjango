import React from 'react';
import Nav from './Nav';
import Animations from './Animations';
import Insects from './Insects';
import Flowers from './Flowers';
import Grass from './Grass';

import { BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import {createStore } from 'redux';
import {Provider, useSelector} from 'react-redux';
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
    const state = useSelector(state => state.flower)
    return (
        <div>
            
            {state.flow!=undefined? state['flow'].map(a=>(<div>{a}</div>)): "no flower data"}
            {state.anim!=undefined? state['anim'].map(a=>(<div>{a}</div>)): "no animation data"}
            {state.inse!=undefined? state['inse'].map(a=>(<div>{a}</div>)): "no insect data"}
            {state.gras!=undefined? state['gras'].map(a=>(<div>{a}</div>)): "no grass data"}
            </div>
    )
}
export default App;