import React from "react";
import fondo from "../img/fondoLatas.jpg";
import {Link} from "react-router-dom";
import "./Home.css";


const Home = () =>{



    return(
        <section>
            <img src={fondo} alt="fondo" className="mb-5 home__fondo" />
            <article className="home__menu">
                <Link to="/tienda" className="col-4 "><p className="fs-1 text-center home__texto">Tienda</p><img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/201/642/products/packs_16_septiembre-011-655b75c3c37b448d2816633604672334-640-0.png" alt="cervezas"className="home__img" /></Link>
                <Link to={"/categoria/promociones"} className="col-4"><p className="fs-1 text-center home__texto">Promos</p><img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/201/642/products/2-agosto-22-2mesa-de-trabajo-11-2d54d049918531ffbd16594537507822-640-0.jpg" alt="promo" className="home__img"/></Link>
                <Link to="/contacto" className="col-4"><p className="fs-1 text-center home__texto">Contacto</p><img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/201/642/products/copa-ipa2-amb1-9bebfddc1d829dc69f16273087759911-640-0.jpg" alt="contacto"className="home__img" /></Link>
            </article>
        
        </section>
    )
}

export default Home;