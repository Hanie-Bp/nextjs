import React from "react";

const page = ({ params }) => {
  return <p className="text-center font-bold">{`admin id: ${params.id}`}</p>;
};

export default page;
