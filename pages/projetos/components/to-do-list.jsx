import {useState,useEffect,useRef} from 'react'

const ToDoList = ()=>{
    const [list,setlist] = useState([])
    const [ipt,setIpt] = useState('')
    const btn = useRef('')

    useEffect(()=>{
        if(localStorage.userNotes!=undefined){
           setlist(JSON.parse(localStorage.userNotes))
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('userNotes',JSON.stringify(list))
    },[list])

    function addItem(){
        if(ipt.length>0){
            let novoItem = {
                text: ipt,
                concluido: false,
                id: Date.now()
            }
            setlist(list.concat(novoItem))
            setIpt('')
        }
    }
    
    function handleChange(e) {
        if(e.key=='Enter'){
            btn.current.click()
            setIpt('')
        }else{
            setIpt(e.target.value)
        }
    }

    function handleRemove(id){
        const filteredList = list.filter(note=>{
            return note.id != id
        })
        setlist(filteredList)
    }

    function handleClassChange(id){
        const changedClassList = list.map(nota=>{
            if(nota.id==id){
                nota.concluido = nota.concluido? false: true 
            }
            return nota
        })
        setlist(changedClassList)
    }

    return(
        <div className="to-do">
            <h1>Notas</h1>
            <div>
                <input onChange={handleChange} onKeyUp={handleChange} value={ipt} type="text" placeholder="Digite uma nota..."/>
                <input onClick={addItem} type="button" value="Add" ref={btn}/>
            </div>
            <ul>
                {list.map(li=>{
                    return(
                        <li key={li.id} className={li.concluido?'concluido':''} >
                            <p onClick={()=>{handleClassChange(li.id)}}>{li.text}</p><span onClick={()=>{handleRemove(li.id)}}>&#120;</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default ToDoList
