const Button = (props) => {
const out=props.value;
const style=props.style;
    return(
        <button className={style} type="submit">{out}</button>
    );
}
export default Button;