/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Items from "./Items";
import { Link } from "react-router-dom";

// import Coffee from "./Coffee";

function ResultsList({ type = "coffees" }) {
  const [products, setProducts] = useState([]);

  const COFFEES = "coffees";

  useEffect(() => {
    fetch(`https://insta-api-api.0vxq7h.easypanel.host/${type}`)
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, [type]);

  return (
    <main>
      <div className="d-flex justify-content-between">
        <h1 className="my-3">Liste du {type}</h1>
        <div className="d-flex align-items-center">
          {type === COFFEES && (
            <Link to={"/ajouter/"}>
              <Button variant="primary">Ajouter du café</Button>
            </Link>
          )}
        </div>
      </div>

      <Items type={type} products={products} />

      {/* <pre>{JSON.stringify(coffees, null, 2)}</pre> */}
    </main>
  );
}
// }

export default ResultsList;
