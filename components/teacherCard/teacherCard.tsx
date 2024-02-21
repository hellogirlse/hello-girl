import style from './teacherCard.module.scss';

interface TeacherProps {
    name: string;
    position: string;
    company: string;
    image: string;
}

function TeacherCard(props: TeacherProps) {
    return (
        <div className={style.teacher}>
            <div className={style.card}>
                <div className={style.card__head}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={style.card__body}>
                    <img src={props.image} alt={`Bild: ${props.name}`} />
                </div>
            </div>

            {props.name ? (
                <h3 className="headline headline--h3">{props.name}</h3>
            ) : null}
            {props.position ? (
                <p className={style.teacher__position}>{props.position}</p>
            ) : null}
            {props.company ? (
                <p className={style.teacher__company}>{props.company}</p>
            ) : null}
        </div>
    );
}
export default TeacherCard;
