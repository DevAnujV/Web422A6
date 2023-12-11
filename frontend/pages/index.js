import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();

  return (
    <div style={{ textAlign: "center", fontSize: "x-large" }}>
      <br />
      Welcome to Our Virtual Store App <br />
      <br />
      Please checkout out Products page and add them to the Cart. Click here to
      checkout -
      <button
        style={{ fontSize: "large" }}
        onClick={() => router.push("/allProducts")}
      >
        Products
      </button>
    </div>
  );
};

export default index;
