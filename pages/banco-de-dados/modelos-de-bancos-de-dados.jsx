import NavBar from './components/navbar-banco'
import SideBar from './components/sidebar-banco'
import Head from 'next/head'

function ModelosDeBancosDeDados (props) {
    return(
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="/imagens/xlogo.png"/>
            </Head>
            <div className="main">
                <SideBar/>
                <div className="main-content historia">
                    <h1>Modelos de Bancos de Dados</h1>
                    <p>Um modelo de banco de dados mostra a estrutura lógica e as relações entre os dados.
                     Há diferentes formas para estruturar um SGBD (Sistemas de gerenciamento de dados).</p>
                    <h2>Modelo Hierárquico</h2>
                    <p>Os dados são armazenados em uma estrutura de árvore com raizes, baseia-se em um modelo 
                    de Entidades e Relacionamentos. Cada registro é uma coleção de atributos, cada um contento 
                    uma informação, uma ligação e a associação entre eles.</p>
                    <h2>Modelo em Rede</h2>
                    <p>Veio para complementar o modelo hierárquico, eliminando a hierárquia. Assim cada regristro 
                    fica livre para possuir várias associações. Ambos modelos hierárquico e em rede são orientados a registros.</p>
                    <h2>Modelo Relacional</h2>
                    <p>É baseado no modelo relacional, onde os dados são demostrados em tabelas. Cada linha (row) da tabela é um 
                    registro com um ID único, as colunas(columns) da tabela representam os atributos. Normalmente cada registro possui um atributo.
                    É a estrutura mais intuitiva para consultas e organização.</p>
                    <h2>Modelo Orientado a Objetos</h2>
                    <p>Programadores sempre pensam em objetos, agora também é possível fazer o mesmo com um banco de dados. Todo o banco de dados
                    é baseado em um único objeto, nesse objeto possui diversas keys e valores. Os dados são auto descritivos, sem necessidade de atribulos.</p>
                    <h2>Modelo Relacional Estentido</h2>
                    <p>Esse SGBD visa aproveitar as vantagens os modelos relacionados e orientados a objetos. Buscando a facilidade de 
                    consulta dos relacionais, e a escalabilidade dos orientados a objetos.</p>
                </div>
            </div>
            <NavBar/>
        </div>
    )
}
export async function getStaticProps() {
	return{
		props:{
			title: 'Modelos de Bancos de Dados - Banco De Dados'
		}
	}
}
export default ModelosDeBancosDeDados