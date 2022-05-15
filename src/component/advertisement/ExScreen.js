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
import logo from "../../logo.png";
import "./index.css";
export default function ExScreen() {
  return (
    <div class="container">
      <img alt="ima" className="imageframe" src={logo}></img>

      <h1 className="title">House Rent Advertisement</h1>
      <Row className="nowRow">
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
        <Col md={5}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>164 Crumley St SE</h3>
            </ListGroupItem>
            <ListGroupItem>
              <h5>Richmond,VA 23171</h5>
            </ListGroupItem>

            <ListGroupItem>
              <i class="fa fa-mobile" aria-hidden="true"></i>866-641-9140
            </ListGroupItem>
            <ListGroupItem>
              <i class="fa fa-link" aria-hidden="true"></i>{" "}
              https://Advertisement.com
            </ListGroupItem>
            <ListGroupItem>
              description: 2 Beds, Available now! Free WiFi We will ask you to
              start a load of laundry at departure. If you prefer not to, let us
              know and we can offer you the premium cleaning rate that does not
              involve a few quick check- out instructions. We like to save you
              money!:) There is a large parking pad for several cars that you
              will share with the other Airbnb guest next door. Be kind and
              leave space for at least one other car when you park. The bedrooms
              are upstairs. If you have mobility challenges then this home is
              not a good fit. Guests for long stays may wish to bring hangers.
              Late check-out will not be possible. Please book one more night if
              you need a late check-out. The major road nearby is Howell Mill so
              you may hear trucks or sirens from time to time.
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col>
          <Card md={6}>
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
    </div>
  );
}
