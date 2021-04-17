import Head from 'next/head'
import Sidebar from './components/sidebar'
import NavBar from './components/navbar'
import ToDo from './components/to-do-list'
import Despesas from './components/despesas'

function ListaDeTarefas(props) {
    return(
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="/imagens/xlogo.png"/>
                <meta name="description" content="Simples Lista de Tarefas, todas as tarefas ficam salvas no armazenamento local."/>
                <meta name="keywords" content="lista de tarefas, to do list"/>
                <meta name="author" content="Edgar Jonas" />
            </Head>
            <div className="main">
                <Sidebar/>
                <div className="main-content">
                  {/* <ToDo/> */}
                   <Despesas/>
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