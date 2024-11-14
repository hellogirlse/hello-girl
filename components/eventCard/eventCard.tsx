import style from './eventCard.module.scss';
import Button from '../button/button';

interface EventProps {
    title: string;
    date: string;
    link: string;
    label: string;
}

function EventCard(props: EventProps) {
    return (
        <div className={style.card}>
            <div className={style.card__head}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={style.card__body}>
                {props.title ? (
                    <h2 className="headline headline--h2">{props.title}</h2>
                ) : null}
                {props.date ? <p>{props.date}</p> : null}

                {props.link ? (
                    <Button
                        label={props.label ?? 'Mer om kursen'}
                        link={props.link}
                    />
                ) : null}
            </div>
        </div>
    );
}
export default EventCard;
