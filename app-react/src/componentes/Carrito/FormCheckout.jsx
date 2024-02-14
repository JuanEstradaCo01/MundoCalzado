import React, { useState } from "react";

export default function FormCheckout({onCheckout}) {
    const [ userData, setUserData ] = useState({
        nombres: "",
        apellidos: "",
        email: "",
        direccion: ""
    })

    function submit(evt){
        evt.preventDefault();
        onCheckout(userData)
    }


    function inputChange(event){
        const input = event.target.value;
        const inputName = event.target.name;

        const newData = {...userData};
        newData[inputName] = input;
        setUserData(newData)
    }

    function limpiarFormulario(){
        setUserData({
            nombres: "",
            apellidos: "",
            email: "",
            direccion: ""
        })
    }

    return (
        <>  
            <div className="formContenedor">
                <h2 className="h2form">Ingresa los datos para finalizar:</h2>
                <form>
                     <div className="inputFinalizar">
                        <label for="nombre" >
                        <p>Nombres: </p>
                        </label>
                        <input name="nombres" type="nombre" placeholder="Ingresa tu nombre" onChange={inputChange} required/>
                    </div>
    
                    <div className="inputFinalizar">
                        <label for="apellido">
                            <p>Apellidos: </p>
                        </label>
                        <input  name="apellidos" type="apellido" placeholder="Ingresa tus apellidos"  onChange={inputChange} required/>
                    </div>
     
                    <div className="inputFinalizar">
                        <label for="email">
                        <p>Correo electronico: </p>
                        </label>
                        <input name="email" type="email" placeholder="example@email.com" onChange={inputChange} required/>
                    </div>
    
                    <div className="inputFinalizar">
                        <label for="direccion">
                        <p>Direccion de entrega: </p>
                        </label>
                        <input name="direccion" type="direccion" placeholder="Direccion de entrega" onChange={inputChange} required/>
                    </div>
    
                    <button className="borrarDatosForm" onClick={limpiarFormulario} type="reset">Cancelar</button>
    
                    <hr />

                    <button onClick={submit} className="botonComprar">Finalizar comprar</button> 
                </form>
            </div>    
        </>
    );
}