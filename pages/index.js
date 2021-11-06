import Head from 'next/head';
import Navigation from '../components/navigation/navigation';
import Hero from '../components/hero/hero';
import EventSection from '../components/eventSection/event';
import PrimarySection from '../components/primarySection/textPrimary';
import Quote from '../components/quote/quote';
import MediaText from '../components/mediaText/mediaText';
import Friends from '../components/friends/friends';
import TeacherText from '../components/teacherText/teacherText';
import Teachers from '../components/teachers/teachers';
import Footer from '../components/footer/footer';

export default function Home() {
    return (
        <>
            <Head>
                <title>Hello Girl!</title>

                <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
                />
                <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
                />
                <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c"></meta>
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>

            <Navigation/>

            <main className="main">
                <Hero/>
                <EventSection/>
                <PrimarySection title="Vi brinner för programmering!" text="En kodutbildning för tjejer – av tjejer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar libero risus, sodales tincidunt lectus pellentesque id. Duis at tempor justo. Etiam tristique consectetur odio, quis sagittis elit sollicitudin in. Quisque quis tempus urna, vitae aliquam justo. Sed aliquet vel dolor sed iaculis."/>
                <Quote quote="”Alla deltagare vill vara med och forma framtiden”"/>
                <MediaText/>
                <Friends/>
                <TeacherText/>
                <Teachers/>
            </main>

            <Footer/>
        </>
    );
}
