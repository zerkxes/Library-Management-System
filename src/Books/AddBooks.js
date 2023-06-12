import Button from "../signIn/Button";
import styles from '../signIn/Button.module.css';
import React from "react";
import Navbar from "../Navbar/Navbar";
import ReactDOM from "react-dom";
import authContext from '../authContext';
import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function AddBooks() {
    const ctx = useContext(authContext);
    async function formSubmissionHandler(event) {
        event.preventDefault();
        const res = await fetch(`http://localhost:8081/user/findByUser/${ctx.userName.trim()}`);
        const dta = await res.json();
        const name = event.target[0].value;
        console.log(name);
        const bookObj = {
            'name': name,
            'owner': dta.name,
        }
        fetch(`http://localhost:8081/book/add/`, {
            method: 'POST',
            body: JSON.stringify(bookObj),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json()).then(routeChange);
    }
    let history = useHistory();
    const routeChange = () => {
        history.push('/books');
    }
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Navbar />, document.getElementById('navbar'))}
            <form className="row row-cols-lg-auto g-3 align-items-center" onSubmit={formSubmissionHandler}>
                <div className="col-md-3">
                    <label className="visually-hidden" htmlFor="inputName" />
                    <div className="input-group">
                        <input type="text" className="form-control" id="inputName" placeholder="Book name" required />
                    </div>
                </div>
                <div className="col-md-3">
                    <Button value="Add Book" style={styles.customBtnPrimary} />
                </div>
            </form>
        </React.Fragment>
    );
}

export default AddBooks;