import React, {useState,useRef} from 'react';

const Conversor = (props) =>{

   const btn = useRef('');
   const [resultado,setResultado] = useState('');
   const [ipt,setIpt] = useState(0);
   const [moedaA,setMoedaA] = useState(props.moedaA);
   const [moedaB,setMoedaB] = useState(props.moedaB);

    async function getCurrency() {
        
        let url = `https://api.exchangeratesapi.io/latest?base=${moedaA}`;
        
        let promise = await fetch(url);
        let obj = await promise.json();
        let result = obj.rates[moedaB] * ipt;
        setResultado( Number(result)? (result.toFixed(2)).toString() : '');
       
    }
    function handleChange(e) {
        setIpt(parseFloat(e.target.value))
        if(e.key=="Enter"){
            btn.current.click();
        }
        console.log(typeof ipt);
    }
    function swapCurrency() {
        let a = moedaA;
        let b = moedaB;
        [a,b] = [b,a];
        setMoedaA(a);
        setMoedaB(b);

        // Why this swap work???
       /*  setMoedaA(moedaA===moedaA? moedaB : moedaA);
        setMoedaB(moedaB===moedaB? moedaA : moedaB); */

        setTimeout(()=>{
           btn.current.click();
        },1)
    }
    function getMoedaA(e){
        setMoedaA(e.target.value);
        setTimeout(()=>{
            btn.current.click();
         },1)
    }
    function getMoedaB(e) {
        setMoedaB(e.target.value);
        setTimeout(()=>{
            btn.current.click();
         },1)
    }

    return (
        <div className="conversor">
            <h2>Conversor</h2>
            <div className="ipt-container">
                <div>
                    <select value={moedaA} onChange={getMoedaA}>
                        <option value="BRL">BRL</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="CAD">CAD</option>
                        <option value="JPY">JPY</option>
                        <option value="RUB">RUB</option>
                        <option value="HKD">HKD</option>
                    </select>
                    <input type="text" placeholder="..." onKeyUp={handleChange}/>
                </div>
                <span onClick={swapCurrency}><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/></svg></span>
                <div>
                    <select value={moedaB} onChange={getMoedaB}>
                        <option value="BRL">BRL</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="CAD">CAD</option>
                        <option value="JPY">JPY</option>
                        <option value="RUB">RUB</option>
                        <option value="HKD">HKD</option>
                    </select>
                    <input type="text" data-disable="true" disabled value={resultado}/>
                </div>
            </div>
                <input type="button" onClick={getCurrency} value="Converter" ref={btn}/>
        </div>
    )
}
export default Conversor
