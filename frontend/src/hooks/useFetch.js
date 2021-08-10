import { useState, useEffect } from 'react';

export default function useFetch(url)
{
    const [ data, setData ] = useState([]);

    useEffect( () => {
        const getFetch = async () => {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain"
                },
            });
            const json = await res.json();
            setData(json);
        } 
        getFetch();
        
    }, [url]);
 
    return data;
    
} 