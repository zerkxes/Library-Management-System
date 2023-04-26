import Button from "../signIn/Button";
import Update from "../Home/Update"
import Delete from "../Home/Delete";
import Borrow from "./Borrow";
const List = (props) => {
    const ob = props.objarr;
    const column = Object.keys(ob[0]);
    //console.log(ob);
    const Thdata = () => {
        return column.map((data) => {
            return <th scope="col" key={data}>{data}</th>
        })
    }
    const TdData = () => {
        return (
            ob.map((x) => {
                return (
                    <tr >
                        <th scope="row" key={x.id}>{x.id}</th>
                        <td style={{width: '6rem'}} >{x.name}</td>
                        <td style={{width:'7rem'}}>{x.username}</td>
                        <td style={{width:'7rem'}}>{x.borrow_d}</td>
                        <td style={{width:'7rem'}}>{x.return_d}</td>
                        <td><Update obj={x}/>&nbsp;<Borrow obj={x} />&nbsp;<Delete obj={x} /></td>
                    </tr>
                )
            })
        )
    }
    return (
        <div className="table-responsive" >
            <table className="table table-hover align-middle">
                <thead>
                    {Thdata()}
                </thead>
                <tbody>
                    {TdData()}
                </tbody>
            </table>
        </div>
    );
}

export default List;