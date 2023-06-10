import { useState, useEffect, useCallback, useContext } from "react";
import List from "../Books/List";
import authContext from '../authContext';
const ListBooks = () => {
    const [ob, setOb] = useState(null);
    //const ctx=useContext(authContext);
    //const owner=ctx.owner;
    const listHandler = useCallback(async () => {
        const response = await fetch(`http://localhost:8081/book/list/`);
        const data = await response.json();
        //console.log(data);
        setOb(data);
    }, []);

    useEffect(() => {
        listHandler();
    }, [listHandler]);

    return (
        ob && <List objarr={ob} />
    )
}
export default ListBooks;