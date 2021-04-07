import Sidebar from './components/sidebar'
import NavBar from './components/navbar'
import ToDo from './components/to-do-list'
import Head from 'next/head'

function ListaDeTarefas(props) {
    return(
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="/imagens/xlogo.png"/>
            </Head>
            <div className="main">
                <Sidebar/>
                <div className="main-content">
                    <ToDo/>
                </div>
            </div>
            <NavBar/>
        </div>
    )
}
export async function getStaticProps(){
    return{
        props: {
            title: 'Projetos - Lista de Tarefas'
        }
    }
} 
export default ListaDeTarefas