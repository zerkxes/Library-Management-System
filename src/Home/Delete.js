import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../signIn/Button.module.css';
import authContext from '../authContext';


const Delete = (props) => {
    const ob = props.obj;
    const info=props.page;
    const [show, setShow] = useState(false);
    const ctx = useContext(authContext);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let res, dta;

    async function deleteHandler() {
        res = await fetch(`http://localhost:8081/user/findByUser/${ctx.userName.trim()}`);
        dta = await res.json();
        console.log(dta);
        let url;
        info==='book'? url=`http://localhost:8081/book/delete/${dta.z_owner}/${ob.id}` : url=`http://localhost:8081/user/delete/${ob.id}`;
        fetch(url, {
            method: 'DELETE'
        }).then(res => res.json()).then(console.log);


    }
    return (
        <>
            <Button bsPrefix={styles.customBtnDanger} onClick={handleShow}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={function () { handleClose(); deleteHandler(); }}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Delete;