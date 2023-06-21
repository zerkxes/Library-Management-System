import Button from "../signIn/Button";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from '../signIn/Button.module.css';
import Navbar from "../Navbar/Navbar";
import ReactDOM from "react-dom";
import React from "react";
import authContext from '../authContext';
const AddUser = () => {
    const [inPass, setInPass] = useState('');
    const [inPassCheck, setInpPassCheck] = useState(true);
    const ctx = useContext(authContext);
    let history = useHistory();
    const routeChange= () => {
        history.push('/home');
    }

    const passChangeHandler = (event) => {
        setInPass(event.target.value);
    }
    async function formSubmissionHandler(event) {
        event.preventDefault();
        if (inPass.trim() === '' || inPass.length <= 6)
            setInpPassCheck(false);
        else {
            setInpPassCheck(true);
            const res = await fetch(`http://localhost:8081/user/findByUser/${ctx.userName.trim()}`);
            const dta = await res.json();
            const userObj = {
                'name': event.target[0].value,
                'u_name': event.target[1].value,
                'pswrd': event.target[2].value,
                'type': "Teacher",
                'z_owner': dta.name,
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
    }
    const passStyle = inPassCheck ? `form-control` : `form-control is-invalid`;
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Navbar />, document.getElementById('navbar'))}
            <form className="" onSubmit={formSubmissionHandler} >
                <div className="form-group">
                    <label className="visually-hidden" htmlFor="inputName" />
                    <div className="input-group">
                        <input type="text" className="form-control" id="inputName" placeholder="Fullname" required />
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label className="visually-hidden" htmlFor="inputUser" />
                    <div className="input-group">
                        <input type="text" className="form-control" id="inputUser" placeholder="Username" required />
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label className="visually-hidden" htmlFor="inputPass" />
                    <div className="input-group">
                        <input type="password" className={passStyle} id="inputPass" placeholder="Password" onChange={passChangeHandler} />
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <Button value="Add User" style={styles.customBtnPrimary} />
                </div>
            </form>
        </React.Fragment>
    );
}

export default AddUser;