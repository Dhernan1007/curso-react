import PropTypes from 'prop-types';  

export const FirstApp = ({titulo, mensaje, numero})=>{
    return( 
        <>
    <h1 data-testid="test-title"> { titulo } </h1>
    <p>{mensaje}</p>
    <p>{mensaje}</p>
     <p>{numero}</p>
</>
)}

FirstApp.propTypes = {
    /* si lleva isRequired es porque pido que no sea omitido*/
    titulo: PropTypes.string.isRequired,
    mensaje: PropTypes.string.isRequired,
    numero: PropTypes.number,
}

/*
En caso de no pasar props puedo definir alguna por defecto
*/

FirstApp.defaultProps = {
    //titulo: 'No hay titulo',
    mensaje: 'sin cuerpo asociado',
    numero: 1
}