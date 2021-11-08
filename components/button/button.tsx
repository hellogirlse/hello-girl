import style from './button.module.scss';

function Button(props) {
    return (
        <a href={props.link} className={style.btn}>
            {props.label}
        </a>
    );
}
export default Button;