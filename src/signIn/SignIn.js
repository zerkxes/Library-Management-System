import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import Button from './Button';
import styles from './Signin.module.css';
const SignIn = (props) => {
    const [inpName, setInName] = useState('');
    const [inpPass, setInPass] = useState('');
    const [inPassCheck, setInpPassCheck] = useState(true);
    const history = useHistory();
    const nameChangeHandler = (event) => {
        setInName(event.target.value);
    }

    async function passCheck() {
        try {
            const res = await fetch(`http://localhost:8081/user/findByUser/${inpName}`);
            //const dta= await res.json();
            if (!res.ok)
                throw new Error('Something went wrong');

            const data = await res.json();
            if (data.pswrd === inpPass) {
                //console.log(data.pswrd)
                props.onSubmit(inpName.trim(), data.type)
                data.type==='Librarian'? history.push('/home'): history.push('/books')
            }
            else
            console.log("wrong password");
                return false;

        } catch (error) {
            setInpPassCheck(false);
        }
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        if (inpPass.trim() === '' || inpPass.length <= 6)
            setInpPassCheck(false);
        else {
            let bool = passCheck();
            if (bool) {
                setInpPassCheck(true);
            }
            else {
                setInpPassCheck(false);
            }
        }
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
            {!inPassCheck  && <p>Password Mismatch or Invalid Username</p>}
            <Button style={styles.customBtnPrimary} value="Sign In &nbsp;" />
            <p></p>
            <Link role='button' to='/signup'><Button style={styles.customBtnPrimary} value="Sign Up"/></Link>
        </form>
    )
}

export default SignIn;