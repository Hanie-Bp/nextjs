import Image from "next/image";
import React from "react";

const notFound = () => {
  return (
    <div>
      <Image src="/notfound.jpg" width={1600} height={210}></Image>
    </div>
  );
};

export default notFound;
