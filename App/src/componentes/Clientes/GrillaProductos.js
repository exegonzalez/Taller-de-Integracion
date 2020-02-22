import React from 'react'
import CardProduDos from './CardProduDos'
import CardCombos from './CardCombos'

import './Grillita.css'


const GrillaProductos = ({productos, combos, usuario, carrito}) => (
  <div >
    <div className ="grillita"  >
        <div  class="row row-cols-1 row-cols-md-3">
            
            {productos.map(producto=>(
              <CardProduDos
                producto = {producto}  
                usuario = {usuario}
                carrito = {carrito}
              />          
            ))} 

            {combos.map(combo=>(
              <CardCombos
                combo = {combo}
                usuario = {usuario}
                carrito = {carrito}  
              />          
            ))} 


        </div>
    </div>
    </div>
)

export default GrillaProductos;