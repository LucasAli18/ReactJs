import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [cantidad, setCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onAdd);

    const decrementarCantidad = (valor) =>{
        if(valor > 0){
            setCantidad(valor);
        }
        
    }
    const aumentarCantidad = (valor) =>{
        if(valor<= itemStock){
            setCantidad(valor);
        }
    }

    const agregarProducto = () => {
        if(itemStock > 0){

            setItemStock( itemStock - cantidad);
            setItemAdd(itemAdd + cantidad);
        }
    }



    return(
        <div className="container py-5">
            
            <div className="row">
                    <div className="col-md-2 ">
                        <p className="text-center">Cerveza</p>
                        <div className="input-group">

                            <input type="button" className="form-control" value="-" onClick={() => {decrementarCantidad(cantidad - 1)}} />
                            <input type="text" class="form-control" value={cantidad} />
                            <input type="button" className="form-control" value="+" onClick={() => {aumentarCantidad(cantidad + 1)}} />

                        </div>
                        <div className="d-grid gap-2 pt-2">
                            <input type="button" className="btn btn-info" value="Agregar" onClick={() => {agregarProducto()}}/>
                        </div>
                        <p>Cervezas seleccionada: {itemAdd}</p>
                    </div>
            </div>
        </div>
    )

};

export default ItemCount;