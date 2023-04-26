import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../signIn/Button.module.css';

const Borrow = (props) => {
    const ob = props.obj;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteHandler = () => {
        fetch(`https://dummyjson.com/users/${ob.id}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(console.log);
    }
    return (
        <>
            <Button bsPrefix={styles.customBtnPrimary} size='md' onClick={handleShow}>
                Borrow
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Borrow book</Modal.Title>
                </Modal.Header>
                <Modal.Body>Borrow {ob.name}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={function () { handleClose(); deleteHandler(); }}>
                        Borrow
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Borrow;