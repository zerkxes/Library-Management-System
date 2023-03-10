import { useState, useEffect, useCallback } from 'react';
import List from './List';
const ListUser = () => {
    const [ob, setOb] = useState(null);

    const listHandler = useCallback(async () => {
        const response = await fetch('https://dummyjson.com/users?limit=5');
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