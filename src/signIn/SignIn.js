import Button from './Button';

const SignIn = () => {

    return (
        <form>
            <div className="form-floating mb-2">
                <input type="email" id="floatingInput" className="form-control form-control-lg" placeholder="name@email.com" />
                <label htmlFor="floatingInput" >Username:</label>
            </div>
            <div className="form-floating">
                <input type="password" id="floatingPassword" className="form-control" placeholder="password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <Button value="Sign In"/>
        </form>
    )
}

export default SignIn;