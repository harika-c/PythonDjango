import './App.css';
import HomePage from './frontend/HomePage';
import AddDataPage from './frontend/AddDataPage';
import Edit from './frontend/Edit';

import { BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import store from './redux/Store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          
          {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link> */}
        </header>
      <div className="App-header">
        <div className="adddatapage">
          <AddDataPage/>
        </div>
        
        <HomePage/>
        
      </div>
    </div>
    </Provider>
  );
}

export default App;
