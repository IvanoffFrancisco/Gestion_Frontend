import React, { useState } from 'react'
import { useEffect } from 'react';

export default function Residentes() {

    const [data, setData] = useState([]);

    const obtenerDatosTabla=async(e)=>{
        const res=await fetch("http://localhost:4000/api/residente");
        const respuesta=await res.json();
        setData(respuesta);
    }

    useEffect(() => {
      obtenerDatosTabla();
    }, [setData])
    
    


  return (
    <div className='container aling-items-center mt-3'>
        <h2 className='text-center m-4'>Datos de Obras</h2>

        <table className="table">
            <thead>
                <tr>
                <th scope="col">codigo</th>
                <th scope="col">Frente</th>
                <th scope="col">Fondo</th>
                <th scope="col">Estado</th>
                <th scope="col">Vencimiento</th>
                <th scope="col">Dirección</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Domicilio</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(datos=>{
                        return(
                            <tr>
                                <th scope="row">{datos.id_residente}</th>
                                <td>{datos.frente}</td>
                                <td>{datos.fondo}</td>
                                <td>{datos.estado}</td>
                                <td>{datos.vencimiento_tramite}</td>
                                <td>{datos.direccion}</td>
                                <td>{datos.nombres}</td>
                                <td>{datos.apellidos}</td>
                                <td>{datos.domicilio}</td>
                            </tr>
                        )
                    })
                } 
            </tbody>
        </table>

    </div>
  )
}
