import React, { Fragment } from 'react';
import Gasto from './Gasto';

const ControlPresupuesto = ({ presupuesto, restante }) => {
    
    return (
        <Fragment>
            <div className="alert alert-primary">
                Prresupuesto: $ {presupuesto}
            </div>
            <div className="alert">
                Restante: $ {restante}
            </div>  
        </Fragment>
    )
}

export default ControlPresupuesto
