import React, {useContext} from "react";  
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { CartContext } from "../Context/Context";
import { useState } from "react";




const ItemDetail= ({item}) =>{

        const {addItem} = useContext(CartContext);
        const  [counter, setCounter] = useState(0);

        const onAdd = (item, counter) =>{
            setCounter(counter);
            addItem(item,counter);
        }

    return (
                
    <section className="row detalle  justify-content-center m-4">
        <img src={item.img} alt={item.nombre} className="col-5"/>
        <article key={item.id} className="col-5">
            <h3>{item.nombre}</h3>
            <h4>${item.precio}</h4>
            <p><span className="material-symbols-outlined">credit_card</span> <b>10</b> Cuotas de ${item.precio/10}<b></b></p>
            <p>{item.descripcion}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} counter={counter} setCounter={setCounter} item={item}/>
        </article>
        

    </section>
                 
    )
}





export default ItemDetail ;