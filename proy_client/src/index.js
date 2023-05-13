import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



function n (){
  //Declaración de variable
  var numero=parseInt(document.getElementById("fac").value);
  //Llamado de variable
  console.log(factorial(numero));
}

//Declaración de una función
function factorial(numero){
  //Declaración y uso de condicionales
  if(numero!=0){
    var numero1=numero-1;
    //Declaración recursiva
    return (numero*factorial(numero1));
  }else{
    return 1;
  }
}