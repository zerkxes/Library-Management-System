import Button from "../signIn/Button";
import Update from "../Home/Update"
import Delete from "../Home/Delete";
const List = (props) => {
    const ob = props.objarr;
    //const column = Object.keys(props.ob[0]);
    //console.log(ob);
    const Thdata = () => {
        return (<tr>
            <th scope="col">Uid/Id</th>
            <th scope="col">Name</th>
            <th scope="col">UserId</th>
            <th scope="col">Borrow Date</th>
            <th scope="col">Return Date</th>
            <th scope="col">Modify</th> 
        </tr>)
    }
    const TdData= () => {
        return (
             ob.map((x) => {
                return (
                    <tr>
                        <th scope="row">{x.id}</th>
                        <td>{x.title}</td>
                        <td>{x.brand}</td>
                        <td>{x.price}</td>
                        <td>{x.price}</td>
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