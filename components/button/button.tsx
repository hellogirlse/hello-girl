import style from "./Button.module.scss";

function Card(props) {
  return (
    <button className="btn">
      <p>
        {props.label}
        <img src="icons/black-arrow.svg" aria-hidden="true" />
      </p>
    </button>
  );
}
export default Card;
