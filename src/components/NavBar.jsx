import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/context";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import Home from "../pages/Home";
import { useState } from "react";
const NavBar = ({ search, setSearch }) => {
  const { totalItem } = useContext(CartContext);
  return (
    <>
      <BootstrapNavbar
        bg="light"
        expand="lg"
        className="shadow-sm py-4 rounded-bottom"
        style={{ background: "linear-gradient(145deg,#4b6cb7,#182848)" }}
      >
        <Container>
          <BootstrapNavbar.Brand
            as={Link}
            to="/"
            className="text-white fs-4
        fw-bold d-flex text-light align-items-center gap-2"
          >
            SLEMAN ALNBKE
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <input
            type="text"
            placeholder="search"
            value={search}
            className="form-control rounded-pill w-50 ms-5"
            onChange={(e) => setSearch(e.target.value)}
          />

          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link
                as={Link}
                to="/"
                className="px-3 text-light d-flex align-items-center gap-1"
              >
                <FaHome />
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/chackout"
                className="px-3 text-light d-flex align-items-center gap-1"
              >
                <FaShoppingCart />
                Cart
                {totalItem > 0 && (
                  <Badge
                    pill
                    bg="danger"
                    className="translate-middle"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {totalItem}
                  </Badge>
                )}
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>

        </Container>
      </BootstrapNavbar>
    </>
  );
};
export default NavBar;
