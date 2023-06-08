import { useState, useEffect, useCallback, useContext } from 'react';
import List from './List';
import authContext from '../authContext';
const ListUser = () => {
    const [ob, setOb] = useState(null);
    const ctx=useContext(authContext);

    const listHandler = useCallback(async () => {
        const res= await fetch(`http://localhost:8081/user/findByUser/${ctx.userName.trim()}`);
        const dta = await res.json();
        const response = await fetch(`http://localhost:8081/user/list/${dta.z_owner}`);
        const data = await response.json();
        setOb(data);
    }, []);

    useEffect(() => {
        listHandler();
    }, [listHandler]);

    return (
        ob && <List objarr={ob} />
    )

}

export default ListUser;