import NavBar from './components/navbar-banco'
import SideBar from './components/sidebar-banco'
import Head from 'next/head'

function AdminDeDadosEDBA (props){
    return(
        <div>
            <Head>
				<title>{props.title}</title>
				<link rel="icon" href="/imagens/xlogo.png"/>
                <meta name="description" content="Administrador de Dados e DBA a diferença"/>
                <meta name="keywords" content="Administrador de dados, DBA, database administrator"/>
                <meta name="author" content="Edgar Jonas" />
			</Head>
            <div className="main">
                    <SideBar/>
                <div className="main-content historia">
                    <h1>Adiministrador de Dados x DBA</h1>
                    <h2>Administrador de Dados</h2>
                    <p>O Administrador de dados tem a função de organizar e harmonizar a estrutura lógica do banco de dados.
                    Gerencia os dados, mas não os meios físicos onde são armazenados.
                    É independente do banco de dados utilizado pela empresa ou organização. Manter a qualidade e utilidade da informação também cabem ao administrador de dados.</p>
                    <ul>
                        <li>Cuida da parte lógica da relação dos dados.</li>
                        <li>Organização e padronização dos dados.</li>
                        <li>Deve compreender o negócio da organização, e todos os seus setores.</li>
                        <li>Define os níveis de integridade e segurança.</li>
                    </ul>
                    <h2>Administrador de Base de Dados</h2>
                    <p>A função de um Administrador de Base de Dados abrange a instalação, manutenção, programação e utilização otimizada do banco de dados.
                    Criação e testes de backup, para garantir a recuperação dos dados. Deve conhecer os comandos e/ou linguagens do banco de dados utilizado.
                    Configurar o controle de acesso, decidir quais privilégios os usuários podem ter. Garantir o máximo de integridade, confidencialidade e disponibilidade.</p>
                    <ul>
                        <li>Otimização nas consultas de dados.</li>
                        <li>Garante a integridade e segurança dos meios físicos onde são armazedados.</li>
                        <li>Orienta os analistas e desenvolvedores.</li>
                        <li>Suporte aos usuários.</li>
                    </ul>
                </div>
            </div>
            <NavBar/>
        </div>
    )
}
export async function getStaticProps(){
    return{
        props: {
            title: 'Admin de Dados e DBA - Banco De Dados'
        }
    }
}  

export default AdminDeDadosEDBA