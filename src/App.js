import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {
  
  // Definir el state
	const [presupuesto, guardarPresupuesto] = useState(0);
	const [restante, guardarRestante] = useState(0);
	const [agregarGasto, actualizarGasto] = useState(false)
	const [gastos, setGastos] = useState([]);
	const [mostrarPregunta, actualizarPregunta] = useState(true);
	const [gasto, setGasto] = useState({})
	const [crearGasto, guardarGasto] = useState(false)

	//useEffect que actualiza el restante
	
	useEffect(() => {
		
		// agregar Gasto
		if(crearGasto){
			setGastos([
				...gastos,
				gasto
			])
		};

		// resta del presupuesto actual
		if(agregarGasto){

			const presupuestoRestante = restante - gasto.cantidad;
			guardarRestante(presupuestoRestante);
		}	

		//resetear a false
		actualizarGasto(false);

		guardarGasto(false);			
		
	}, [gasto, crearGasto, gastos, restante, agregarGasto]);

	
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
							setGasto={setGasto}
							guardarGasto = { guardarGasto }
							actualizarGasto = { actualizarGasto }
	     				/>
	     			</div>

	     			<div className="one-half column">
	     				<Listado
							gastos={gastos}
						 />
						 <ControlPresupuesto
							 presupuesto = { presupuesto }
							 restante = { restante }
						 />
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
