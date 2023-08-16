import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Coffee({ id, name, pictureUrl /*description*/ }) {
  return (
    <Link to={`/coffee-details/${id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pictureUrl} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {/* <Card.Text>{description}</Card.Text> */}
          {/* <Button variant="danger">Supprimer</Button> */}
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Coffee;
