import { Button, Container, Nav, Navbar as Navbars } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { Cart } from "react-bootstrap-icons"
import { useShoppingcart } from "../context/ShoppingCart"
const Navbar = () => {
    const { openCart, cartQuantity } = useShoppingcart()

    return (
        <Navbars sticky="top" className="bg-white shadow-sm mb-3">

            <Container >
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                    <Button className="bg-color-primary" onClick={openCart}><Cart/>
                        <div style={{ position: "absolute", top: 0, right: 0, transform: "translate(-25%, -25%)", border: "1px solid black", borderRadius: "50%", backgroundColor: "white", color: "black" }}>{cartQuantity}</div>
                    </Button>
            </Container>
            {
                cartQuantity > 0 && (
                    <Button className="rounded-circle" 
                    variant="outline-primary" 
                    style={{ width: "3rem", height: "3rem", position: "relative" }}>

                    </Button>
                )
            }
        </Navbars>
    )
}

export default Navbar