import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import Home from './Home/Home';
import Books from './Books/Books';
import AuthContext from './authContext';
import {useState} from 'react';
import SideBar from './SideBar';

function App() {
  const [uName, setUname] = useState('');
  const getUName = (data) => {
    setUname(data);
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn: true,
      userName: uName
    }}>
      <React.Fragment>
        <div style={{
          position: 'absolute', left: '48%', top: '50%',
          transform: 'translate(-48%, -50%)'
        }}>
          <div className='container p-3 rounded-3 shadow-lg bg-light'>
            <Route path='/'>
              <Redirect to='/signin' />
            </Route>
            <Route path='/signin'>
              <SignIn onSubmit={getUName}/>
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/books'>
              <Books />
            </Route>
          </div>
        </div>
      </React.Fragment >
    </AuthContext.Provider>
  );
}

export default App;
