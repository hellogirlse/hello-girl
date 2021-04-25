import style from "./Hero.module.scss";

import { Row, Col } from "fluid-react";

function Hero(props) {
  return (
    <section className={style.hero}>
      <Row>
        <Col md="6" xs="12">
          <div className={style.heroImg}>
            <img src="img/gro36-hello-girl-2-1.jpg" alt="Hello Girl! event" />
          </div>
        </Col>
        <Col md="6" xs="12">
          <div className={style.heroBlock}>
            <div className={style.textBlock}>
              <h1>Hello Girl!</h1>
              <p>
                Kodutbildningar för tjejer sprida kunskap och öka intresset för
                programmering och tech. Behovet var tydligt: vi behöver få fler
                tjejer och kvinnor att söka sig till tech-branschen och välja
                studier inom teknik och IT.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}
export default Hero;
