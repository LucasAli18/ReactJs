export const products = [ 
    /* {"id":1,"nombre":"HUBBSI - IPA", "precio":200, "stock":5,"img":"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/hubbsi11-8479febb3cf9b5da9615972491316014-640-0.jpg","descripcion":"Si te dicen que sos un amargo por tomar nuestra Hubbsi India Pale Ale entonces están en lo correcto. Una dulce amargura cítrica de lúpulos norteamericanos que encantan hasta al más criollo. Un toque de amargor frutado para los paladares más exigentes. En Leben Brewing hacemos cerveza fácil de tomar. Sin atajos.","ibu":"50","alc":"5.5%", "categoria":"cervezas"},
    
    {"id":2,"nombre":"MOSAIC - LIGHT LAGGER", "precio":200, "stock":5,"img":"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/mosaic11-ddc5a636884f48f81715972491560753-640-0.jpg","descripcion":"Sabemos que has viajado mucho, tu perfil de Instagram no para de crecer y la cantidad de lugares que visitás son cada vez más y más, pero lo que no vas a superar es la cantidad de lúpulo Mosaic que tiene esta cerveza. Una cerveza sin filtrar de bajo amargor y muuucho aroma gracias a los toques mágicos del Dry·Hop. Seguime que te sigo. En Leben Brewing hacemos cerveza fácil de tomar.","ibu":"50","alc":"5.5%","categoria":"cervezas"},

    {"id":3,"nombre":"VAINILLA PORTER", "precio":300, "stock" :0,"img":"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/lata-vanilla1-7fed38b963122e76b116092724750193-640-0.jpg","descripcion":"Pusiste todo tu esmero en preparar un buen plato para agasajar a tus invitados y como si eso fuera poco te preguntan: “¿Qué hay de postre?” Bastardos inconformistas. Sacate el delantal y relajá que el trabajo lo hacemos nosotros. Nuestra Vanilla Porter es una cerveza con cuerpo, sabor a malta tostada y agregado de vainilla que le da el broche de oro a cualquier comida. En Leben Brewing hacemos cerveza fácil de tomar.","ibu":"50","alc":"5.5%","categoria":"cervezas"},
    {"id":4,"nombre":"HONEY", "precio":400, "stock":15,"img":"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/honey11-f6c9e8c27b1ca19b5b15994876402928-640-0.jpg","descripcion":"Más dulce que Ryan Gosling en la película 'Diario de una Pasión', este estilo cuenta con miel agregada en su cocción que se destaca con carácter en su aroma y sabor. Suave y con el toque justo de alcohol. Después de un romántico paseo en bote, lo mas dulce que te podemos ofrecer. ","ibu":"50","alc":"5.5%","categoria":"cervezas"},
    {"id":5,"nombre":"TUQUE A.A.A.", "precio":100, "stock":10, "img":"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/lata-tuque1-3ea973e0262f0ef31516092667678466-1024-10241-bc3c713059df46852c16092722783430-640-0.jpg","descripcion":"Carraspea, se acomoda el cuello de la camisa, mira al público y anuncia: 'Damas y caballeros, nos encontramos frente a una cerveza que busca balancear el dulce aroma de las maltas caramelizadas con los lúpulos cascade americanos! Incluso si sus paladares y olfato se encuentran finamente calibrados hasta podrán encontrar el aroma a lúpulo que se esconde detrás de estas exuberantes maltas.' En Leben Brewing hacemos cerveza fácil de tomar.","ibu":"50","alc":"5.5%","categoria":"cervezas"},
    {"id":6,"nombre":"LADY G - AMBER LAGGER", "precio":100, "stock":10, "img":"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/ladyg1-3eee6a3cba91ea1e7a15972490885174-640-0.jpg","descripcion":"¿Por qué elegirías este estilo en particular? ¿Será por su color rojizo, su dulzura o el moderado sabor a caramelo que descansa en tu garganta inmediatamente después del primer trago? No es necesario responder ahora, disfrutala y después nos contás. En Leben Brewing hacemos cerveza fácil de tomar.","ibu":"50","alc":"5.5%","categoria":"cervezas"},
    {"id":7,"nombre":"TIBAU - PILSNER", "precio":100, "stock":10, "img":"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/tibau1-a29428cb71d69155b415972491058453-1024-1024.jpg","descripcion":"Si elegis este estilo es porque te gusta ir a lo seguro, sin vueltas, directo al grano. Una cerveza rubia clásica. Si estuviesemos en un comercial de cerveza miraría a cámara y diría que es:  'Una cerveza limpia, con final seco, agregado de malta Pilsen y lúpulos nobles en perfecto balance' Ahhhh.. En Leben Brewing hacemos cerveza fácil de tomar.","ibu":"50","alc":"5.5%","categoria":"cervezas"},
    {"id":8,"nombre":"SIX PACK VARIADO", "precio":100, "stock":10, "img":"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/lata-variado-x611-4398bd07cc763111ca16111451800040-1024-1024.jpg","descripcion": 
    "Aprovecha y conoce varios de nuestros estilos en este mix pack multivariado, incluye: Hubbsi (IPA) Mosaic Light Lager Tibau (German Pilsner) Lady G (Amber Lager) Honey Beer Vanilla Porter ","ibu":"50","alc":"5.5%","categoria":"cervezas"},
    {"id":9,"nombre":"KIT DULCE", "precio":100, "stock":10, "img":"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/19052021125308_pack-dulce-2-bcee74a2ab45626ce116214400066874-1024-1024.jpg","descripcion":"Incluye: Pack x6 Honey Beer Pack x6 Vanilla Porter Pinta Leben 473ML","ibu":"50","alc":"5.5%","categoria":"promo"},
    {"id":10,"nombre":"KIT LUPADO", "precio":100, "stock":10, "img":"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/pack-lupulada11-544be1ded75c3775c616123663377311-1024-1024.jpg","descripcion":" Incluye: Pack x6 Hubbsi India Pale Ale Pack x6 Mosaic Light Lager Vaso Hubbsi","ibu":"50","alc":"5.5%","categoria":"promo"},
    {"id":11,"nombre":"KIT REFRESCANTE", "precio":100, "stock":10, "img":"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/03022021130400_pack-refescante-39232155a9a65ad9b516123683646435-1024-1024.jpg","descripcion":"Incluye:Pack x6 Tibau German Pilsner Pack x6 Lady G Amber Lager Vaso Pinta Leben Brewing ","ibu":"50","alc":"5.5%","categoria":"promo"},
    {"id":12,"nombre":"BOTELLON 1.9 LTS - VARIEDAD", "precio":100, "stock":10, "img":"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/botellon21-fbbe61d8c66c45df9515972478880511-1024-1024.jpg","descripcion":"Si te dicen que sos un amargo por tomar nuestra Hubbsi India Pale Ale entonces están en lo correcto. Una dulce amargura cítrica de lúpulos norteamericanos que encantan hasta al más criollo. Un toque de amargor frutado para los paladares más exigentes. En Leben Brewing hacemos cerveza fácil de tomar. Sin atajos.","ibu":"50","alc":"5.5%","categoria":"promo"} */
]