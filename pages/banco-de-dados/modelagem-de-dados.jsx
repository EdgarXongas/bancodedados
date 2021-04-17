import SideBar from './components/sidebar-banco'
import NavBar from './components/navbar-banco'
import Head from 'next/head'

function ModelagemDeDados(props){
    return(
        <div>
            <Head>
				<title>{props.title}</title>
				<link rel="icon" href="/imagens/xlogo.png"/>
                <meta name="description" content="Banco de dados - Modelagem de Dados"/>
                <meta name="keywords" content="Banco de dados, modelagem de dados, modelagem lógica, modelagem conceitual, modelagem física"/>
                <meta name="author" content="Edgar Jonas" />
			</Head>
			<div className="main">
				<SideBar/>
                <div className="main-content historia">
                    <div>
                        <h1>Modelagem de Dados</h1>
                        <p>Como tudo na vida exige um planejamento. Os Banco de Dados não seriam diferentes, utilizamos a técnica 
                        de modelagem de dados para criar um banco de dados organizado, sustentável e otimizado. A modelagem de um 
                        banco de dados é um conjunto de aplicações teóricas e práticas, que se dividem em modelo conceitual, 
                        lógico e físico.</p>
                        <h2>Modelagem Conceitual</h2>
                        <p>Modelo conceitual é o mais simples e de fácil compreensão, normalmente usado para demostrar ao cliente a 
                        estrutura do banco de dados. Um Diagrama de Entidade e Relacionamento é o mais apropriado para
                        idealizar a estrutura do banco de dados.</p>
                        <ul>
                            <li>
                                <p>Alto grau de abstração</p>
                            </li>
                            <li>
                                <p>Visão geral do BD.</p>
                            </li>
                            <li>
                                <p>Independente do software e hardware.</p>
                            </li>
                            <li>
                                <p>Fácil compreensão.</p>
                            </li>
                        </ul>
                        <h2>Modelagem Lógica</h2>
                        <h3>Primeira etapa</h3>
                        <p>Na primeira etapa é aplicado a nomenclatura, e a normalização ao modelo conceitual. Esse modelo ainda é 
                        independente do modelo físico. Todos os detalhes necessários devem ser acrescentados nessa etapa.</p>
                        <h3>Segunda etapa</h3>
                        <p>A segunda etapa começa após a seleção do SGBD, seja um banco de dados relacional ou não-relacional.
                        Então é planejado como os dados irão ser organizados e qual linguagem será usada para acessar o banco
                        de dados.</p>
                        <ul>
                            <li>
                                <p>Médio grau de abstração.</p>
                            </li>
                            <li>
                                <p>Foco no tipo do banco de dados.</p>
                            </li>
                            <li>
                                <p>Dependência do Software.</p>
                            </li>
                            <li>
                                <p>Independência do Hardware.</p>
                            </li>
                        </ul>
                        <h2>Modelagem Física</h2>
                        <p>No modelo físico é determinado onde e como os dados serão armazenados, e como serão acessados. Deve ser
                        considerado as limitações do BD.</p>
                        <ul>
                            <li>
                                <p>Baixo grau de abstração.</p>
                            </li>
                            <li>
                                <p>Dependência do software e hardware.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <NavBar/>
        </div>
    )
}
export async function getStaticProps() {
	return{
		props:{
			title: 'Modelagem de Dados - Banco De Dados'
		}
	}
}
export default ModelagemDeDados