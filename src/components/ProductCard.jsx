import { CartContext } from "../context/context";
import { useContext } from "react";
import {
  Col,
  Card,
  Button,
  Badge,
  CardBody,
  CardTitle,
  CardText,
} from "react-bootstrap";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} color={i < rating ? "#ffb400" : "#e8e1e1"} />
    ));
  };
  return (
    <Col lg={4} md={6} sm={12}>
      <Card
        className="shadow product-card border-0 rounded-4 overflow-hidden position-relative h-100"
        style={{
          transition: "transform 0.3s ease , box-shadow 0.3s ease",
          background: "linear-gradient(145deg,#f8f9aa,#e9ecef",
        }}
      >
        <div className="position-relative">
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.name}
            className="img-fluid "
            style={{
              height: "240px",
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
          <Badge className="position-absolute bg-danger top-0 start-0 m-2 fs-6 px-2 rounded-pill">
            🔥{product.offer} off
          </Badge>
          <Badge className="position-absolute bg-info bottom-0 end-0 m-2 fs-6 px-2 rounded-pill">
            {(
              (product.price - product.price * (product.offer / 100)) *
              1.25
            ).toFixed(2)}{" "}
            USD
          </Badge>
        </div>
        <CardBody className="text-center d-flex flex-column justify-content-between px-3"></CardBody>
        <div>
          <CardTitle className="fs-5 fw-bold text-dark mb-1 text-center">
            {product.name}
          </CardTitle>
          <CardText className="text-muted mb-2 px-2 text-center">
            {product.description}
          </CardText>
        </div>
        <div className="d-flex justify-content-center mb-2">
          {renderStars(product.rating || 4)}
        </div>
        <div className="text-decoration-line-through text-muted mb-2 small ms-5">
          {parseFloat(product.price * 1.25).toFixed(2)} USD
        </div>
        <Button
          onClick={() => addToCart(product)}
          variant="success"
          className="m-2 rounded-pill fw-semibold shadow-sm g-2 text-white d-flex align-items-center justify-content-center"
        >
          <FaShoppingCart className="mb-1 me-2" />
          Add to Cart
        </Button>
      </Card>
    </Col>
  );
};
export default ProductCard;
