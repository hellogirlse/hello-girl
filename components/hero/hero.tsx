import style from './hero.module.scss';

function Hero(props) {
    return (
        <section id="hem" className={style.hero}>
            <div className={`container ${style.hero__container}`}>
                <div className={`page-decoration ${style.hero__decoration}`}>
                    <fieldset>
                        <legend aria-hidden="true">Hello!</legend>
                    </fieldset>
                </div>
                
                <div className={style.hero__container__wrapper}>
                    <div className={style.hero__image}>
                        <img src="./images/workshop_image_1.jpg" alt="Bild: Hello Girl! Workshop."/>
                    </div>

                    <div className={style.hero__content}>
                        <h1 className="headline headline--h1">Hello Girl!</h1>
                        <p>Hello Girl! vill skapa förändring och bygga digital jämställdhet.</p>
                        <p>
                            I dagsläget är det färre kvinnor än män som arbetar med tekniska yrken och driver tillväxtbolag, startups, tech- och teknikföretag runtom i landet. 
                            Likaså är andelen kvinnor låg bland sökande till tekniska linjer på både gymnasie- och universitetsnivå. 
                            Allt detta påverkar näringslivets kreativa förmåga, innovationskraft och omställningsförmåga.
                        </p>
                        <p>Därför finns Hello Girl! Vi vill bygga förändring och skapa digital jämställdhet.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;