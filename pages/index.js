import React from 'react'
const Home =()=> {
    return(
<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link rel="stylesheet" href="estilo.css" />
  <title>Mercado de Relojes </title>
  <header>
    <h1>Mercado de Relojes con Solana</h1>
  </header>
  <section className="contenedor">
    {/* Contenedor de elementos */}
    <div className="contenedor-items">
      <div className="item">
        <span className="titulo-item">Box Engasse</span>
        <img src="img/boxengasse.png" alt="" className="img-item" />
        <span className="precio-item">0.9 SOL</span>
        <a href="solana">
        <button className="boton-item">Dirigete a pagar</button>
        </a>
      </div>
      <div className="item">
        <span className="titulo-item">English Horse</span>
        <img src="img/englishrose.png" alt="" className="img-item" />
        <span className="precio-item">0.8 SOL</span>
        <a href="solana">
        <button className="boton-item">Dirigete a pagar</button>
        </a>
      </div>
      <div className="item">
        <span className="titulo-item">Knock Nap</span>
        <img src="img/knocknap.png" alt="" className="img-item" />
        <span className="precio-item">0.7 SOL</span>
        <a href="solana">
        <button className="boton-item">Dirigete a pagar</button>
        </a>
      </div>
      <div className="item">
        <span className="titulo-item">La Night</span>
        <img src="img/lanight.png" alt="" className="img-item" />
        <span className="precio-item">0.6 SOL</span>
        <a href="solana">
        <button className="boton-item">Dirigete a pagar</button>
        </a>
      </div>
      <div className="item">
        <span className="titulo-item">Silver All</span>
        <img src="img/silverall.png" alt="" className="img-item" />
        <span className="precio-item">0.5 SOL</span>
        <a href="solana">
        <button className="boton-item">Dirigete a pagar</button>
        </a>
      </div>
      <div className="item">
        <span className="titulo-item">Skin Glam</span>
        <img src="img/skinglam.png" alt="" className="img-item" />
        <span className="precio-item">0.4 SOL</span>
        <a href="solana">
        <button className="boton-item">Dirigete a pagar</button>
        </a>
      </div>
      <div className="item">
        <span className="titulo-item">Midimix</span>
        <img src="img/midimix.png" alt="" className="img-item" />
        <span className="precio-item">0.3 SOL</span>
        <a href="solana">
        <button className="boton-item">Dirigete a pagar</button>
        </a>
      </div>
      <div className="item">
        <span className="titulo-item">Sir Blue</span>
        <img src="img/sirblue.png" alt="" className="img-item" />
        <span className="precio-item">0.9 SOL</span>
                <a href="solana">
          <button className="boton-item">Dirigete a pagar</button>
          </a>
      </div>
      <div className="item" href="solana.js">
        <span className="titulo-item">Middlesteel</span>
        <img src="img/middlesteel.png" alt="" className="img-item" />
        <span className="precio-item">0.8 SOL</span>
        <a href="solana">
        <button className="boton-item" >Dirigete a pagar</button>
        </a>
      </div>
      <div className="item">
        <span className="titulo-item">Box Engasse</span>
        <img src="img/boxengasse.png" alt="" className="img-item" />
        <span className="precio-item">0.7 SOL</span>
        <a href="solana">
        <button className="boton-item">Dirigete a pagar</button>
        </a>
      </div>
      <div className="item">
        <span className="titulo-item">English Horse</span>
        <img src="img/englishrose.png" alt="" className="img-item" />
        <span className="precio-item">0.6 SOL</span>
        <a href="solana">
        <button className="boton-item">Dirigete a pagar</button>
        </a>
      </div>
      <div className="item">
        <span className="titulo-item">Knock Nap</span>
        <img src="img/knocknap.png" alt="" className="img-item" />
        <span className="precio-item">0.7 SOL</span>
        <a href="solana">
        <button className="boton-item">Dirigete a pagar</button> 
        </a>
      </div>
    </div>
    {/* Carrito de Compras */}
    <div className="carrito" id="carrito">
      <div className="header-carrito">
        <h2>Tu Carrito</h2>
      </div>
      <div className="carrito-items">
        <div className="carrito-item">
          <img src="img/boxengasse.png" width="80px" alt="" />
          <div className="carrito-item-detalles">
            <span className="carrito-item-titulo">Box Engasse</span>
            <div className="selector-cantidad">
              <i className="fa-solid fa-minus restar-cantidad" />
              <input
                type="text"
                defaultValue={1}
                className="carrito-item-cantidad"
                disabled=""
              />
              <i className="fa-solid fa-plus sumar-cantidad" />
            </div>
            <span className="carrito-item-precio">$15.000,00</span>
          </div>
          <span className="btn-eliminar">
            <i className="fa-solid fa-trash" />
          </span>
        </div>
        <div className="carrito-item">
          <img src="img/skinglam.png" width="80px" alt="" />
          <div className="carrito-item-detalles">
            <span className="carrito-item-titulo">Skin Glam</span>
            <div className="selector-cantidad">
              <i className="fa-solid fa-minus restar-cantidad" />
              <input
                type="text"
                defaultValue={3}
                className="carrito-item-cantidad"
                disabled=""
              />
              <i className="fa-solid fa-plus sumar-cantidad" />
            </div>
            <span className="carrito-item-precio">$18.000,00</span>
          </div>
          <button className="btn-eliminar">
            <i className="fa-solid fa-trash" />
          </button>
        </div>
      </div>
      <div className="carrito-total">
        <div className="fila">
          <strong>Tu Total</strong>
          <span className="carrito-precio-total">$120.000,00</span>
        </div>
        <button className="btn-pagar">
          Pagar <i className="fa-solid fa-bag-shopping" />{" "}
        </button>
      </div>
    </div>
  </section>
</>
    );
};
export default Home
