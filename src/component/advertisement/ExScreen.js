import {
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Image,
  Card,
  Button,
  Form,
  Carousel,
} from "react-bootstrap";
import React from "react";
import house from "./house.png";
import inside from "./inside.png";
import inside1 from "./inside1.png";

export default function ExScreen() {
  return (
    <>
      <h1> House Rent Advertisement</h1>
      <Row>
        <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={house} alt="outside" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={inside} alt="inside1" />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={inside1} alt="inside2" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>164 Crumley St SE</h3>
            </ListGroupItem>
            <ListGroupItem>
              <h5>Richmond,VA 23171</h5>
            </ListGroupItem>

            <ListGroupItem>description: 2 Beds, Available now</ListGroupItem>
            <ListGroupItem>
              <i class="fa fa-mobile" aria-hidden="true"></i>866-641-9140
            </ListGroupItem>
            <ListGroupItem>
              <i class="fa fa-link" aria-hidden="true"></i>{" "}
              https://Advertisement.com
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong> ￡2,100</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Available:</Col>
                  <Col>2022/6-</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button className="btn-block" type="button">
                  Email
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* )} */}
    </>
  );
}
