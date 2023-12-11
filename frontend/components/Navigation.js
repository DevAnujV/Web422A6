import { Container, Navbar, Nav } from "react-bootstrap";
import { useAtom } from "jotai";
import { cartListAtom } from "../store";
import Link from "next/link";
import { useRouter } from "next/router";
import { readToken, removeToken } from "../lib/authenticate";

export default function Navigation(props) {
  const [cartList, setCartList] = useAtom(cartListAtom);

  const router = useRouter();
  let token = readToken();

  function logout() {
    removeToken();
    router.push("/");
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand>
            <img
              src="/coverpic.jpg"
              alt="alal"
              style={{ width: "200px", height: "50px" }}
            ></img>
            {token && <> Welcome {token.userName}</>}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Home</Nav.Link>
            </Link>
            {token && (
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link>About</Nav.Link>
              </Link>
            )}
            {token && (
              <Link href="/contact" passHref legacyBehavior>
                <Nav.Link>Contact</Nav.Link>
              </Link>
            )}
            {token && (
              <Link href="/dashboard" passHref legacyBehavior>
                <Nav.Link>Dashboard</Nav.Link>
              </Link>
            )}
            {token && (
              <Link href="/dashboard/preferences" passHref legacyBehavior>
                <Nav.Link>Dashboard Preferences</Nav.Link>
              </Link>
            )}
            {token && (
              <Link href="/allProducts" passHref legacyBehavior>
                <Nav.Link>Products</Nav.Link>
              </Link>
            )}
            {token && (
              <Link href="/cart" passHref legacyBehavior>
                <Nav.Link>
                  Shopping Cart<span>({cartList.length})</span>
                </Nav.Link>
              </Link>
            )}
          </Nav>
          <Nav className="ml-auto">
            {!token && (
              <Link href="/login" passHref legacyBehavior>
                <Nav.Link>Login</Nav.Link>
              </Link>
            )}
            {token && <Nav.Link onClick={logout}>Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
