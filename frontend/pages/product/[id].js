import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Products() {
  const router = useRouter();
  const { id } = router.query;
  const { category } = router.query;

  const [oneProd, setOneProd] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOneProd(data);
      });
  }, []);

  if (id && category) {
    return (
      <>
        <h1>
          Products for id: {id} &amp; category: {category}
        </h1>
        <div>
          <ul style={{ fontSize: "x-large" }}>
            <li>Title : {oneProd.title}</li>
            <li style={{ padding: "10px 0" }}>
              Image : <img src={oneProd.image} style={{ width: "100px" }}></img>
            </li>
            <li>Id : {oneProd.id}</li>
            <li>Category : {oneProd.category}</li>
            <li>Description : {oneProd.description}</li>
            <li>Price : {oneProd.price}</li>
            {/* <li>Rating : {oneProd.rating.rate}</li> */}
          </ul>
        </div>
        <div className="backLink">
          <Link href="/allProducts">
            Click here to go back to <u>Products List</u>
          </Link>
        </div>{" "}
      </>
    );
  } else {
    return <p>Id and/or Category Parameters Missing</p>;
  }
}
