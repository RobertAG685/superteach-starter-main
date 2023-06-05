import { Productos } from '@/components/Productos'
import React from 'react'
export const Tienda = () => {
  return (

    <section className="contenedor">
    
        <Productos />

        <div className="carrito" id="carrito">
      <div className="header-carrito">
        <h2>Tu Carrito</h2>
      </div>
      <div className="carrito-items">
        <div className="carrito-item">
          <img src="img/boxengasse.png" width="80px" xalt=""/>
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
  )
}

export default Tienda