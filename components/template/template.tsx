import Head from "next/head";
import style from "./Template.module.scss";

import { ReactNode } from "react";
import { Row, Col } from "fluid-react";

interface TemplateProps {
  title?: string;
  active?: string;
  children?: ReactNode;
}
function Template(props: TemplateProps) {
  return (
    <div>
      <Head>
        <title>Hello Girl!{props?.title ? ` | ${props.title}` : ``}</title>

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
        <meta name="theme-color" content="#0f474f"></meta>
      </Head>
      <header className={style.header}>
        <img
          src="logo/logo.svg"
          alt="Hello Girl! Logotyp"
          className={style.logoHeader}
        />
      </header>
      <div className={style.pageWrapper}>{props.children}</div>
      <footer className={style.footer}>
        <div className={style.pageWrapper}>
          <Row>
            <Col>
              <img
                src="logo/logo.svg"
                alt="Hello Girl! Logotyp"
                className={style.logo}
              />
            </Col>
            <Col>
              <div className={style.footerContent}>
                <div className={style.socialMedia}>
                  <a href="https://www.linkedin.com/groups/12518492/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </div>
  );
}

export default Template;
