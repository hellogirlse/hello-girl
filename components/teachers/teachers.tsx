import style from './teachers.module.scss';
import TeacherCard from '../teacherCard/teacherCard';

function Teachers(props) {
    return (
        <section className={style.teachers}>
            <div className={`container ${style.teachers__container}`}>
                <div
                    className={`page-decoration ${style.teachers__container__decoration}`}
                >
                    <fieldset>
                        <legend aria-hidden="true">Våra förebilder</legend>
                    </fieldset>
                </div>

                <div className={style.teachers__container__wrapper}>
                    <div className={style.teachers__title}>
                        <h2
                            className="headline headline--h2"
                            aria-label="This is what a programmer looks like"
                        >
                            <span
                                className={style.teachers__title__text}
                                aria-hidden="true"
                            >
                                This is what a programmer looks like
                            </span>
                            <span
                                className={style.teachers__title__decoration}
                                aria-hidden="true"
                            >
                                This is what a programmer looks like
                            </span>
                        </h2>
                    </div>

                    <TeacherCard
                        name="Daniela Andersson Waara"
                        position="Front-end utvecklare"
                        company=""
                        image="./images/daniela.jpg"
                    />
                    <TeacherCard
                        name="Emmelie Strand"
                        position="Front-end utvecklare & designer"
                        company=""
                        image="./images/emmelie.jpg"
                    />
                    <TeacherCard
                        name="Linnea Karlsson"
                        position="System- & Webbutvecklare"
                        company=""
                        image="./images/linnea.jpg"
                    />
                    <TeacherCard
                        name="Martina Ronnysdotter"
                        position="Systemutvecklare"
                        company=""
                        image="./images/martina.jpg"
                    />
                    <TeacherCard
                        name="Isabelle Sandhall Kantola"
                        position="UI/UX Designer"
                        company=""
                        image="./images/isabelle.jpg"
                    />
                    <TeacherCard
                        name="Gabriella Karlsson"
                        position="Systemutvecklare"
                        company=""
                        image="./images/gabriella.jpg"
                    />
                    <TeacherCard
                        name="Sophie Kores"
                        position="Front-end & Backend utvecklare"
                        company=""
                        image="./images/sophie.jpg"
                    />
                    <TeacherCard
                        name="Matilda Ulming"
                        position="Kommunikatör/Webbredaktör"
                        company=""
                        image="./images/matilda.jpg"
                    />
                    <TeacherCard
                        name="Emma Kihlberg"
                        position="Analytics specialist"
                        company=""
                        image="./images/emma.jpg"
                    />
                    <TeacherCard
                        name="Annie Ekblom"
                        position="Front-end utvecklare & designer"
                        company=""
                        image="./images/annie.jpg"
                    />
                    <TeacherCard
                        name="Loredana Isacsson"
                        position="UI/UX & Digital designer"
                        company=""
                        image="./images/loredana.jpg"
                    />
                    <TeacherCard
                        name="Gabriella Stenlund"
                        position="Systemutvecklare"
                        company=""
                        image="./images/gabriella_s.jpg"
                    />
                    <TeacherCard
                        name="Emma Urman"
                        position="UX Designer & Front-end utvecklare"
                        company=""
                        image="./images/emma_u.jpg"
                    />
                    <TeacherCard
                        name="Ida Franzén Leibnitz"
                        position="Account Executive"
                        company=""
                        image="./images/profile-fallback.jpg"
                    />
                    <TeacherCard
                        name="Victoria Dahlquist"
                        position="Konsultchef & Systemutvecklare"
                        company=""
                        image="./images/profile-fallback.jpg"
                    />
                </div>
            </div>
        </section>
    );
}
export default Teachers;
