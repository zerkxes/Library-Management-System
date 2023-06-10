import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import AddUser from '../Home/AddUser';
import AddBooks from '../Books/AddBooks';
const Navbar = () => {

    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        LMS
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/home" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Manage Users</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/books" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Manage Books</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/addUser" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Add User</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="addBooks" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">Add Books</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }} >
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        <NavLink exact to='/signout' activeClassName="activeClicked" style={({ isActive }) =>
                            isActive
                                ? {
                                    color: '#fff',
                                    background: 'inherit',
                                }
                                : { color: '#fff', background: 'inherit' }}>
                            <FontAwesomeIcon icon={faPowerOff} />
                        </NavLink>
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    )
}

export default Navbar;