import style from './friends.module.scss';

function Friends(props) {
    return (
        <section id="vanner" className={style.friends}>
            <div className={`container ${style.friends__container}`}>
                <div className={`page-decoration ${style.friends__decoration}`}>
                    <fieldset>
                        <legend>Våra vänner</legend>
                    </fieldset>
                </div>
                
                <div className={style.friends__container__wrapper}>
                    <img src="./logos/science-park.png" alt="Bild: Science Park Jönköping"/>
                    <img src="./logos/jordbruksverket.png" alt="Bild: Jordbruksverket"/>
                    <img src="./logos/sogeti.png" alt="Bild: Sogeti"/>
                    <img src="./logos/consid.svg" alt="Bild: Consid"/>
                    <img src="./logos/avantime.svg" alt="Bild: Avantime"/>
                </div>
            </div>
        </section>
    );
}
export default Friends;