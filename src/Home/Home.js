import React from "react";
import AddUser from "./AddUser";
import ListUser from "./ListUser";
import Navbar from "../Navbar/Navbar";
import ReactDOM from 'react-dom';

const Home = () => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Navbar />, document.getElementById('navbar'))}
            {/* <AddUser /> */}
            <h3>Users:</h3>
            <ListUser />
        </React.Fragment>
    );
}

export default Home;