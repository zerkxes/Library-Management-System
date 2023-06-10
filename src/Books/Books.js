import React from "react";
import Navbar from "../Navbar/Navbar";
import ReactDOM from "react-dom";
import AddBooks from "./AddBooks";
import ListBooks from "./ListBooks";
import Return from "./Return";
const Books = () => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Navbar />, document.getElementById('navbar'))}
            {/* <AddBooks /><br/><Return/> */}
            <h3>Books:</h3>
            <ListBooks />
        </React.Fragment>
    )
}
export default Books;