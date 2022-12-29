import { useState, useEffect } from 'react';
import List from './List';
const ListUser = () => {
    const [ob, setOb] = useState(null);
    useEffect(() => {
        listHandler();
    }, []);

    async function listHandler() {
        const response = await fetch('https://dummyjson.com/users?limit=5');
        const data = await response.json();
        setOb(data.users);
    }
    return (
        ob && <List objarr={ob} />
    )

}

export default ListUser;