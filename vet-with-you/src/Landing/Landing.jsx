import { useState, useEffect } from "react";
import "./Landing.css";
import { FaPlus } from "react-icons/fa";
import sign from "../assets/247.png";
import estetica from "../assets/estetica.png";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ListGroup,
  Card,
} from "react-bootstrap";
import {
  PARRAFO_BIENVENIDA,
  LISTA_PARTICIPANTES,
  PARRAFO_DESCRIPCION,
  PREGUNTAS,
} from "./Strings";
import { Section } from "./Section";

export const Landing = () => {
  const [open, setOpen] = useState(false);
  const [idPregunta, setIdPregunta] = useState(0);
  useEffect(() => {
    setOpen(true);
  }, [idPregunta]);

  const landingPageSections = [
    {
      sectionStyles: {
        sectionStyle: "section-center bg-aliceblue-60",
        sectionTitleStyle: {
          Row: "row-regular",
          Col: "",
          h1: "text-large mb-5",
        },
        sectionBodyStyle: {
          Row: "row-regular my-3 py-3",
          Col: "col-12 col-sm-8 col-md-7 col-lg-7 col-xl-7 my-3",
        },
      },
      sectionElements: {
        sectionTitleText: "VET WITH YOU",
        sectionBodyCols: [
          <Card className="bg-aliceblue-60">
            <Card.Body>
              <p className="text-normal text-color-gray">
                {PARRAFO_BIENVENIDA}
              </p>
            </Card.Body>
          </Card>,
          <Button variant="dark" size="lg" className="button-interactive">
            ¡Unete!
          </Button>,
        ],
      },
    },
    {
      sectionStyles: {
        sectionStyle: "section-center bg-aliceblue-60",
        sectionBodyStyle: {
          Row: "row-regular my-3 py-3",
          Col: "col-12 col-md-6 col-lg-5 col-xl-5 my-3",
        },
      },
      sectionElements: {
        sectionBodyCols: LISTA_PARTICIPANTES.map((participantes) => (
          <Card className="bg-aliceblue-60">
            <Card.Body>
              <h2 className="text-mid text-color-gray animation-bounce">
                {participantes.icon}
                {participantes.nombre}
              </h2>
            </Card.Body>
          </Card>
        )),
      },
    },
    {
      sectionStyles: {
        sectionStyle: "section-center bg-gray",
        sectionBodyStyle: {
          Row: "row-regular mt-5",
          Col: "col-6 text-align-left text-vertical-center",
        },
      },
      sectionElements: {
        sectionBodyCols: [
          <Image src={estetica} className="landing-icon-md" />,
          <>
            <h1 className="text-mid">Estética Canina</h1>
            <p className="text-normal text-color-gray">{PARRAFO_DESCRIPCION}</p>
            <Button variant="dark" className="mt-3 button-interactive">
              Más acerca de...
            </Button>
          </>,
          <>
            <h1 className="text-mid">Atención Veterinaria 24/7</h1>
            <p className="text-normal text-color-gray">{PARRAFO_DESCRIPCION}</p>
            <Button variant="dark" className="mt-3 button-interactive">
              Más acerca de...
            </Button>
          </>,
          <Image src={sign} className="landing-icon-md" />,
        ],
      },
    },
    {
      sectionStyles: {
        sectionStyle: "section-center bg-aliceblue-60",
        sectionTitleStyle: {
          Row: "row-regular",
          Col: "",
          h1: "text-large mb-5",
        },
        sectionBodyStyle: {
          Row: "text-align-left my-5",
          Col: "",
        },
      },
      sectionElements: {
        sectionTitleText: "Preguntas Frecuentes",
        sectionBodyCols: [
          <ListGroup as="ol">
            {PREGUNTAS.map((pregunta) => (
              <ListGroup.Item
                as="li"
                variant="secondary"
                className="text-normal p-3"
                key={pregunta.id}
              >
                <Container>
                  <Row>
                    <Col className="col-3 col-md-2 col-lg-1">
                      <Button
                        variant="outline-dark"
                        onClick={() => setIdPregunta(pregunta.id)}
                      >
                        <FaPlus />
                      </Button>
                    </Col>
                    <Col className="col-9 col-md-10 col-lg-11">
                      <div className="fw-bold">{pregunta.pregunta}</div>
                      {open && pregunta.id === idPregunta && (
                        <div className="animation-fadeIn">
                          {pregunta.respuesta}
                        </div>
                      )}
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>
            ))}
          </ListGroup>,
        ],
      },
    },
    {
      sectionStyles: {
        sectionStyle: "section-center bg-gray",
        sectionTitleStyle: {
          Row: "row-regular",
          Col: "",
          h1: "text-large mb-5",
        },
        sectionBodyStyle: {
          Row: "row-regular",
          Col: "col-12",
        },
      },
      sectionElements: {
        sectionTitleText: "Registrate",
        sectionBodyCols: [
          <Button variant="dark" size="lg" className="mt-3 button-interactive">
            ¡Comencemos!
          </Button>,
        ],
      },
    },
  ];

  return (
    <>
      {landingPageSections.map(({ sectionStyles, sectionElements }) => (
        <Section
          sectionStyles={sectionStyles}
          sectionElements={sectionElements}
        />
      ))}
    </>
  );
};
