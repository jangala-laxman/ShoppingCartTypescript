import { Button, Card } from "react-bootstrap"
import { useShoppingcart } from "../context/ShoppingCart";

type StoreItemProps = {
    id:number,
    name:string,
    price:number,
    image:string
}


export function StoreItem({id, name, price, image}:StoreItemProps){
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeCartQuantity} = useShoppingcart()
    const quantity = getItemQuantity(id)

    return(
        <Card>
            <Card.Img variant="top" src={image} style={{objectFit:"cover"}}/>
            <Card.Body className="d-flex flex-column ">
                <Card.Title className="d-flex justify-content-between align-items-baseline ">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{price}</span>
                </Card.Title>
                <div>
                    {quantity === 0 ? <Button onClick={()=>increaseCartQuantity(id)}>Add to Cart</Button> : 
                    <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}}>
                    <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}}>
                         <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                        <div><span className="fs-3">{quantity}</span></div>
                        <Button onClick={()=>increaseCartQuantity(id)}>+</Button>
                    </div>
                    <Button variant="danger" size="sm" onClick={()=>removeCartQuantity(id)}>Remove from Cart</Button>
                    </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}