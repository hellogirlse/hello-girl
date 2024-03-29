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
                    <img
                        src="./logos/science-park.png"
                        alt="Bild: Science Park Jönköping"
                    />
                    {/* <img src="./logos/jordbruksverket.png" alt="Bild: Jordbruksverket" /> */}
                    {/* <img
                        className={style.friends__compress_height}
                        src="./logos/sogeti.png"
                        alt="Bild: Sogeti"
                    /> */}
                    <img src="./logos/consid.svg" alt="Bild: Consid" />
                    <img src="./logos/avantime.svg" alt="Bild: Avantime" />
                    <img
                        className={
                            style.friends__compress_height +
                            ` ` +
                            style.friends__compress_height__extra
                        }
                        src="./logos/toxic.png"
                        alt="Bild: Toxic"
                    />
                    <img
                        src="./logos/pixelandfriends.png"
                        alt="Bild: Pixel & Friends"
                    />
                    <img
                        className={
                            style.friends__compress_height +
                            ` ` +
                            style.friends__compress_height__extra
                        }
                        src="./logos/knowit.svg"
                        alt="Bild: Knowit"
                    />
                    <img
                        className={style.friends__compress_height}
                        src="./logos/confetti.png"
                        alt="Bild: Confetti"
                    />
                </div>
            </div>
        </section>
    );
}
export default Friends;
