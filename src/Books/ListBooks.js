import { useState, useEffect, useCallback  } from "react";
import List from "../Books/List";

const ListBooks = () => {
    const [ob, setOb] = useState(null);
    const listHandler = useCallback(async () => {
        //console.log('render');
        const response = await fetch(`http://localhost:8081/book/list/`);
        const data = await response.json();
        //console.log(data);
        setOb(data);
    }, []);

    useEffect(() => {
        listHandler();
    }, [listHandler]);

    return (
        ob && <List objarr={ob} y={listHandler}/>
    )
}
export default ListBooks;