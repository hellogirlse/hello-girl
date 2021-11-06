import style from './textPrimary.module.scss';

function PrimarySection(props) {
    return (
        <section id="om-oss" className={`bg-primary ${style.primary}`}>
            <div className={`container ${style.primary__container}`}>

                <div className={`page-decoration ${style.primary__decoration}`}>
                    <fieldset>
                        <legend aria-hidden="true">Vår drivkraft</legend>
                    </fieldset>
                </div>

                <div className={style.primary__container__wrapper}>
                    <h2 className="headline headline--h2">Vi brinner för programmering</h2>
                    <p>
                        Idag är det endast 28% som arbetar inom IT-sektorn i Sverige kvinnor. 
                        Detta vill Hello Girl! ändra på. 
                        Syftet med Hello Girl! är att genom workshops sprida kunskap och öka intresset för programmering och tech bland tjejer och kvinnor. (Statistik tagen från IT- och Telekomföretagen)
                    </p>

                    <p>
                        Sedan starten 2018 har våra workshops verkat i flera omgångar, och totalt har över 80 kvinnor (!) testat på programmering och inspirerats genom Hello Girl! Deltagarna har varit tjejer och kvinnor i olika åldrar, nationaliteter och med bakgrunder. 
                        Vissa med funderingar om att söka en IT-utbildning, några med viljan om att göra ett karriärbyte och andra som vill får mer förståelse av tech för att öka sina chanser till jobb.
                    </p>
                </div>

            </div>
        </section>
    );
}
export default PrimarySection;