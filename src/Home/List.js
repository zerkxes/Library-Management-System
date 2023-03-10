import Button from "../signIn/Button";
import Update from "./Update";
import Delete from "./Delete";
const List = (props) => {
    const ob = props.objarr;
    //const column = Object.keys(props.ob[0]);
    //console.log(ob);
    const Thdata = () => {
        return (<tr>
            <th scope="col">Uid/Id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Role</th>
            <th scope="col">Modify</th> 
        </tr>)
    }
    const TdData= () => {
        return (
             ob.map((x) => {
                return (
                    <tr>
                        <th scope="row">{x.id}</th>
                        <td>{x.firstName + ' ' + x.lastName}</td>
                        <td>{x.username}</td>
                        <td>{x.gender}</td>
                        <td><Update obj={x}/><Delete obj={x}/></td>
                    </tr>
                )
            })
        )
    }
    return (
        <table className="table">
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