import React,{Fragment, useState} from 'react'
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

	//definir state
	const [cantidad, guardarCantidad] = useState(0)

	//state error
	const [error, actualizarError] = useState(false);

	// Funcion que lee el presupuesto
	const definirPresupuesto = e => {
		guardarCantidad(parseInt(e.target.value, 10));
	}



	// Submit para definir el presupuesto
	const agregarPresupuesto = e => {
		e.preventDefault();

		//validar
		if(cantidad < 1 || isNaN( cantidad )){
			actualizarError(true);
			return;
		}
		
		// Si se pasa la validacion
		actualizarError(false);
		guardarPresupuesto( cantidad );
		guardarRestante( cantidad );
		actualizarPregunta(false);


	}
	return (
		<Fragment>
			<h2>Coloca tu Presupuesto</h2>

			 {error ? <Error mensaje="Debes Colocar un Numero Mayor a 0"/> : null}

			<form 
				onSubmit={agregarPresupuesto}
			>
				<input 
					type="number" 
					className="u-full-width"
					placeholder="Coloca tu presupuesto"
					onChange={definirPresupuesto}
				/>
				<input
					type="submit"
					className="button-primary u-full-width"
					value="Definir Presupuesto"
				/>
			</form>
		</Fragment>
	)
}

Pregunta.propTypes = {
	guardarPresupuesto: PropTypes.func.isRequired,
	guardarRestante: PropTypes.func.isRequired,
	actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta
