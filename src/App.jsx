import './App.css'
import Card from './components/Card'
import {useState} from "react";
import {Error} from './components/Error'

const nombreValidacion = (nombre) => {
  if (nombre.length >= 3 && nombre[0] !== " ") {
    return true;
  } else {
    return false;
  }
 };

const domicilioValidacion = (domicilio) => {
  const domicilioSinEspacios = domicilio.trim(); 
  if (domicilioSinEspacios.length >= 6) {
    return true;
  } else {
    return false;
  }
 };
 
function App() {
    const [state, setState] = useState({
    nombre: "",
    domicilio: "",
    errores: false,
    entregaOk: false
  })

  const handleChange = (e) => 
  setState(prev => ({
  ...prev,  [e.target.name]: e.target.value}));

  const handleSubmit = (e)=>{
    e.preventDefault()
    const nombreValido = nombreValidacion(state.nombre)
    const domicilioValido = domicilioValidacion(state.domicilio)

    if(!nombreValido || !domicilioValido){
      setState(prev => ({...prev, errores: true, entregaOk: false}))
    }
    else {
      setState(prev => ({...prev, entregaOk: true, errores: false}))
    }
  }

  return (
    <div className="App">
     <h1>Carga de estudiantes</h1>
     <form className='formulario' onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Escriba su Nombre" onChange={handleChange}/>
        <br></br>
        <input name="domicilio"  placeholder="Escriba su Domicilio" onChange={handleChange}/>
        {state.errores ? <Error/> : null}
        <br></br>
        <button className='boton' type="submit" >Enviar</button>
        <br></br>
     </form>
     {state.entregaOk ? <Card nombre={state.nombre} domicilio={state.domicilio} /> : null}

      
    </div>
  );
    
}

export default App
