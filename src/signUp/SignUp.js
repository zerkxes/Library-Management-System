import Button from '../signIn/Button';
const SignUp = () => {

    return (
        <form>
            <div className="form-floating mb-2">
                <input type="email" id="floatingInput" className="form-control form-control-lg" placeholder="name@email.com" />
                <label htmlFor="floatingInput" >Fullname</label>
            </div>
            <div className="form-floating mb-2">
                <input type="email" id="floatingInput" className="form-control form-control-lg" placeholder="name@email.com" />
                <label htmlFor="floatingInput" >Username:</label>
            </div>
            <div className="form-floating">
                <input type="password" id="floatingPassword" className="form-control" placeholder="password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <br/>
            <Button value="Sign Up" />
        </form>
    );
}

export default SignUp;