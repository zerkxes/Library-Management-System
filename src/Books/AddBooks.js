import Button from "../signIn/Button";
import styles from '../signIn/Button.module.css';

const AddBooks = () => {
    const formSubmissionHandler = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            body: JSON.stringify(name),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json()).then(console.log);
    }
    return (
        <form className="row row-cols-lg-auto g-3 align-items-center" onSubmit={formSubmissionHandler}>
            <div className="col-md-3">
                <label className="visually-hidden" htmlFor="inputName" />
                <div className="input-group">
                    <input type="text" className="form-control" id="inputName" placeholder="Book name" required />
                </div>
            </div>
            <div className="col-md-3">
                <Button value="Add Book" style={styles.customBtnPrimary} />
            </div>
        </form>
    );
}

export default AddBooks;