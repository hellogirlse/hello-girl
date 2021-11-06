import style from './teacherText.module.scss';

function TeacherText(props) {
    return (
        <section className={`bg-primary ${style.primary}`}>
            <div className={`container ${style.primary__container}`}>

                <div className={`page-decoration ${style.primary__decoration}`}>
                    <fieldset></fieldset>
                </div>

                <div className={style.primary__container__wrapper}>
                    <h2 className="headline headline--h2">Förebilder lär ut</h2>
                    <p>
                        Hello Girl! är en utbildning för tjejer – skapad av tjejer. 
                        Våra utbildare arbetar på olika IT-bolag runt om i Sverige vilket ger deltagarna möjligheten att utöka sitt nätverk och skapa kontakter med potentiella, framtida arbetsgivare.
                    </p>
                </div>

            </div>
        </section>
    );
}
export default TeacherText;