import React from 'react'

export const ViewProductos = ({producto}) => {   //se pasa la informacion  por producto

    const {nombre, descripcion, stock, precio,imagen} = producto;  //arreglo
    return(
        <div
          //borde- espacio de  5-llene toda la caja -en el extremo informacion y el otro botones
            className='border-r p-5 flex justify-between items-center'
        >  
        {/* los items comiencen al inicio */}
            <div className='flex flex-col items-start'>
                {/* parrafo -tamaño de texto color texto*/}
                <p className='mb-1 text-xl text-black-50'>nombre:{nombre}</p>
                <p className='mb-1 text-xl text-black-50 uppercase'>descripción:{descripcion}</p>
                <p className='mb-1 text-xl text-black-50'>stock:{stock}</p>
                <p className='mb-1 text-xl text-black-50'>precio:{precio}</p>
                <img src={imagen} width="150" height="150"></img>
            </div>

            <div className='flex flex-col lg:flex-row gap-2'>
            <button
                          className="bg-sky-400 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg hover:bg-slate-400 transition-colors"
                          //onClick={() => handleModalEditarTarea(tarea)}
                      >Editar</button>
                <button
                          className="bg-cyan-400 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg hover:bg-slate-400 transition-colors"
                         // onClick={() => handleModalEliminarTarea(tarea)}
                      >Eliminar</button>
            </div>
        
        </div>
    )
}

export default ViewProductos