import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { SiDatadog } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer-style bg-gray">
      <Container>
        <Row>
          <Col>
            <p>
              <FaRegCopyright className="mx-2" />
              2023 by Maus Company <br /> tributo a Donky
              <SiDatadog className="d-inline-block logo-rounded bg-color-white" />
            </p>
            <p>
              <a
                href="mailto:maumesmerin@gmail.com"
                className="text-color-black"
              >
                Contáctame
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
