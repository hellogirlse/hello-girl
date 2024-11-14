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
                        <h2 className="headline headline--h2">
                            Kurser & Event
                        </h2>
                        {/* <p>Vi har för tillfället inga planerade event, håll utkik i våra sociala medier för kommande kurser & event.</p> */}
                        <p>
                            Är du nyfiken på att lära dig programmering?
                            <br />
                            Då är det här en utbildning för dig! Under våra
                            workshops går vi igenom grunderna i HTML, CSS och
                            JavaScript för att bygga en enkel och snygg
                            webbsida.
                        </p>
                    </div>

                    <EventCard
                        title="Inspirations-event i Jönköping"
                        date="27 november 2024"
                        link="https://l.messenger.com/l.php?u=https%3A%2F%2Finspirationskvall-med-hello-girl.confetti.events%2F&h=AT2sTchyJzzXE5fkk7WiY3YO7P93849d8AXCbj_TggsmqRBh3X6TaT765rxRvU56hua_NBa6G_xTMGiLwtHAkvxPred-3emniyZabDnvRhyGA6YBYtbyfj3sze_T3wCHzPahnS7V"
                        label="Mer om eventet"
                    />

                    <EventCard
                        title="Kurs i Jönköping"
                        date="Våren 2025"
                        link={null}
                        label={null}
                    />
                </div>
            </div>
        </section>
    );
}
export default EventSection;
