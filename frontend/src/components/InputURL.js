import React, { useRef} from 'react';

const InputURL = ({setUrl, resetUrl, setErr}) => {
    const inputRef = useRef();

    const Submit = async() => {
        if ( inputRef.current.value === "") return setErr("Usted debe insertar un link valido!");

        try
        {
            let data = await fetch(`http://localhost:4000/add`, { method: "POST", headers: { 'Content-Type': 'application/json'  }, body: JSON.stringify({ url: inputRef.current.value }) });
            let { err, success } = await data.json();
            setUrl(`http://localhost:3000/#/${success}`);
            setErr(err);
        }
        catch(e) {
            setErr("Ha ocurrido un error al conectarnos al backend.")
        }
    }

    return(
        <div className="input_elements">
            <input ref={inputRef} type="text" onChange={resetUrl} />
            <button onClick={Submit}>ACORTAR</button>
        </div>
    );
}

export default InputURL;