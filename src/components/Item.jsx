import React from "react";


const Item = ({id, nombre, imagen, precio}) =>{

    return (
            <div className="col-md-4 py-3" key={id}>
                    <div className="card">
                        <img src={imagen} className="card-img-top" alt={nombre}/>
                                <div className="card-body">
                                    <h5 className="card-title text-center">{nombre}</h5>
                                    <p className="card-text text-center">${precio}</p>
                                </div> 
                        </div>
                </div>
          )

}

export default Item;