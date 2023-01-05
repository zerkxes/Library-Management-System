import { useState, useEffect, useCallback } from "react";
import List from "../Books/List";
const ListBooks = () => {
    const [ob, setOb] = useState(null);
    const listHandler = useCallback(async () => {
        const response = await fetch('https://00284059-c46c-409b-bc6e-5af384b2b870.mock.pstmn.io/books');
        const data = await response.json();
        setOb(data.books);
    }, []);

    useEffect(() => {
        listHandler();
    }, [listHandler]);

    return (
        ob && <List objarr={ob} />
    )
}
export default ListBooks;