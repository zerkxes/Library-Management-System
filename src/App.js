import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import Home from './Home/Home';
import Books from './Books/Books';
import AuthContext from './authContext';
import { useState, useContext } from 'react';
import AddUser from './Home/AddUser';
import AddBooks from './Books/AddBooks';
import SignOut from './signOut/SignOut';
function App() {
  const [uName, setUname] = useState('');
  const [role, setRole] = useState('Librarian');
  const ctx = useContext(AuthContext);
  const getUName = (data, role) => {
    setUname(data);
    setRole(role);
  }
  console.log(role);
  return (
    <AuthContext.Provider value={{
      isLoggedIn: true,
      userName: uName,
      role: role
    }}>
      <React.Fragment>
        <div style={{
          position: 'fixed', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <div className='container-lg col-md-12 p-3 rounded-3 shadow-lg bg-light'>
            <Route path='/'>
              <Redirect to='/signin' />
            </Route>
            <Route path='/signin'>
              <SignIn onSubmit={getUName} />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
            {<Route path='/home'>
              <Home />
            </Route>}
            <Route path='/books'>
              <Books />
            </Route>
            { <Route path='/addUser'>
              <AddUser />
            </Route>}
            { <Route path='/addBooks'>
              <AddBooks />
            </Route>}
            <Route path='/signout'>
              <SignOut />
            </Route>
          </div>
        </div>
      </React.Fragment >
    </AuthContext.Provider>
  );
}

export default App;
