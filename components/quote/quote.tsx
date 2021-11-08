import style from './quote.module.scss';

function Quote(props) {
    return (
        <section className={style.quote}>
            <div className={`container ${style.quote__container}`}>
                <div className="page-decoration">
                    <fieldset></fieldset>
                </div>
                
                <div className={style.quote__container__wrapper}>
                    <blockquote>
                        <p aria-label={props.quote}>
                            <span className={style.quote__text} aria-hidden="true">{props.quote}</span>
                            <span className={style.quote__decoration} aria-hidden="true">{props.quote}</span>
                        </p>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
export default Quote;