import React, {Fragment, useState} from "react";
import { Card } from "react-bootstrap";
import {obtenerDatos} from "../Helper";


const Formulario = (props) => {

    const {userName ,setUserName, setDatos, guardarCargando} = props;
    let array = [];

    const  buscarTweets = async e => {
        e.preventDefault();
        if (userName === '') {
            //error
            alert('¡Debe ingresar un nombre!')
            return;
        } 
        guardarCargando(true);
        setTimeout( async ()  => {
            array = await obtenerDatos(userName,15); // Hardcodeado a 15. Cambiar en el futuro.
            setDatos(array)
            guardarCargando(false);
        },1500)
       
    }

    return (
        <Fragment>
            <Card style={{ width: '55rem', margin: 'auto',
                   marginBottom:'15px',
                   }}
                   
                   >
                   
            </Card>
            <form onSubmit={buscarTweets}>
                <div className="row">
                    <div>
                        <label >
                            Ingrese el @ del usuario que desea buscar sus Tweets
                        </label>
                        <input
                            className='u-full-width'
                            placeholder='Ejemplo: @IbaiLlanos'
                            type='text'
                            onChange={e => setUserName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type='submit'
                            value='buscar'
                            className='button-primary u-full-width'
                        />
                    </div>
                </div>
            </form>
        </Fragment>
    );
}

export default Formulario;