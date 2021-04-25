import style from "./EventCard.module.scss";

import { Row, Col } from "fluid-react";
import { ReactNode } from "react";

interface EventProps {
  title: string;
  date: string;
  link?: string;
  childern: ReactNode;
}
function EventCard(props: EventProps) {
  return (
    <div className={style.card}>
      <div className={style.innerCard}>
        {/* <a href={props.link}> */}
        <h2>{props.title}</h2>
        <span className={style.cardDate}>
          <b>Datum: </b>
          {props.date}
        </span>

        {props.childern}
        {/* </a> */}
      </div>
    </div>
  );
}
export default EventCard;
