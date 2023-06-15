import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../signIn/Button.module.css';
import { useContext } from "react";
import authContext from '../authContext';
//import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Borrow = (props) => {
    const ob = props.obj;
    const ctx = useContext(authContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let d = new Date();
    let dat = ("0" + d.getDate()).slice(-2);
    let mon = ("0" + d.getMonth()).slice(-2);
    let yr = (d.getFullYear());
    let dat2 = new Date(Date.now() + 12096e5).getDate();
    dat2 = ("0" + dat2).slice(-2);
    let mon2 = new Date(Date.now() + 12096e5).getMonth();
    mon2 = ("0" + mon2).slice(-2);
    let yr2 = new Date((Date.now() + 12096e5)).getFullYear();
    async function deleteHandler() {
        const res = await fetch(`http://localhost:8081/user/findByUser/${ctx.userName.trim()}`);
        const dta = await res.json();
        const bookObj = {
            'id': ob.id,
            'b_date': `${dat}-${mon}-${yr}`,
            'r_date': `${dat2}-${mon2}-${yr2}`
        }
        fetch(`http://localhost:8081/book/borrow/${dta.id}`, {
            method: 'POST',
            body: JSON.stringify(bookObj),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json()).then(routeChange);
    }

    const routeChange = () => {
        setTimeout(1000);
        props.y();
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
                    <Button bsPrefix={styles.customBtnPrimary} style={{width: 'auto'}} onClick={function () { handleClose(); deleteHandler(); }}>
                        Borrow
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Borrow;