import Button from "../signIn/Button";
import Update from "./Update";
import Delete from "./Delete";
const List = (props) => {
    const ob = props.objarr;
    const column = Object.keys(ob[0]);
    //console.log(ob);
    const Thdata = () => {
        return column.map((data)=>{
            return <th scope="col" key={data}>{data}</th>
        })
    }
    const TdData= () => {
        return (
             ob.map((x) => {
                return (
                    <tr>
                        <th scope="row" key={x.id}>{x.id}</th>
                        <td>{x.name}</td>
                        <td>{x.username}</td>
                        <td>{x.role}</td>
                        <td><Update obj={x}/>&nbsp;<Delete obj={x}/></td>
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