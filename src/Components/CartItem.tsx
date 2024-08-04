import { Button, Stack } from "react-bootstrap"
import { useShoppingcart } from "../context/ShoppingCart"
import items from '../data/items.json'
type CartItemProps ={
    id:number
    quantity:number
}

export default function CartItem({id, quantity}:CartItemProps){
    
    const {removeCartQuantity} = useShoppingcart()
    const item = items.find(i=>i.id===id)
    if(item == null) return null
    
    return(
        <Stack direction="horizontal" gap={2}>
            <img src={item?.image} style={{width:'125px', height:'75px', objectFit:"cover"}}/>
            <div className="me-auto">
                <div>
                    {item.name} {quantity>1 && <span className="text-muted" style={{fontSize:'.75rem'}}>{quantity}</span>}
                </div>
            </div>
            <div>{item?.price*quantity}</div>
            <Button variant="outline-danger" size="sm" onClick={()=>removeCartQuantity(item.id)}>X</Button>
        </Stack>
    )
}