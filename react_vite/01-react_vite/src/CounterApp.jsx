import { useState } from 'react';
import PropTypes from 'prop-types';  
export const CounterApp = ({value}) => {
 
  const [ counter, setCounter] = useState(value)
  const handleAdd = ()=>{
    setCounter(counter + 1)
    //setCounter((c)=> c + 1) --> es lo mismo
  }
  const handleRes = ()=>{
    setCounter(counter - 1)
  }
  const handleMult = ()=>{
    setCounter(counter * 2)
  }

  const handleReset = ()=> setCounter( value );

  return (
    <>
      <h1>Counter App</h1>
      <h2> {counter} </h2>
{/* NOTA: onClick={handleAdd} equivale a onClick={(event)=>handleAdd(event)} 
solo que al ser igual el arg de la funcion flecha y del manejador este se omite y se omite la referencia a la funcion flecha */}
      <button onClick={handleAdd}>
        +1
      </button>
      <button onClick={handleRes}>
        -1
      </button>
      <button onClick={handleMult}>
        x2
      </button>
      {/* el area-label es un tipo de etiqueta que me permite identificar el botón esto me ayudará en los test */}
      <button aria-label='btn-reset' onClick={handleReset}>
        Reset
      </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

