import React from "react";
import Navbar from "../Navbar/Navbar";
import ReactDOM from "react-dom";
import AddBooks from "./AddBooks";
import ListBooks from "./ListBooks";
const Books = () => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Navbar />, document.getElementById('navbar'))}
            <AddBooks />
            <h3>Books:</h3>
            <ListBooks />
        </React.Fragment>
    )
}
export default Books;