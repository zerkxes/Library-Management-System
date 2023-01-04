import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Delete = (props) => {
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
            <Button variant="danger" onClick={handleShow}>
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