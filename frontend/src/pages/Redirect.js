import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch';

const RedirectToUrl = () => {
    const {url} = useParams();
    const [data, setData] = useState( null );
    const [error, SetError] = useState( null );

    let fetchdata = useFetch(`http://localhost:4000/get/${url}`);

    useEffect( ()=> {
        const {err, success} = fetchdata;

        if ( err ) return SetError(err);
        else if ( success ) {
            let link = ( success.includes("https://") ? "" : "https://" ) + success;
            setData(link);
            document.location.href = link;
        }
    }, [fetchdata])


    return(
        <>
            { error ? (<Redirect push to="/"/>) : null }
            
            {
                data 
                ? 
                <>
                    <h1 className="tittle">Redireccionando... <a href={data}>Si no ha sido redireccionado hazme click!</a> </h1>
                </> 
                : 
                <>
                    <h1 className="tittle" >Buscando el enlace... Espere un momento!</h1>
                </>            
            }
        </>
    );
}

export default RedirectToUrl;