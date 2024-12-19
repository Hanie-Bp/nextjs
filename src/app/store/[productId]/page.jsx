"use client";

import { notFound } from "next/navigation";
import React from "react";

const page = ({ params }) => {
  const products = [
    { id: "1", name: "Product 1" },
    { id: "2", name: "Product 2" },
    { id: "3", name: "Product 3" },
  ];

  const product = products.find((obj) => obj.id === params.productId);
  if (product) {
    return <div>product-{params.productId}</div>;
  } else {
    return notFound();
  }
};

export default page;
