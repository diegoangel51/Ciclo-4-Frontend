import React from 'react'; 
import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    //ancho,padin,fondo
    <aside className='md:w-60 lg:w-90 px-5 py-10 bg-slate-500'>
        <p className='text-xl font-bold'>Administrador</p>
         {/* boton */}
        <Link 
            to={"/crear-categorias"}
            //fondo, color texto maysculas neegrilla, toma todo el espacio, centrado esquinas redondas    
            className="bg-violet-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg"
            >Crear Categorias</Link>
       
       {/* dar espacio entre botones */}
       <div className='py-10'>
      <Link 
            to={"/admin"}
            className="bg-violet-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg"
            >Admin Categorias</Link>
      </div>
    </aside>
    );
}

export default Sidebar;