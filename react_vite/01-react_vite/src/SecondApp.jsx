/* si una variable no se usa para afectar a 
un estado o para alguna funcion interna
entonces se coloca fuera del componente
esto para evitar que se rerrenderice */

const newMessage = {
    message: 'Hola compatriota',
    title: 'Darwin'
};
const SecondApp = () => {
  /*cuando se usan fragment estos no se renderizan
  en cambio un div si, y esto puede afectar
  los estilos más adelante*/
    return (
    <>
      <code>{JSON.stringify( newMessage )}</code>
    </>
  )
}
/*
React solo me permite renderizar un objeto si antes
aplico JSON.stringify y paso como argumento el obj
que quiero renderizar
*/
export default SecondApp
