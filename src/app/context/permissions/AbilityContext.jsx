import { createContext } from 'react';
import { Ability } from '@casl/ability';
/* Habilidades que puede tener el usuario en la aplicación */
const ability = new Ability(/* [
  // {
  //   action: ["Read", "Create", "Delete"],
  //   subject: "Ventas",
  // },
  //  {
  //    action: ["manage"],
  //    subject: ["all"],
  //  },
  // {
  //   inverted: true,
  //   action: "delete",
  //   subject: "Post",
  //   conditions: { published: true },
  // },
] */);
/* Crear contexto para Ability */
export const AbilityContext = createContext();
/* Provider que que envuelve la aplicación */
export const AbilityProvider = ({ children }) => {
  return (
    <AbilityContext.Provider value={ability}>
      {children}
    </AbilityContext.Provider>
  );
};
