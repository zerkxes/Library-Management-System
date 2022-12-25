const Button = (props) => {
const out=props.value;
    return(
        <button className="w-100 btn btn-lg btn-primary" type="submit">{out}</button>
    );
}
export default Button;