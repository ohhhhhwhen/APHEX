import React, { useContext } from "react";
import { Container, Anchor } from "atomize";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

const Navbar = () => {
  const { openCart } = useContext(ShopContext);

  return (
    <Container bg='grey' d="flex" flexDir="row" p="2rem" justify="space-between">
      <Link style={{ color: '#000000' }} to="/">HOME</Link>
      <Link style={{ color: '#000000' }} to="/gallery">GALLERY</Link>
      <Link style={{ color: '#000000' }} to="/artwork">ARTWORK</Link>
      <Link style={{ color: '#000000' }} to="/products">SHOP</Link>
      <Anchor style={{ color: '#000000' }}  onClick={() => openCart()}>Cart</Anchor>
    </Container>
  );
};

export default Navbar;