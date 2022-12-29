import Button from "../signIn/Button";
import { useState } from "react";
const AddUser = () => {
    const [inPass, setInPass] = useState('');
    const [inPassCheck, setInpPassCheck]= useState(true);

    const passChangeHandler=(event) => {
        setInPass(event.target.value);
    }
    
    const formSubmissionHandler = (event) => {
        event.preventDefault();
        if (inPass.trim() === '' || inPass.length <= 6)
            setInpPassCheck(false);
        else
            setInpPassCheck(true);
    }
    const passStyle = inPassCheck ? `form-control` : `form-control is-invalid`;
    return (
        <form className="row row-cols-lg-auto g-3 align-items-center" onSubmit={formSubmissionHandler}>
            <div className="col-md-3">
                <label className="visually-hidden" htmlFor="inputName" />
                <div className="input-group">
                    <input type="text" className="form-control" id="inputName" placeholder="Fullame" required/>
                </div>
            </div>
            <div className="col-md-3">
                <label className="visually-hidden" htmlFor="inputUser" />
                <div className="input-group">
                    <input type="text" className="form-control" id="inputUser" placeholder="Username" required/>
                </div>
            </div>
            <div className="col-md-3">
                <label className="visually-hidden" htmlFor="inputPass" />
                <div className="input-group">
                    <input type="password" className={passStyle} id="inputPass" placeholder="Password" onChange={passChangeHandler}/>
                </div>
            </div>
            <div className="col-md-3">
                <Button value="Add User" style="w-100 btn btn-lg btn-primary"/>
            </div>
        </form>
    );
}

export default AddUser;