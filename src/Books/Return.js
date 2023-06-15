import Button from 'react-bootstrap/Button';
import styles from '../signIn/Button.module.css';
import authContext from '../authContext';
import { useState, useContext } from "react";
import Modal from 'react-bootstrap/Modal';
const Return = (props) => {
    const ob = props.obj;
    const ctx = useContext(authContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //const ctx = useContext(authContext);
    async function borrowHandler() {
        const res = await fetch(`http://localhost:8081/user/findByUser/${ctx.userName.trim()}`);
        const dta = await res.json();
        
        fetch(`http://localhost:8081/book/return/${dta.id}/${ob.id}`, {
        }).then(routeChange);
    }

    const routeChange = () => {
        setTimeout(1000);
        props.y();
    }
    return (
        <>
            <Button bsPrefix={styles.customBtnPrimary} size='md' onClick={handleShow}>
                Return
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Return book</Modal.Title>
                </Modal.Header>
                <Modal.Body>Return {ob.name}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button bsPrefix={styles.customBtnPrimary} style={{width: 'auto'}} onClick={function () { handleClose(); borrowHandler(); }}>
                        Return
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Return;