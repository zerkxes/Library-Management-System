import classes from './App.module.css';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp'
function App() {
  return (
    <div>
      <header className={classes['App-header']}>
        <div className='p-3 rounded-3 shadow-lg bg-light'>
          <SignIn />
        </div>
      </header>
    </div>
  );
}

export default App;
