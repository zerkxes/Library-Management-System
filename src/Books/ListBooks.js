import { useState, useEffect, useCallback } from "react";
import List from "../Books/List";
const ListBooks = () => {
    const [ob, setOb] = useState(null);
    const listHandler = useCallback(async () => {
        const response = await fetch('https://dummyjson.com/products?limit=8');
        const data = await response.json();
        setOb(data.products);
    }, []);

    useEffect(() => {
        listHandler();
    }, [listHandler]);

    return (
        ob && <List objarr={ob} />
    )
}
export default ListBooks;