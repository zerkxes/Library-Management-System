//import { useEffect } from 'react';
//import { useState } from 'react';
import Dropdown from '../Navbar/Dropdown'
const List = (props) => {
    const ob = props.objarr;
    
    const Thdata = () => {
        return (<tr>
            <th scope="col" key='id'>Id</th>
            <th scope="col">Name</th>
            <th scope="col">Owner</th>
            <th scope="col">Borrow Date</th>
            <th scope="col">Return Date</th>
            <th scope="col" className="text-center">Actions</th>
        </tr>);
    }
    const TdData = () => {
        return (
            ob.map((x) => {
                return (
                    <tr >
                        <th scope="row" key={x.id}>{x.id}</th>
                        <td style={{ width: '6rem' }} >{x.name}</td>
                        <td style={{ width: '7rem' }}>{x.owner}</td>
                        <td style={{ width: '7rem' }}>{x.b_date == null ? '--' : x.b_date}</td>
                        <td style={{ width: '7rem' }}>{x.r_date == null ? '--' : x.r_date}</td>
                        {/* <td><Update obj={x} page={'book'}/>&nbsp;<Borrow obj={x} page={'book'} />&nbsp;<Delete obj={x} page={'book'}/></td> */}
                        <td><Dropdown info='book' obj={x} {...props}/></td>
                    </tr>
                )
            })
        )
    }
    return (
        <div className="table-responsive" style={{maxHeight: '50vh'}}>
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