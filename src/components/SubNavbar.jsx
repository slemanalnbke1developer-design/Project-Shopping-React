import React, { useState } from "react";
import { Container, Nav, Button, Collapse } from "react-bootstrap";
import { FaList, FaChevronDown, FaChevronUp } from "react-icons/fa";
const SubNavbar = () => {
  const [open, setOpen] = useState(false);
  const categories = [
    { name: "Hot Deals", href: "#" },
    { name: "Categories", href: "#" },
    { name: "Laptops", href: "#" },
    { name: "Smartphones", href: "#" },
    { name: "Cameras", href: "#" },
    { name: "Accessories", href: "#" },
  ];
  return (
    <div className="bg-light border-bottom pb-2 mt-1">
      <Container fluid="md">
        <Nav className="d-none d-lg-flex justify-content-center gap-4">
          {categories.map((cat, index) => (
            <Nav.Link
              key={index}
              href={cat.href}
              className="text-secondary fw-semibold p-0"
            >
              {cat.name}
            </Nav.Link>
          ))}
        </Nav>
        <div className="d-lg-none d-flex justify-content-between align-items-center px-2">
          <Button
            variant="outline-dark"
            size="sm"
            onClick={() => setOpen(!open)}
            aria-controls="category-collapse-menu"
            aria-expanded={open}
            className="d-flex align-items-center gap-2 bg-primary p-2 fs-3"
          >
            <FaList/>
            {open ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
          </Button>
        </div>
        <Collapse in={open} className="d-lg-none">
          <div id="category-collapse-menu" className="pt-2">
            <Nav className="flex-column gap-2 bg-white p-3 rounded shadow-sm border mt-2">
              {categories.map((cat, index) => (
                <Nav.Link
                  key={index}
                  href={cat.href}
                  onClick={() => setOpen(false)}
                  className="text-dark fw-semibold border-bottom pb-2"
                >
                  {cat.name}
                </Nav.Link>
              ))}
            </Nav>
          </div>
        </Collapse>
      </Container>
    </div>
  );
};

export default SubNavbar;
