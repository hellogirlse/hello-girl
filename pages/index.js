import styles from "../styles/Home.module.scss";

import Template from "../components/template/template";
import Hero from "../components/hero/hero";
import EventCard from "../components/card/eventCard";
import { Row, Col } from "fluid-react";

export default function Home() {
  return (
    <Template>
      <Hero></Hero>
      <Row>
        <Col xs="12">
          <EventCard title="Clubhouse" date="29 April, 2021"></EventCard>
        </Col>
      </Row>
    </Template>
  );
}
