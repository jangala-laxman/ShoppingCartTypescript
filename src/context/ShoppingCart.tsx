import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../Components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    openCart:()=>void
    closeCart:()=>void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeCartQuantity: (id: number) => void
    cartQuantity:number
    cartItems : CartItem[]
}

type CartItem = {
    id: number
    quantity: number
}

const ShoppingcartContext = createContext({} as ShoppingCartContext)

export function useShoppingcart() {
    return useContext(ShoppingcartContext)
}


export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [isOpen, setisOpen] = useState(false)
    // const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])
    const cartQuantity = cartItems.reduce((quantity, item)=>item.quantity+quantity, 0)
    
    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function openCart(){ setisOpen(true)}
    function closeCart(){ setisOpen(false)}


    function increaseCartQuantity(id: number) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeCartQuantity(id: number) {
        setCartItems((currItems) => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return <ShoppingcartContext.Provider 
    value={{
        cartItems,
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeCartQuantity, 
        cartQuantity, 
        openCart, 
        closeCart }}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
    </ShoppingcartContext.Provider>
}