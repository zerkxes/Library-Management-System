import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Update from '../Home/Update';
import Delete from '../Home/Delete';
import Borrow from '../Books/Borrow';
import styles from '../signIn/Button.module.css';
import authContext from "../authContext";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Return from '../Books/Return';
import { useContext } from 'react';
export default function App(props) {

    const ctx = useContext(authContext);
    let flag = props.obj.b_date === null ? <Borrow obj={props.obj} {...props}/> : <Return obj={props.obj} {...props}/>;
    //console.log(props.obj);
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle bsPrefix={styles.customBtnPrimary}>
                    Open Menu <FontAwesomeIcon icon={faCaretDown} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">
                        {ctx.role==='Librarian' && <Update obj={props.obj} {...props}/>}
                    </Dropdown.Item>
                    {props.info === 'book' && <Dropdown.Item href="#">{flag}</Dropdown.Item>}
                    <Dropdown.Item href="#">
                        {ctx.role==='Librarian' && <Delete obj={props.obj} page={props.info} {...props}/>}
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
