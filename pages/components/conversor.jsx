import React, {useState,useRef,useEffect} from 'react';

const Conversor = (props) =>{

   const btn = useRef('');
   const [resultado,setResultado] = useState('');
   const [ipt,setIpt] = useState('');
  
   let moedaA = props.moedaA; 
   let moedaB = props.moedaB;

    async function pegarValor() {
        
        let url = `https://api.exchangeratesapi.io/latest?base=${moedaA}`;

        let promise = await fetch(url);
        let valor = await promise.json();
        let result = valor.rates[moedaB] * ipt;
        setResultado( Number(result)? result.toFixed(2) : '');
        
    }
    function handleChange(e) {
        setIpt(parseFloat(e.target.value))
        if(e.key=="Enter"){
            btn.current.click();
        }
    }

    return (
        <div className="conversor">
            <h2>{moedaA} para {moedaB}</h2>
            <div className="ipt-container">
                <div>
                    <label>{moedaA}</label>
                    <input type="text" onKeyUp={handleChange}/>
                </div>
                <span>=</span>
                <div>
                    <label>{moedaB}</label>
                    <input type="text" data-disable="true" disabled value={resultado}/>
                </div>
            </div>
                <input type="button" onClick={pegarValor} value="Converter" ref={btn}/>
        </div>
    )
}
export default Conversor;