import React, {useState,useRef} from 'react';
import swal from 'sweetalert';

const Conversor = (props) =>{

   const btn = useRef('');
   const [resultado,setResultado] = useState('');
   const [ipt,setIpt] = useState('');
   const [moedaA,setMoedaA] = useState(props.moedaA);
   const [moedaB,setMoedaB] = useState(props.moedaB);

    async function getCurrency() {
        
        let url = `https://api.exchangeratesapi.io/latest?base=${moedaA}`;
        
        let promise = await fetch(url);
        let obj = await promise.json();
        let result = obj.rates[moedaB] * ipt;
        setResultado( Number(result)? result.toFixed(2) : '');
       
        if(isNaN(result)) {
            swal({
                title: 'Valor Inválido',
                text: 'Por favor, digite um valor.',
                icon: 'warning',
                button: {
                    text: 'Entendi',
                    className: 'alert-btn'
                }
            });
        }
    }
    function handleChange(e) {
        setIpt(parseFloat(e.target.value))
        if(e.key=="Enter"){
            btn.current.click();
        }
    }
    function swapCurrency() {
      /*   let a = moedaA;
        let b = moedaB;
        [a,b] = [b,a];
        setMoedaA(a);
        setMoedaB(b); */

        // Why this swap work???
        setMoedaA(moedaA===moedaA? moedaB : moedaA);
        setMoedaB(moedaB===moedaB? moedaA : moedaB);

        setTimeout(()=>{
           btn.current.click();
        },1)
    }

    return (
        <div className="conversor">
            <h2>{moedaA} para {moedaB}</h2>
            <div className="ipt-container">
                <div>
                    <label>{moedaA}</label>
                    <input type="text" onKeyUp={handleChange}/>
                </div>
                <span onClick={swapCurrency}><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/></svg></span>
                <div>
                    <label>{moedaB}</label>
                    <input type="text" data-disable="true" disabled value={resultado}/>
                </div>
            </div>
                <input type="button" onClick={getCurrency} value="Converter" ref={btn}/>
        </div>
    )
}
export default Conversor;
