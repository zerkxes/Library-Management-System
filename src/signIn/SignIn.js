import Button from './Button';
import { useState } from 'react';

const SignIn = () => {
    const [inpName, setInName] = useState('');
    const [inpPass, setInPass] = useState('');
    const [inPassCheck, setInpPassCheck] = useState(true);
    const nameChangeHandler = (event) => {
        setInName(event.target.value);
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        if (inpPass.trim() === '' || inpPass.length <= 6)
            setInpPassCheck(false);
            else
            setInpPassCheck(true);
        setInName('');
        setInPass('');
    }

    const passChangeHandler = (event) => {
        setInPass(event.target.value);
    }
    const passStyle = inPassCheck ? `form-control` : `form-control is-invalid`;
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="form-floating mb-2">
                <input type="text" id="floatingInput" className="form-control form-control-lg " placeholder="name@email.com" onChange={nameChangeHandler} value={inpName} />
                <label htmlFor="floatingInput" >Username:</label>
            </div>
            <div className="form-floating">
                <input type="password" id="floatingPassword" className={passStyle} placeholder="password" onChange={passChangeHandler} value={inpPass} />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            </div>
            <Button value="Sign In" style="w-100 btn btn-lg btn-primary"/>
            <p></p>
            <Button value="Sign Up" style="w-100 btn btn-lg btn-primary"/>
        </form>
    )
}

export default SignIn;