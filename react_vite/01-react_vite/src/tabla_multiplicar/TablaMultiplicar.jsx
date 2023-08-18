import { useState } from 'react'
import style from './Tabla.module.css'

// const mensaje = 'calculando la tabla requerida...'
const TablaMultiplicar = () => {

  const [userNumber, setUserNumber] = useState(null)

  const handleNumber = async(event) => {
    setTimeout(() => {
      setUserNumber(event.target.value)
      
    }, 700);
       
  }

  const handleReset = ()=>{
    setUserNumber(null)
  }

  return (
    <>
      {userNumber === null ? (
        <>
          <p>ingresa el número correspondiente a la tabla que quieres consultar:</p>
          <input type='number' onChange={handleNumber} />

        </>) 
        : (
        <div className={style.divContainer}>
        <label>La tabla de multiplicar del {userNumber} es:</label>
        <br/>
        <br/>
        
        <table className={style.tabla}>
            <thead className={style.encabezado}>
              <>
              <tr>
                <th>N° </th>
                <th>Operacion</th>
                <th>Resultado</th>
                </tr>
              </>
            </thead>
            <tbody >
              {Array.from({ length: 10 }, (_, index) => (
                <tr key={index} className={style.bodyT}>
                  <td>{index + 1}</td>
                  <td>{index + 1} x {userNumber} </td>
                  <td>{(index + 1) * userNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        <button onClick={handleReset} className={style.boton}>Nueva Tabla</button>
        </div>
      )}
     
    </>
  )
}

export default TablaMultiplicar

/*
la parte complicada es cómo se hace. El Array.from({ length: 10 }, (_, index) => ...) crea una lista con 10 elementos, que es exactamente lo que queremos: una fila en la tabla para cada número del 1 al 10. Cada vez que se ejecuta la función (index) => ..., React crea una fila en la tabla.

En la primera celda de cada fila (<td>{index + 1}</td>), mostramos el número actual del índice más 1. Así conseguimos los números del 1 al 10 en la primera columna.

En la segunda celda de cada fila (<td>{(index + 1) * userNumber}</td>), mostramos el resultado de multiplicar el número actual del índice más 1 por el número que el usuario ingresó. Esto es lo que queríamos mostrar en la segunda columna.

La magia aquí es que el bucle Array.from() y la función (_, index) => ... generan automáticamente las filas de la tabla, calculando y mostrando los números y los resultados de las multiplicaciones como lo describí.
*/