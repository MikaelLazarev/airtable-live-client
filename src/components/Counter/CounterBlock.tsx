import React from "react";
import { Col, Container, Row } from "reactstrap";
import { CounterBox } from "./Counter";
import { Counter } from "../../core/counter";

export interface CounterBlockProps {
  data: Counter[];
}

export const CounterBlock: React.FC<CounterBlockProps> = ({ data }) => {
  return (
    <section className="section bg-primary">
      <Container>
        <Row id="counter">
          <CounterBox data={data} />
        </Row>
      </Container>
    </section>
  );
};

export default CounterBlock;
