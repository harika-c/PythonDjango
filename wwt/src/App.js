import './App.css';
import HomePage from './frontend/HomePage';
import AddDataPage from './frontend/AddDataPage';
import Edit from './frontend/Edit';
import A from './frontend/A';
import { BrowserRouter as Router ,Route, Switch} from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
        <header>
          
          {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link> */}
        </header>
      <div className="App-header">
        <div className="adddatapage">
          <AddDataPage/>
        </div>
        
        <HomePage/>
        <Router>
          <Switch>
            <Route path="/kl" component={A}/>
          </Switch>

        </Router>
        
      </div>
    </div>
  );
}

export default App;
