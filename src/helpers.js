export const revisarPresupuesto = (presupuesto, restante) => {
	
	let clase = ( ( presupuesto * 0.25 ) >= restante ) ?  'alert alert-danger' : 
				( ( presupuesto * 0.50 ) >= restante ) ?  'alert alert-warning':
				'alert alert-success';
	
	return clase;
}	
