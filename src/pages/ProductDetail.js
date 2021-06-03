import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  // params contain all data from url that start with `:`
  //  <Route path="/products/:productId">
  // example: domain.com/products/2
  // then `params.productId` is 2
  const params = useParams();

  console.log(params.productId);

  return (
    <div>
      <h1>Product Detail</h1>
      <h1>{params.productId}</h1>
    </div>
  );
}
