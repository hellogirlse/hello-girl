import style from './event.module.scss';
import EventCard from '../eventCard/eventCard';
import Button from '../button/button';

function EventSection(props) {
    return (
        <section id="event-och-kurser" className={style.event}>
            <div className={`container ${style.event__container}`}>

                <div className="page-decoration">
                    <fieldset>
                        <legend aria-hidden="true">Kurser & Event</legend>
                    </fieldset>
                </div>

                <div className={style.event__container__wrapper}>

                    <div className={style.event__content}>
                        <h2 className="headline headline--h2">Kurser & Event</h2>
                        <p>
                            Är du nyfiken på att lära dig programmering?
                            <br/>Då är det här en utbildning för dig! 
                            Under våra workshops går vi igenom grunderna i HTML, CSS och Javascript för att bygga en enkel och snygg webbsida.
                        </p>
                    </div>

                    <EventCard title="Workshop Jönköping" date="4-5 februari 2022" link="#"/>
                    <EventCard title="Workshop Stockholm" date="25-26 februari 2022" link="#"/>
                </div>

            </div>
        </section>
    );
}
export default EventSection;