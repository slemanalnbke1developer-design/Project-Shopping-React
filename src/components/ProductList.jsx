import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "./ProductCard";
const ProductList = ({ products }) => {
  return (
    <Container className="my-4">
      <Row className="g-3 g-md-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};
export default ProductList;
