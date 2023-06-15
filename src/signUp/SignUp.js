import Button from '../signIn/Button';
import { useState } from 'react';
import styles from '../signIn/Button.module.css';
//import authContext from '../authContext';
import {useHistory} from 'react-router-dom/cjs/react-router-dom.min';
const SignUp = () => {
    const [inPass, setInPass] = useState('');
    const [inPassCheck, setInpPassCheck] = useState(true);
    //const ctx = useContext(authContext);
    let history = useHistory();
    async function formSubmissionHandler(event) {
        event.preventDefault();
        if (inPass.trim() === '' || inPass.length <= 6)
            setInpPassCheck(false);
        else
            setInpPassCheck(true);
        const res = await fetch(`http://localhost:8081/user/findByUser/${event.target[1].value.trim()}`);
        //const dta = await res.json();
        if(res.status===409){
            alert('Duplicate username please try something else');
        }
        const userObj = {
            'name': event.target[0].value,
            'u_name': event.target[1].value,
            'pswrd': event.target[2].value,
            'type': "Student",
            'z_owner': 'Aniket',
            'book': []
        }
        let url;
        url = `http://localhost:8081/user/create/`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json()).then(routeChange);
    }
    const routeChange=()=>{
        history.push('/signin');
        alert('User created please login');
    }

    const passChangeHandler = (event) => {
        setInPass(event.target.value);
    }

    const passStyle = inPassCheck ? `form-control` : `form-control is-invalid`;
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="form-floating mb-2">
                <input type="text" id="floatingIn" className="form-control form-control-lg" placeholder="name@email.com" required />
                <label htmlFor="floatingIn" >Fullname</label>
            </div>
            <div className="form-floating mb-2">
                <input type="text" id="floatingInput" className="form-control form-control-lg" placeholder="name@email.com" required />
                <label htmlFor="floatingInput" >Username:</label>
            </div>
            <div className="form-floating">
                <input type="password" id="floatingPassword" className={passStyle} placeholder="password" onChange={passChangeHandler} value={inPass} />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <br />
            <Button value="Sign Up" style={styles.customBtnPrimary} />
        </form>
    );
}

export default SignUp;