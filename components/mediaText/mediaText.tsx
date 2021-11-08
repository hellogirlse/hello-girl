import style from './mediaText.module.scss';

function MediaText(props) {
    return (
        <section className={`bg-primary ${style.primary}`}>
            <div className={`container ${style.primary__container}`}>

                <div className={`page-decoration ${style.primary__decoration}`}>
                    <fieldset>
                        <legend aria-hidden="true">Om Hello Girl!</legend>
                    </fieldset>
                </div>

                <div className={style.primary__container__wrapper}>

                    <div className={style.primary__content}>
                        <h2 className="headline headline--h2">Så startade initiativet</h2>
                        <p>
                            Idén till Hello Girl! tog fart i Jönköping under början av 2018. 
                            Behovet var tydligt: Vi behöver få fler tjejer och kvinnor att söka sig mot tech-branschen och välja studier inom teknik och IT. 
                            Tankarna kom från ett nätverk i Jönköping bestående av studie – och yrkesvägledare, företag och organisationer. 
                        </p>

                        <p>
                            Hello Girl! startades under ett dåvarande projekt som verkade för att boosta digitaliseringen i regionens näringsliv. 
                            Bakom initiativet stod Jönköping University och Science Park i Jönköping tillsammans med lokala företag, organisationer och skolor. 
                        </p>

                        <p>
                            Några månader senare öppnades anmälan upp för vår första workshop. 
                            En utbildning för tjejer och kvinnor med syfte att öka upp den digitala jämställdheten, sprida kunskap, inspirera, visa förebilder och bygga storys.
                        </p>

                        <div className={style.primary__image}>
                            <img src="./images/workshop_image.jpg" alt="Bild: Hello Girl! Workshop."/>
                        </div>
                    </div>

                </div>

            </div>

            <div className={style.primary__desktop_image}>
                <img src="./images/workshop_image.jpg" alt="Bild: Hello Girl! Workshop."/>
            </div>
        </section>
    );
}
export default MediaText;