import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";


const ItemListContainer = () =>{

    const [items, setItem] = useState([]);
    useEffect(()=> {

      const productos = [
        {"id":1,"nombre":"RUBIA", "precio":700, "imagen":"https://www.lavanguardia.com/files/image_449_220/uploads/2020/07/13/5f0c78598c987.jpeg"},
        {"id":2,"nombre":"APA", "precio":700, "imagen":"https://www.lavanguardia.com/files/image_449_220/uploads/2020/07/13/5f0c78598c987.jpeg"},
        {"id":3,"nombre":"SCOTISH", "precio":700, "imagen":"https://www.lavanguardia.com/files/image_449_220/uploads/2020/07/13/5f0c78598c987.jpeg"},
        {"id":4,"nombre":"IPA", "precio":700, "imagen":"https://www.lavanguardia.com/files/image_449_220/uploads/2020/07/13/5f0c78598c987.jpeg"},
        {"id":5,"nombre":"VAINILLA", "precio":700, "imagen":"https://www.lavanguardia.com/files/image_449_220/uploads/2020/07/13/5f0c78598c987.jpeg"},
        {"id":6,"nombre":"HONEY", "precio":700, "imagen":"https://www.lavanguardia.com/files/image_449_220/uploads/2020/07/13/5f0c78598c987.jpeg"}
      ];


      const promesa = new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve(productos);
        }, 2000);
      });
      promesa.then((respuesta)=>{
        setItem(respuesta);
      });

    },[]);


    return (
        <div className="container">
            <ItemList items={items}/>
        </div>
    )


}

export default ItemListContainer;