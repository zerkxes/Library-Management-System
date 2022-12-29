import React from "react";
import AddUser from "./AddUser";
import ListUser from "./ListUser";
const Home = () => {

    return (
        <React.Fragment>
            <AddUser />
            <h3>Users:</h3>
            <ListUser/>
        </React.Fragment>
    );
}

export default Home;