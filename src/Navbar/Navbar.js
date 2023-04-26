import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import styles from '../signIn/Button.module.css';
const Navbar = () => {

    return (
        <nav className="navbar navbar-dark bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand">LMS</a>
                <form className="d-flex">
                    <Link role='button' to='/home'><Button bsPrefix={styles.customBtnPrimary}>Home</Button></Link>
                    &nbsp;
                    <Link role='button' to='/books'><Button bsPrefix={styles.customBtnPrimary}>Books</Button></Link>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;