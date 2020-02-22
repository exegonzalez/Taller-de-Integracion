import React from 'react'
import './vistaCombos.css'
import ColumnasComb from './ColumnasComb'
import './Combos.css'

const ListaCombos = ({combos, eliminarCombo}) =>(
    
    <div align="center">            
        <br></br>
          <div className="combos text-black-50">
            <table className="table table-striped table-hover table-condensed">
                <thead className="thead-dark">
                    <tr> 
                    <th scope="col"className="text text-center ">Codigo</th>
                    <th scope="col" className="text text-center">Nombre</th> 
                    <th scope="col"className="text text-center">Precio</th> 
                    <th scope="col" className="text text-center">F.Inicio</th> 
                    <th scope="col" className="text text-center">F.Final</th> 
                    <th scope="col" className="text text-center"></th>  
                    <th scope="col" className="text text-center"></th>  
                    <th scope="col" className="text text-center"></th>  
                    <th scope="col" className="text text-center"></th> 
                    <th scope="col" className="text text-center"></th> 
                    <th scope="col" className="text text-center"></th> 
                    <th scope="col" className="text text-center"></th> 
                    <th scope="col" className="text text-center"></th> 
                    </tr>
                </thead>
                <tbody>      
                    {/* <div className="listaProv"> */}
                    {combos.map(combo=>(
                        <ColumnasComb
                            key={combo.codigo}
                            combo={combo}
                            eliminarCombo={eliminarCombo}
                        />
                    ))}
                     {/* </div> */}
                 </tbody>
            </table>
        </div>
    </div>
  )
  export default ListaCombos;