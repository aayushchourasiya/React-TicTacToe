import { Card, Button, Col } from "react-bootstrap";
const Cards = (props) => {
  return (
    <Col xs={4}>
      <Card style={{ width: "auto" , height : "200px" , textAlign:"center" , background : props.black , color: props.white}} className="my-2">
        <Card.Body>
          <Card.Title>{props.playerTurn}</Card.Title>
            <p style={{fontSize:"60px"}}>{props.mainItem}</p>
          <Button variant="light" onClick={props.buttonClick} disabled={props.disable}>Place</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export { Cards };
