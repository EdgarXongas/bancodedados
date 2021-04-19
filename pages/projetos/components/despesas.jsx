import {useState,useEffect,useRef} from 'react'

const Despesas = ()=>{
    const [ClassName,setClassName] = useState('ipt-con hide')
    const [despesas,setDespesas] = useState([])
    const [total,setTotal] = useState(0)
    const [ipt,setIpt] = useState({
        novoNome: '',
        novoValor: '',
        data: ''
    })

    useEffect(()=>{
        if(localStorage.despesas!=undefined){
            setDespesas(JSON.parse(localStorage.despesas))
         }
    },[])

    useEffect(()=>{
        localStorage.setItem('despesas',JSON.stringify(despesas))
    },[despesas])
    
    useEffect(()=>{
        let totalDespesas = 0
        despesas.map(conta=>{
            if(!conta.quitada){
                totalDespesas+=conta.valor
            }
        })
        setTotal(totalDespesas)
    },[despesas])
    
    
    function handleRemove(id){
        const filteredDespesas = despesas.filter(conta=>{
            return conta.id != id
        })
        setDespesas(filteredDespesas)
    }
    
    function addItem(){
        if(ipt.novoNome && ipt.novoValor != '' && !isNaN(ipt.novoValor)){
            let novaConta = {
                nome: ipt.novoNome,
                valor: parseFloat(ipt.novoValor),
                data: ipt.data,
                quitada: false,
                id: Date.now()
            }
            setDespesas(despesas.concat(novaConta))
            setIpt({
                novoNome: '',
                novoValor: ''
            })
        }
    }

    function handleChange(e){
        setIpt({
            ...ipt,
            [e.target.dataset.nome]: e.target.value
        })
    }

    function handlePaid(id){
        const updatedDespesas = despesas.map(conta=>{
            if(conta.id==id) {
                conta.quitada = conta.quitada? false : true
                return conta
            }else{
                return conta
            }
        })
        setDespesas(updatedDespesas)
    }
    function ClassNameChange(){
        setClassName(ClassName=='ipt-con hide'?'ipt-con': 'ipt-con hide')
    }
    
    return(
        <div className="despesas">
            <h1>Despesas</h1>
            <div className={ClassName}>
                <div className="add-btn-con">
                    <button onClick={ClassNameChange}>+</button>
                </div>
                <div>
                    <input type="text" data-nome="novoNome" onChange={handleChange} value={ipt.novoNome} placeholder="Ex: Luz"/>
                    <input type="text" data-nome="novoValor" onChange={handleChange} value={ipt.novoValor} placeholder="Ex: R$ 50.00"/>        
                </div>
                <div>
                    <input type="date" data-nome="data" onChange={handleChange}/>
                    <input type="text" placeholder="Placeholder 2"/>
                </div>
                <div>
                    <input className="add-btn" type="button" onClick={addItem} value="Adicionar"/>
                </div>    
            </div>
            <ul>
                {despesas.map(conta=>{
                    return(
                        <li key={conta?.id} className={conta.quitada?'concluido':''}>
                            <div className="txt-con">
                                <p>{conta?.nome}</p>
                                <p>R$ {conta?.valor}</p>
                            </div>
                            <div className="btn-con">
                                {/* <input className="quitar" onClick={()=>{handlePaid(conta?.id)}} type="button" value="Quitar"/> */}
                                <img src="/imagens/checked.png" className="quitar" onClick={()=>{handlePaid(conta?.id)}}/>
                                <input className="excluir" onClick={()=>{handleRemove(conta?.id)}} type="button" value="X"/>
                            </div>
                            
                        </li>
                    )
                })}
            </ul>
            <p>Total: R$ {total}</p>
        </div>
    )
}

export default Despesas