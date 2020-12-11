import './App.css';
import React, { useEffect } from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
// import Profile from './components/Profile';
import { Link} from 'react-router-dom';

function App() {
  
  return (
    
    <div className="app">
      <header className="app-header">
      <Link to ="/login">
        
        <div className="header__option">
          <span>Click</span>                
        </div>
        
      </Link>
      </header>
      
      
    </div>
   
  );
}

export default App;
