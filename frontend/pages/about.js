import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>
        There are different kinds of products available in the store. Please
        click on each of the products to find more information regarding them.
      </h1>
      <h2>
        Categories available - men's clothing, electronics, women's clothing,
        jewelery
      </h2>

      <div className="backLink">
        <Link href="/">
          Click here to go back <u>Home</u>
        </Link>
      </div>
    </>
  );
}
