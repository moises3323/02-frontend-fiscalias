import { AbilityContext } from '../../app/context/permissions/AbilityContext';
import { createContextualCan } from '@casl/react';

/* 
 Crear consumidor del contexto ability,
 utilizado para envolver los componentes que requieran 
 proteccion por medio de permsisos
*/
const Can = createContextualCan(AbilityContext.Consumer);

export default Can;
