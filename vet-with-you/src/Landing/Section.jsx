import { Container, Row, Col } from "react-bootstrap";

export const Section = (props) => {
  const { sectionStyle, sectionTitleStyle, sectionBodyStyle } = props.sectionStyles;
  const { sectionTitleText, sectionBodyCols } = props.sectionElements;

  return (
    <section className={sectionStyle}>
      <Container>
        {sectionTitleText && (
          <Row className={sectionTitleStyle.Row}>
            <Col className={sectionTitleStyle.Col}>
              <h1 className={sectionTitleStyle.h1}>{sectionTitleText}</h1>
            </Col>
          </Row>
        )}
        <Row className={sectionBodyStyle.Row}>
          {sectionBodyCols.map((sectionBodyCol) => (
            <Col className={sectionBodyStyle.Col}>{sectionBodyCol}</Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
