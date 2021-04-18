/* import React, {useState,useRef,useEffect} from 'react';

const Conversor = (props) =>{
    const btn = useRef('');
    const [resultado,setResultado] = useState('');
    const [ipt,setIpt] = useState(0);
    const [moedaA,setMoedaA] = useState(props.moedaA);
    const [moedaB,setMoedaB] = useState(props.moedaB);
    const [codes,setCodes] = useState('')
    const [something,setSomething] = useState(false)

    useEffect(()=>{
        let obj = props.rates
        let arr = []
        for(let key in obj){
            arr.push(obj[key])
        }
        setCodes(arr)
        setSomething(true)
    },[])
    
    async function getCurrency() {
        let rates = props.rates
        let result = (parseFloat(rates[moedaA].bid))*ipt
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
                        {something && codes.map((rate,k)=>{
                            return(
                                <option value={rate?.code} key={k} >{rate?.code}</option>
                            )
                        })}
                    </select>
                    <input type="text" placeholder="$$$" onKeyUp={handleChange}/>
                </div>
                <span>=</span>
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
 */