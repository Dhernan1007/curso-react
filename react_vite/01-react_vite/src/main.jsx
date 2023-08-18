//imr --> importa react
import React from 'react'
import ReactDOM from 'react-dom/client'
//import SecondApp from './SecondApp'
//import { FirstApp } from './FirstApp'
import './styles.css'
import TablaMultiplicar from './tabla_multiplicar/TablaMultiplicar'
//import {CounterApp} from './CounterApp'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    {/* para enviar numeros en react se hace con llaves */}
    {/* <FirstApp titulo = "Mi nombre es Maximo" mensaje = "comandante de la 10ma legión" numero = {58}/> */}
    {/* <CounterApp value={10}/> */}
      {/* <SecondApp/> */}
      <TablaMultiplicar/>
    </React.StrictMode>
)
