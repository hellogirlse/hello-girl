import style from './teachers.module.scss';
import TeacherCard from '../teacherCard/teacherCard';

function Teachers(props) {
    return (
        <section className={style.teachers}>
            <div className={`container ${style.teachers__container}`}>

                <div className={`page-decoration ${style.teachers__container__decoration}`}>
                    <fieldset>
                        <legend aria-hidden="true">Våra förebilder</legend>
                    </fieldset>
                </div>

                <div className={style.teachers__container__wrapper}>

                    <div className={style.teachers__title}>
                        <h2 className="headline headline--h2" aria-label="This is what a programmer looks like">
                            <span className={style.teachers__title__text} aria-hidden="true">This is what a programmer looks like</span>
                            <span className={style.teachers__title__decoration} aria-hidden="true">This is what a programmer looks like</span>
                        </h2>
                    </div>

                    <TeacherCard name="Daniela Andersson Waara" position="Front-end utvecklare" company="Avantime" image="./images/daniela.jpg"/>
                    <TeacherCard name="Emmelie Strand" position="Front-end utvecklare & designer" company="Sogeti" image="./images/emmelie.jpg"/>
                    <TeacherCard name="Linnea Karlsson" position="System- & Webbutvecklare" company="Toxic" image="./images/linnea.jpg"/>
                    <TeacherCard name="Martina Ronnysdotter" position="Systemutvecklare" company="Jordbruksverket" image="./images/martina.jpg"/>
                    <TeacherCard name="Isabelle Sandhall Kantola" position="UI/UX Designer" company="Consid" image="./images/isabelle.jpg"/>
                    <TeacherCard name="Gabriella Karlsson" position="Systemutvecklare" company="Jordbruksverket" image="./images/gabriella.jpg"/>
                    <TeacherCard name="Sophie Kores" position="Front-end & Backend utvecklare" company="Spot On" image="./images/sophie.jpg"/>
                    <TeacherCard name="Matilda Ulming" position="Kommunikatör/Webbredaktör" company="Moderskeppet" image="./images/matilda.jpg"/>
                    <TeacherCard name="Emma Kihlberg" position="Analytics specialist" company="Precis Digital" image="./images/emma.jpg"/>
                    <TeacherCard name="Annie Ekblom" position="Front-end utvecklare & designer" company="Consid" image="./images/annie.jpg"/>
                    <TeacherCard name="Loredana Isacsson" position="UI/UX & Digital designer" company="Pixels & Friends" image="./images/loredana.jpg"/>
                    <TeacherCard name="Ida Franzén Leibnitz" position="Account Executive" company="Salesforce" image="./images/profile-fallback.jpg"/>
                </div>

            </div>
        </section>
    );
}
export default Teachers;
