import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import Home from './Home/Home';
import Books from './Books/Books';

function App() {
  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', left: '48%', top: '50%',
        transform: 'translate(-48%, -50%)'
      }}>
        <div className='container p-3 rounded-3 shadow-lg bg-light'>
          <Route path='/'>
            <Redirect to='/signin'/>
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/books'>
            <Books/>
          </Route>
        </div>
      </div>
    </React.Fragment >
  );
}

export default App;
