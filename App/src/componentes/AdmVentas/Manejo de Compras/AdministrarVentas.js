import React, { useState } from 'react'
import swal from 'sweetalert'
import Email from './Email'

function AdministrarVentas({venta}){

    const [error, guardarError] = useState(false);

    const vent = {
        codigo : venta[0].codigo,
        total : venta[0].total,
        fecha : venta[0].fecha,
        hora : venta[0].hora,
        carrito : venta[0].carrito,
        usuario : venta[0].usuario,
        estado : venta[0].estado
    }

    return (
    
    <div className="col-md-8 mx-auto">  
        <div className="prueba">  
        <h1 className="title text-center mb-5 text-primary">Informacion de la venta</h1>
                {error ? <div className="alert alert-danger mt-2 mb-5 
                text-center">Todos los campos son obligatorios</div> : null}      
                <div className="mover">   
                <form className="mt-5 need-validation">
                    <div class="form-group">
                        <label className="col-sm-4 col-lg-2 col-form-label text-primary">Codigo</label>
                        <input type="number"
                        class="form-control"
                        id="" 
                        name="codigo"
                        readOnly="readOnly"
                        defaultValue={venta[0].codigo}
                        />
                    </div>

                    <div class="form-group">
                        <label className="col-sm-4 col-lg-2 col-form-label text-primary">Usuario</label>
                        <input type="email"
                            maxlength="255" 
                            class="form-control"
                            aria-describedby="emailHelp"
                            name="email"
                            readOnly="readOnly"
                            defaultValue={venta[0].usuario}
                        />
                    </div>

                    <div class="form-group">
                        <label className="col-sm-4 col-lg-2 col-form-label text-primary">Total</label>
                        <input type="number"
                        class="form-control"
                        id="" 
                        name="total"
                        readOnly="readOnly"
                        defaultValue={venta[0].total}
                        />
                    </div>
                    
                    <div class="form-group">
                    <label className="col-sm-4 col-lg-2 col-form-label text-primary">Fecha</label>
                        <input type="text"
                        class="form-control"
                        id="" 
                        name="fecha"
                        readOnly="readOnly"
                        defaultValue={venta[0].fecha}
                        />
                    </div>

                    <div class="form-group">
                        <label className="col-sm-4 col-lg-2 col-form-label text-primary">Hora</label>
                        <input type="text"
                        class="form-control" 
                        id="" 
                        name="hora"
                        readOnly="readOnly"
                        defaultValue={venta[0].hora}
                        />
                    </div>   

                    <div class="form-group">
                        <label className="col-sm-4 col-lg-2 col-form-label text-primary">Estado</label>
                        <input type="text"
                        class="form-control"
                        id="" 
                        name="estado"
                        readOnly="readOnly"
                        defaultValue={venta[0].estado}
                        />
                    </div>
                    
                    <Email venta = {venta}/>
                </form>
                </div>
            </div>
    </div>
    )
}

export default AdministrarVentas;



