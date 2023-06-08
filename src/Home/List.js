import Button from "../signIn/Button";
import Update from "./Update";
import Delete from "./Delete";
import { useContext } from "react";
import authContext from "../authContext";
import { Dropdown } from "react-bootstrap/Dropdown";
const List = (props) => {
    const ctx = useContext(authContext);
    const ob = props.objarr;
    const column = Object.keys(ob[0]);
    //console.log(ob);
    const Thdata = () => {
        return column.map((data) => {
            if (data !== 'pswrd')
                return <th scope="col" key={data}>{ data=='type'? 'Role': data}</th>
        })
    }
    const TdData = () => {
        return (
            ob.map((x) => {
                return (
                    <tr>
                        <th scope="row" key={x.id}>{x.id}</th>
                        <td>{x.name}</td>
                        <td>{x.u_name}</td>
                        <td>{x.type}</td>
                        <td>{x.z_owner}</td>
                        <td><Update obj={x} />&nbsp;<Delete obj={x} /></td>
                    </tr>
                )
            })
        )
    }
    return (
        <table className="table table-hover align-middle">
            <thead>
                {Thdata()}
            </thead>
            <tbody>
                {TdData()}
            </tbody>
        </table>
    );
}

export default List;