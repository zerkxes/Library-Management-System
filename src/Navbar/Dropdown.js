import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Update from '../Home/Update';
import Delete from '../Home/Delete';
import Borrow from '../Books/Borrow';
import styles from '../signIn/Button.module.css';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function App(props) {
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle bsPrefix={styles.customBtnPrimary}>
                    Open Menu <FontAwesomeIcon icon={faCaretDown}/> 
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">
                        <Update obj={props.obj} />
                    </Dropdown.Item>
                    {props.info == 'book' && <Dropdown.Item href="#"><Borrow obj={props.obj} /></Dropdown.Item>}
                    <Dropdown.Item href="#">
                        <Delete obj={props.obj} page={'book'}/>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
