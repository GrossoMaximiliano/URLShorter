import { useRef, useState } from 'react';
import InputURL from '../components/InputURL';
export default function Home()
{
    const [url, setUrl ] = useState('');
    const [err, setErr ] = useState(null);
    const urlRef = useRef();

    const resetUrl = () => { setUrl(''); setErr(null) }

    const copyLink = () => {
        
        var textField = document.createElement('textarea')
        textField.innerText = url;
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove();
        
        urlRef.current.innerText = "Link copiado!";
        
      }

    return ( 
        <>
            <p className="tittle">Comparte enlaces acortados</p>
            <InputURL setUrl={setUrl} resetUrl={resetUrl} setErr={setErr}></InputURL>
            
            <p className="subtitle">Crea y comparte enlaces acortados gratuitamente!</p>

            {url ? <div className="urlOut" > 
                <p>Link acortado! Tu link es: <span className="link" onClick={copyLink} ref={urlRef}>{url}</span></p> 
            </div> : null }

            {err ? <div className="urlOut_err" > <p>{err}</p> </div> : null }

                <br/><a href="https://github.com/GrossoMaximiliano" target="_blank" className="example">github.com/<span className="green">GrossoMaximiliano</span></a>
        </>
    )
}