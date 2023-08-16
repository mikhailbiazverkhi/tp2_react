import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchGetAllProductList from "./fetchGetAllProductList";
import { Spinner } from "react-bootstrap";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";

const CategoryDetails = () => {
  const { id } = useParams();

  const results = useQuery([], fetchGetAllProductList);

  if (results.isError) {
    return <h1>Error! Coffee details are not found</h1>;
  }

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  const products = results.data;

  return (
    <>
      <Row>
        {products.map(
          (product) =>
            product.category.id == id && (
              <Col className="colonne my-3" key={product.id}>
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  //description={product.description}
                />
              </Col>
            )
        )}
      </Row>
    </>
  );
};

export default CategoryDetails;
