import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';


function App() {
  
  // Definir el state
	const [presupuesto, guardarPresupuesto] = useState(0);
	const [restante, guardarRestante] = useState(0);
	const [gastos, setGastos] = useState([])

	const [mostrarPregunta, actualizarPregunta] = useState(true)

	// cuando agregue gastos
	const agregarNuevoGasto = gasto => { 
		setGastos([
			...gastos,
			gasto
		])
	}
  return (
    <div className="container">
     <header>
     	<h1>Gasto Semanal</h1>

     	<div className="contenido-principal contenido">
     		{mostrarPregunta ? 
     			(

     				<Pregunta
		     			guardarPresupuesto={guardarPresupuesto}
		     			guardarRestante={guardarRestante}
		     			actualizarPregunta={actualizarPregunta}
     				/>

     			)	:
     			(
     			<div className="row">
	     			<div className="one-half column">
	     				<Formulario
							agregarNuevoGasto={agregarNuevoGasto}
	     				/>
	     			</div>

	     			<div className="one-half column">
	     				2
	     			</div>
     			
     			</div>
     	
     			)
     		}
     		
     	</div>	
    </header>
   </div>
  );
}

export default App;
