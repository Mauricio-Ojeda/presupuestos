import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
import shortid  from 'shortid';

const Formulario = ({ setGasto, guardarGasto, actualizarGasto }) => {

	//definir state
	const [nombre, guardarNombre] = useState('');
	const [cantidad, guardarCantidad] = useState(0);

	// state Error
	const [error, actualizarError] = useState(false);

	// handle on submit

	const agregarGasto = e => {

		e.preventDefault();

		// Validar
		if( nombre.trim() === ''  || cantidad < 1  || isNaN( cantidad )){

			actualizarError(true);
			return

		}

		//construir el gasto

		const gasto = {
				nombre,
				cantidad,
				id: shortid.generate()
			}
		

		// pasar el gasto

		setGasto( gasto );

		// para que se ejecute useEffect

		guardarGasto(true);	
		actualizarGasto(true);

		
		// Si pasa validacion
		actualizarError(false)

		//resetear Formulario
		guardarNombre('');
		guardarCantidad(0);
	}

	return (
		<form onSubmit={agregarGasto}>
			<h2>Agrega tus Gastos Aquí</h2>

			{error ? <Error mensaje="Error al cargar los datos"/> : null}
			<div className="campo">
				<label htmlFor="gasto">Nombre de Gasto
					<input 
						type="text" 
						className="u-full-width" 
						id="gasto"
						placeholder="Ej. Comida"
						value={nombre}
						onChange={ e => guardarNombre( e.target.value )}
					/>
				</label>
				
			</div>
			<div className="campo">
				<label htmlFor="cantidad">Cantidad Gasto
					<input 
						type="number" 
						className="u-full-width" 
						id="cantidad"
						placeholder="Ej. 1000"
						value={parseInt(cantidad, 10)}
						onChange={ e => guardarCantidad( e.target.value )}
					/>
				</label>
				
			</div>
			<input 
				type="submit"
				className="button-primary u-full-width"
				value= "Agregar Gasto"
			/>

		</form>
	)
}

Formulario.propTypes = {
	setGasto: PropTypes.func.isRequired,
	guardarGasto: PropTypes.func.isRequired,
	actualizarGasto: PropTypes.func.isRequired
}

export default Formulario
