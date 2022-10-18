import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const Provider = (props) => {
    
    const [cart, setCart] = useState([]);
    const addItem = (item , cantidad) =>{
        if(enElCarrito(item.id)){
            let producto = cart.find(x => x.id === item.id);
            cart[cart.indexOf(producto)].cantidad += 1;
            setCart([...cart]);
            console.log(cart);
        }else {
            setCart([...cart, {...item, cantidad:cantidad }]);          
        }
    } 
    const clear = () =>
    {
        setCart([]);
    }
    const removeItem = (id) =>
    {
        const expulsado = cart.filter((prod) =>prod.id !== id)
        setCart(expulsado);
    }
    const sumaTotal = ()=>
    {
        const copia = [...cart];
        let contador = 0;
        copia.forEach((producto) => {
            contador += (producto.cantidad * producto.precio);
        });
        return contador;
    };
    const enElCarrito = (id) =>{
        return cart.some(item =>item.id === id);
    }
    const cartTotal = () => {
        const copia = [...cart];
        let contador = 0;
        copia.forEach((producto) => {
            contador = contador + producto.cantidad;
        });
        return contador;
    }
    
    return(
        
            <CartContext.Provider value={{cart, addItem, clear,enElCarrito, cartTotal,removeItem,sumaTotal}}>
                {props.children}
            </CartContext.Provider>
        


    )
}

export default Provider;