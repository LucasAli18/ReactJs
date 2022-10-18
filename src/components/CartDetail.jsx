import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/Context";
import { useContext } from "react";
const CartDetail = () =>{

    const{cart,clear,removeItem,sumaTotal} = useContext(CartContext);
    let total = sumaTotal();


    return(
        <section>
        {cart.map(item=>
            <article className="d-flex  justify-content-center align-item-end" key={item.id}>
                <img src={item.img} alt={item.nombre} width="300px" />
                <section className="d-flex flex-column justify-content-center">
                    <p className="text-center">{item.nombre}</p>
                    <p>Productos en el carrito: {item.cantidad}</p>
                    <p>Sub Total : ${ item.precio * item.cantidad}</p>
                    <input type="button " className="btn remove" value="Remover" onClick={() =>removeItem(item.id)} readOnly />
                </section>
            </article> 
            )}
            <p className="fs-3 py-3 m-1">Total : ${total}</p>
            <input type="button " className="btn remove m-1" value="Borrar Todo" onClick={() =>clear()} readOnly />
            <Link to="/tienda"><input type="button " className="btn remove m-1" value="Seguir Comprando"  readOnly /></Link >
            <Link to="/checkout"><input type="button " className="btn remove m-1" value="Finaliza Compra" readOnly /></Link>

    </section>

    )
}

export default CartDetail;