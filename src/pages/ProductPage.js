import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { Text, Div, Row, Col, Container, Button } from "atomize";

const ProductPage = () => {
  let { id } = useParams();
  const {
    fetchProductWithId,
    addItemToCheckout,
    product,
    openCart
  } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithId(id);
    return () => {};
  }, [fetchProductWithId, id]);

  if (!product.title) return <div>loading</div>;
  return (
    <Container bg="white">
      <Row>
        <Col>
          <Div
            bgImg={product.images[0].src}
            bgSize="cover"
            bgPos="center center"
            h="40rem"
          />
        </Col>
        <Col>
          <Text textSize="50px">{product.title}</Text>
          <Text
            textSize="20px"
            style={{ paddingTop: "15px", paddingBottom: "15px" }}
          >
            ${product.variants[0].price}
          </Text>
          <Button
            textAlign="center"
            onClick={() => {
              addItemToCheckout(product.variants[0].id, 1);
              openCart();
            }}
          >
            Add To Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
