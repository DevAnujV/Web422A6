import { useState, useEffect } from "react";
import { useAtom } from "jotai";

import { cartListAtom } from "../store";
import { productListAtom } from "../store";

import { useRouter } from "next/router";

export default function AllProducts() {
  const router = useRouter();

  const [products, setProducts] = useAtom(productListAtom);
  const [cartList, setCartList] = useAtom(cartListAtom);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  function addToCart(product) {
    setCartList([...cartList, product]);
  }

  return (
    <>
      <p className="introPara">
        Welcome to our store. We have all different products available for you
        to explore. <em>Click</em> <b>Images</b> below to explore further or add
        them to <b>Cart</b>
      </p>

      <div className="imagesGrid">
        {products.map((oneProd, index) => (
          // eslint-disable-next-line @next/next/no-img-element

          <>
            <div className="buttonAndImg" key={index}>
              <img
                className="gridimg"
                src={oneProd.image}
                alt={oneProd.title}
                onClick={() => {
                  router.push(
                    `/product/${oneProd.id}?id=${oneProd.id}&category=${oneProd.category}`
                  );
                }}
              />
              <button className="addtocart" onClick={(e) => addToCart(oneProd)}>
                Add to cart
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
