import React, {useState,useRef,useEffect} from 'react';

const Conversor = (props) =>{
    console.log(props.rates.jsn)
    const btn = useRef('');
    const [resultado,setResultado] = useState('');
    const [ipt,setIpt] = useState(0);
    const [moedaA,setMoedaA] = useState(props.moedaA);
    const [moedaB,setMoedaB] = useState(props.moedaB);
    const [rates,setRates] = useState('')
    const [something,setSomething] = useState(false)
    let obj = props.rates.jsn
    
    useEffect(()=>{
        let arr = []
        for(let key in obj){
            arr.push(obj[key])
        }
        setRates(arr)
        setSomething(true)
    },[])
    
    async function getCurrency() {
        
        let rates = props.rates.jsn
        let result = ipt*(parseFloat(rates[moedaA].bid))
        setResultado( Number(result)? (result.toFixed(2).toString()):'')   

    }
    function handleChange(e) {
        setIpt(parseFloat(e.target.value))
        if(e.key=="Enter"){
            btn.current.click();
        }
    }
    function swapCurrency() {
        let a = moedaA;
        let b = moedaB;
        [a,b] = [b,a];
        setMoedaA(a);
        setMoedaB(b);
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
                        {something && rates.map((rate,k)=>{
                            return(
                                <option value={rate?.code} key={k} >{rate.code}</option>
                            )
                        })}
                    </select>
                    <input type="text" placeholder="..." onKeyUp={handleChange}/>
                </div>
               {/*  <span onClick={swapCurrency}><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/></svg></span> */}
                <span>&nbsp;=&nbsp;</span>
                <div>
                    <select>
                        <option>BRL</option>
                    </select>
                    <input type="text" data-disable="true" disabled value={resultado}/>
                </div>
            </div>
                <input type="button" onClick={getCurrency} value="Converter" ref={btn}/>
        </div>
    )
}
export default Conversor
