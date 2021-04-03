import Head from "next/head";
import Navbar from "../banco-de-dados/components/navbar-banco";
import SideBar from "./components/sidebar-banco";

function NoSQL(props){
    return(
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="/imagens/xlogo.png"/>
            </Head>
            <div className="main">
                <SideBar/>
                <div className="main-content historia">
                    <h1>NoSQL</h1>
                    <p>Not Only SQL(Não Apenas SQL), são bancos de dados não relacionados. Possuem maior performance e escalabilidade para grandes aplicações. Existem 4 (quatro) tipos:</p>
                    <ul>
                       <li>
                           <p>Documento - Dados são armazenados como documentos. Normalmento usam o padrão JSON (Javascript Object Notation). Ex: <a href="https://www.mongodb.com/" target="blank">MongoDB</a>.</p>
                       </li>
                       <li>
                           <p>Colunas – Os dados são armazenados em várias colunas, podendo suportar várias colunas e subcolunas. Ex: <a href="https://cassandra.apache.org/" target="blank">Cassandra</a>.</p>
                       </li>
                       <li>
                           <p>Grafos - É o menos genérico, baseado em vertices e arestas. Sua linguagem oficial é Cypher. Ex: <a href="https://neo4j.com/" target="black"> Neo4j</a>.</p>
                       </li>
                       <li>
                           <p>Chave Única - Cada dado é acessado através de uma chave/valor única. Assim suporta mais carga de dados entre os sistemas NoSQL. Ex: <a href="https://riak.com/" target="blank">Riak</a>.</p>
                       </li>
                    </ul>
                </div>
            </div>
            <Navbar/>
        </div>
    )
}

export async function getStaticProps() {
	return{
		props:{
			title: 'No SQL - Banco de Dados'
		}
	}
}
export default NoSQL