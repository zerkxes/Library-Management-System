import Button from "../signIn/Button";
import { useState } from "react";
import styles from '../signIn/Button.module.css';
import Navbar from "../Navbar/Navbar";
import ReactDOM from "react-dom";
import React from "react";
const AddUser = () => {
    const [inPass, setInPass] = useState('');
    const [inPassCheck, setInpPassCheck] = useState(true);
    const [input, setInput]=useState({});

    const passChangeHandler = (event) => {
        setInPass(event.target.value);
    }

    const changeHandler = () => {
        passChangeHandler();
        handleChange();
    }

    const handleChange = (event) => {
        const name=event.target.name;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        if (inPass.trim() === '' || inPass.length <= 6)
            setInpPassCheck(false);
        else {
            setInpPassCheck(true);
            console.log(event.target.value);
            // let url;
            // url = `http://localhost:8081/user/create/`;
            // fetch(url, {
            //     method: 'POST',
            //     body: newData,
            //     headers: {
            //         'Content-type': 'application/json'
            //     }
            // }).then(res => res.json()).then(console.log);
        }
    }
    const passStyle = inPassCheck ? `form-control` : `form-control is-invalid`;
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Navbar />, document.getElementById('navbar'))}
            <form className="" onSubmit={formSubmissionHandler} onChange={handleChange}>
                <div className="form-group">
                    <label className="visually-hidden" htmlFor="inputName" />
                    <div className="input-group">
                        <input type="text" className="form-control" id="inputName" placeholder="Fullname" required onChange={handleChange}/>
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label className="visually-hidden" htmlFor="inputUser" />
                    <div className="input-group">
                        <input type="text" className="form-control" id="inputUser" placeholder="Username" required onChange={handleChange}/>
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label className="visually-hidden" htmlFor="inputPass" />
                    <div className="input-group">
                        <input type="password" className={passStyle} id="inputPass" placeholder="Password" onChange={changeHandler} />
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