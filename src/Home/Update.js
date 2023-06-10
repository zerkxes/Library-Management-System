import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../signIn/Button.module.css';

const Update = (props) => {
    const data = props.obj;
    const info=props.page;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newData, setNewData] = useState(JSON.stringify(data))
    const newDataHandler = (event) => {
        setNewData(event.target.value);
    }
    const formSubmissionHandler = () => {
        //console.log(newData);
        let url;
        info==='book'?url=`http://localhost:8081/book/update/${data.id}`:url=`http://localhost:8081/user/update/`;
        fetch(url, {
            method: 'POST',
            body: newData,
            headers: {
                'Content-type':'application/json'
            }
        }).then(res => res.json()).then(console.log);
    }
    return (
        <React.Fragment>
            <Button bsPrefix={styles.customBtnPrimary} onClick={handleShow}>
                Update
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Update User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <textarea className="form-control" rows="5" value={newData} onChange={newDataHandler} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={function() {handleClose(); formSubmissionHandler();}}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}
export default Update;