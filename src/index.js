import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom';
/*
	* Aquí vamos a envolver toda nuestra aplicación con el tipo de enrutado que queremos utilizar.
	(React router dom)
	* Usaremos la API de HTML5 History que permite cambiar el estado de las urls y sincronizar la UI con esos cambios. 
	(BrowserRouter)
*/
ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
  	</BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
