import { useState, useEffect, useCallback } from 'react';
import List from './List';
const ListUser = () => {
    const [ob, setOb] = useState(null);

    const listHandler = useCallback(async () => {
        const response = await fetch('https://92823f61-5fb1-4746-af54-487743a8ee47.mock.pstmn.io/users');
        const data = await response.json();
        setOb(data.users);
    }, []);

    useEffect(() => {
        listHandler();
    }, [listHandler]);

    return (
        ob && <List objarr={ob} />
    )

}

export default ListUser;