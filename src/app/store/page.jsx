"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import Link from "next/link";

const page = () => {
  const products = [
    { id: "1", name: "Product 1" },
    { id: "2", name: "Product 2" },
    { id: "3", name: "Product 3" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <Card key={product.id} style={{ width: "300px" }} elevation={3}>
          <CardContent>
            <Typography variant="h6" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={`/store/${product.id}`} passHref>
              <Button size="small" variant="contained" color="primary">
                View Details
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default page;
