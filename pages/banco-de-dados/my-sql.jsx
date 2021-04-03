import Head from 'next/head';
import Navbar from "../banco-de-dados/components/navbar-banco";
import Clock from '../components/myClock';
import SideBar from './components/sidebar-banco';

export default function Comandos_Sql() {
	
	return (
		<div>
			<Head>
				<title>MySQL - Banco de Dados</title>
				<link rel="icon" href="/imagens/xlogo.png"/>
			</Head>
			
			<Clock/>
			<div className="main">
				<SideBar/>
                <div className="main-content comandos-sql">
				   <div className="comandos-container">
					    <h1>MySQL</h1>
						<p>SQL ( Structured Query Language ), é uma linguagem de programação para armazenamento, manipulação e recuperação de dados, em um banco de dados relacional.
						É um dos mais utilizados por pequenas e grandes organizações, devido sua facilidade de consulta.
						</p>
						<h2>Selecionar Dados</h2>
						<p>Com o SELECT podemos selecionar dados de uma tabela</p>
						<SqlContainer content={{
							text: "Seleciona todos os dados.",
							command: <p><span>select</span> * <span>from</span> table_name;</p>
						}}/>
						<SqlContainer content={{
							text: "Seleciona várias colunas.",
							command: <p><span>select</span> coluna1, coluna2 <span>from</span> tabela_name;</p>
						}}/>
						<SqlContainer content={{
							text: "Seleciona valores únicos.",
							command: <p><span>select distinct</span> column1, column2 <span>from</span> tabela;</p>
						}}/>
						<h2>Filtrar Dados</h2>
						<p>Podemos utilizar a palavra chave WHERE para passar uma condição, retornando os dados que passaram pela condição dada.</p>
						<SqlContainer content={{
							text: "Seleciona todos os dados que seguem a condição.",
							command: <p><span>select</span> * <span>from</span> table_name <span>where</span> condição;</p>
						}}/>
						<SqlContainer content={{
							text: "",
							command: <p><span>select</span> * <span>from</span> Clientes <span>where</span> Cidade = Fortaleza;</p>
						}}/>
						<h2>Operadores Lógicos</h2>
						<p>Podemos utilizar operadores lógicos nas condições como OR, NOT e AND.</p>
						<SqlContainer content={{
							text: "",
							command: <p><span>select</span> * <span>from</span> table_name <span>where</span> condição1 <span>or</span> condição2;</p>
						}}/>
						<SqlContainer content={{
							text: "",
							command: <p><span>select</span> * <span>from</span> table_name <span>where </span><span> not</span> condição2;</p>
						}}/>
						<SqlContainer content={{
							text: "",
							command: <p><span>select</span> * <span>from</span> table_name <br/><span>where</span> condição1 <span>and</span> condição2;</p>
						}}/>
						<h2>Ordernar valores selecionados</h2>
						<p>Podemos ordernar os valores por ordem númerica ou alfabética.</p>
						<SqlContainer content={{
							text: "Ordem Crescente.",
							command: <p><span>select</span> * <span>from</span> table_name <span>order by</span> coluna;</p>
						}}/>
						<SqlContainer content={{
							text: "Ordem Decrescente.",
							command: <p><span>select</span> * <span>from</span> table_name <span>order by</span> coluna <span>desc</span>;</p>
						}}/>
						<h2>Inserir Dados</h2>
						<p>Com o comando INSERT INTO podemos inserir dados em uma tabela.</p>
						<SqlContainer content={{
							text: "Adiciona dados em uma ou mais colunas",
							command: <p><span>insert into</span> table_name <span>(</span>coluna1, coluna2<span>) <br/> values (</span>value1, value2<span>)</span>;</p>
						}}/>
						<SqlContainer content={{
							text: "",
							command: <p><span>insert into</span> Clientes <span>(</span>Nome, Cidade<span>) <br/> values (</span>Paty, Camocim<span>)</span>;</p>
						}}/>
						<h2>Atualizar Dados</h2>
						<p>Com o UPDATE podemos alterar dados já existentes.</p>
						<SqlContainer content={{
							text: "Atualiza dados de uma coluna.",
							command: <p><span>update</span> table_name <br/><span>set</span> coluna1 = value1, coluna2 = value2 <span><br/>where</span> condição;</p>
						}}/>
						<SqlContainer content={{
							text: "",
							command: <p><span>update</span> Clientes <br/><span>set</span> Nome = <span className="str">'Zé'</span>, Cidade = <span className="str">'Fortaleza'</span><span><br/>where</span> ClienteID = 1;</p>
						}}/>
						<h2>Excluir Dados</h2>
						<p>Podemos excluir dados com o DELETE.</p>
						<SqlContainer content={{
							text: "Exclui todos os dados que seguem a condição.",
							command: <p><span>delete from</span> table_name <span>where</span> condição;</p>
						}}/>
						<SqlContainer content={{
							text: "",
							command: <p><span>delete from</span> Clientes <br/><span>where</span> Nome = <span className="str">'MariaDB'</span>;</p>
						}}/>
						<SqlContainer content={{
							text: "Exclui todos os dados de uma table sem apaga-lá:",
							command: <p><span>delete from</span> table_name;</p>
						}}/>
				   </div>
                </div>
			</div>
			<Navbar/>
		</div>
	)
}

const SqlContainer = (props)=>{
    return(
        <div className="comandos">
			<p>{props.content.text}</p>
            <div>
                {props.content.command}
            </div>
		</div>
    )
}
