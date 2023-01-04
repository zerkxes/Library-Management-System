import { Link } from "react-router-dom";
const Navbar = () => {

    return (
        <nav className="navbar navbar-dark bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand">LMS</a>
                <form className="d-flex">
                    <Link className="btn btn-outline-success" role='button' to='/home'>Home</Link>
                    <Link className="btn btn-outline-success" role='button' to='/books'>Books</Link>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;