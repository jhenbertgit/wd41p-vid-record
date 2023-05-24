import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const CustomHeader = () => {
  return (
    <header>
      <Navbar className="fw-bold mb-3 ps-3" color="secondary" dark>
        <NavbarBrand href="/">KodeGo Batch WD41-P</NavbarBrand>
      </Navbar>
    </header>
  );
};

export default CustomHeader;
