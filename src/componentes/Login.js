import React, { useState }  from 'react';
import { Link , useNavigate} from 'react-router-dom'; ///usenavigate ayuda a redireccionar   a Admin
import crud from '../conexiones/crud';
import swal from 'sweetalert'; 

const Login = () => {
  
  const navigate = useNavigate(); 

  const [usuario, setUsuario] = useState({
    email:'',
    password:''
  })

  const { email, password} = usuario;

  const onChange = (e) =>{
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }
  //componente email armar  el json
  const autenticarUsuario = async () =>{
    const data = {
      email: usuario.email,
      password: usuario.password
    }
    //hacer llamado a la ruta
    const response = await crud.POST(`/api/auth`, data);
      const mensaje = response.msg;
       // visualiza el mensaje devuelve el token que esta creado
      console.log(mensaje);
      //si el usuario no existe
      if(mensaje === 'el usuario no existe'){
        const mensaje = "el usuario no existe";
        swal({
          title: 'Error',
          text: mensaje,
          icon: 'error',
          buttons:{
            confirm:{
              text:'OK',
              value: true,
              visible: true,
              className: 'btn btn-danger',
              closeModal: true
            }
          }
        })
        //password incorrecto  validar  con una constante
      }else if(mensaje === 'password incorrecto'){
        const mensaje = "password incorrecto";
        swal({
          title: 'Error',
          text: mensaje,
          icon: 'error',
          buttons:{
            confirm:{
              text:'OK',
              value: true,
              visible: true,
              className: 'btn btn-danger',
              closeModal: true
            }
          }
        })
      }else{
         //dar seguridad al token para  ingresar
        //declarar variable con el token
        const jwt = response.token;
        //guardando e insertando el token
        localStorage.setItem('token', jwt);
        
        
        //redireccionar a la pantalla de admistrador
         navigate("/admin");
      }
  }
 // componente del boton
  const onSubmit = (e) => {
    e.preventDefault();
    autenticarUsuario();
  }
  
  
  
  return (
      <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
         <div className='md:w-2/3 lg:w-2/5'>
            <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
               Iniciar sesión Advance Technology
            </h1>

            <form 
              className='my-10 bg-white shadow rounded-lg p-10 '
               // aqui se llama la funcion  onSubmit
              onSubmit={onSubmit}
            >
              <div className='my-5'>
                <label className='uppercase text-gray-600 block text-xl font-bold' >Email</label>
                <input
                 // se adiciona el type id name value onChange
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Email de Registro'
                  className='w-full mt-3 p-3 border rounded-lg bg-gray-50'
                  value={email}
                  onChange={onChange}
                />

            <label className='uppercase text-gray-600 block text-xl font-bold' >password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder='Password de Registro'
                  className='w-full mt-3 p-3 border rounded-lg bg-gray-50'
                  value={password}
                  onChange={onChange}
                />
              </div>

              <input 
                type="submit"
                value="Iniciar Sesión"
                className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
            />
            <Link 
            to={"/crear-cuenta"} //invocar
            className="block text-center my-5 text-violet-600 uppercase text-sm"
            >Crear Cuenta</Link>

            </form>


         </div>
      </main>
    );
}

export default Login;