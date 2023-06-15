import { useContext } from "react";
import authContext from "../authContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const SignOut = () => {
    let ctx=useContext(authContext);
    ctx={
        isLoggedIn: false,
        userName: null,
        role: 'Student'
    }
    let history=useHistory();
    history.push('/signIn');
}
export default SignOut;