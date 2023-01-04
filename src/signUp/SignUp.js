import Button from '../signIn/Button';
import { useState } from 'react';
const SignUp = () => {
    const [inPass, setInPass] = useState('');
    const [inPassCheck, setInpPassCheck] = useState(true);

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        if (inPass.trim() === '' || inPass.length <= 6)
            setInpPassCheck(false);
        else
            setInpPassCheck(true);
    }

    const passChangeHandler = (event) => {
        setInPass(event.target.value);
    }

    const passStyle = inPassCheck ? `form-control` : `form-control is-invalid`;
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="form-floating mb-2">
                <input type="text" id="floatingIn" className="form-control form-control-lg" placeholder="name@email.com" required/>
                <label htmlFor="floatingIn" >Fullname</label>
            </div>
            <div className="form-floating mb-2">
                <input type="text" id="floatingInput" className="form-control form-control-lg" placeholder="name@email.com" required/>
                <label htmlFor="floatingInput" >Username:</label>
            </div>
            <div className="form-floating">
                <input type="password" id="floatingPassword" className={passStyle} placeholder="password" onChange={passChangeHandler} value={inPass}/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <br />
            <Button value="Sign Up" style="w-100 btn btn-lg btn-primary"/>
        </form>
    );
}

export default SignUp;