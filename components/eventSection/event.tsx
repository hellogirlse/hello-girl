import style from "./event.module.scss";
import EventCard from "../eventCard/eventCard";
import Button from "../button/button";

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
            {/* <p>Vi har för tillfället inga planerade event, håll utkik i våra sociala medier för kommande kurser & event.</p> */}
            <p>
              Är du nyfiken på att lära dig programmering?
              <br />
              Då är det här en utbildning för dig! Under våra workshops går vi
              igenom grunderna i HTML, CSS och JavaScript för att bygga en enkel
              och snygg webbsida.
            </p>
          </div>

          <EventCard
            title="Workshop Jönköping"
            date="24-25 mars"
            link="https://hellogirlmars.confetti.events/"
          />
        </div>
      </div>
    </section>
  );
}
export default EventSection;
