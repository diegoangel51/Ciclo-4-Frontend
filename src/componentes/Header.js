import React from 'react'; 
import { useNavigate} from 'react-router-dom';

const Header = () => {

const navigate = useNavigate(); 

const cerrarSesion = () =>{
    localStorage.removeItem("token");
    navigate("/");
    }

  return (
    
    // padin o espacios entodas las direcciones eje y y eje y
    <header className='px-4 py-5 bg-white border-b'>
         {/* titulo: llena  todo el espacio y alineado izquierda md tamaño de la pantalla */}
        <div className='md:flex md:justify-between'>
        {/* tamaño, color,negrilla, centrado, mb espacio */}
        <h2 className='text-4xl text-violet-600 font-bold text-center mb-5 md:mb-0'>
            G13 Panel de administrador
        </h2>
         {/* colocar el boton flex ocupa todo el espacio  */}
        <div className='flex flex-col md:flex-row items-center gap-4'>
        <input 
                type="submit"
                value="Cerrar Sesión"
                className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
                onClick={cerrarSesion}
            />
        </div>
        </div>  
    </header>
   
    );
}

export default Header;