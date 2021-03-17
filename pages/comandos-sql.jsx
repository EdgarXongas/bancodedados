import Head from 'next/head';
import Navbar from './components/navbar';
import Clock from './components/myClock';
import SideBar from './components/sidebar';

export default function ComandosSql() {
	
	return (
		<div>
			<Head>
				<title>SQL - Comandos</title>
				<link rel="icon" href="/imagens/xlogo.png"/>
			</Head>
			
			<Clock/>
			<div className="main">
				<SideBar/>
                <div className="main-content comandos-sql">
				   <div className="comandos-container">
					    <h1>Comandos SQL</h1>
						<p>SQL ( Structured Query Language ), é uma linguagem de programação para armazenamento, manipulação e recuperação de dados, em um banco de dados relacionado.</p>
						
						<SqlContainer content={{
							text: "Comando para selecionar todos os dados de uma table.",
							command: <p><span>select</span> * <span>from</span> table_name;</p>
						}}/>
						<SqlContainer content={{
							text: "Comando para selecionar duas colunas de uma table.",
							command: <p><span>select</span> coluna1, coluna2 <span>from</span> tabela_name;</p>
						}}/>
						<SqlContainer content={{
							text: "Seleciona valores únicos de uma table.",
							command: <p><span>select distinct</span> column1, column2 <span>from</span> tabela;</p>
						}}/>
						<SqlContainer content={{
							text: "Seleciona todos os dados que seguem a condição.",
							command: <p><span>select</span> * <span>from</span> table_name <span>where</span> condição;</p>
						}}/>
						<h2>Uso do AND, OR e NOT</h2>
						<SqlContainer content={{
							text: "Seleciona todos os dados que seguem a condição com OR.",
							command: <p><span>select</span> * <span>from</span> table_name <span>where</span> condição1 <span>or</span> condição2;</p>
						}}/>
						<SqlContainer content={{
							text: "Seleciona todos os dados que seguem a condição com NOT.",
							command: <p><span>select</span> * <span>from</span> table_name <span>where </span><span> not</span> condição2;</p>
						}}/>
						<SqlContainer content={{
							text: "Seleciona todos os dados que seguem a condição com AND.",
							command: <p><span>select</span> * <span>from</span> table_name <br/><span>where</span> condição1 <span>and</span> condição2;</p>
						}}/>
						<h2>Uso do ORDER BY</h2>
						<SqlContainer content={{
							text: "Seleciona todos os dados e ordena em alfabética e crescente.",
							command: <p><span>select</span> * <span>from</span> table_name <span>order by</span> coluna;</p>
						}}/>
						<SqlContainer content={{
							text: "Seleciona todos os dados e ordena em decrescente.",
							command: <p><span>select</span> * <span>from</span> table_name <span>order by</span> coluna <span>desc</span>;</p>
						}}/>
						<h2>Uso do INSERT INTO</h2>
						<SqlContainer content={{
							text: "Adiciona dados em uma ou mais colunas",
							command: <p><span>insert into</span> table_name <span>(</span>coluna1, coluna2<span>) <br/> values (</span>value1, value2<span>)</span>;</p>
						}}/>
						<h2>Uso do UPDATE</h2>
						<SqlContainer content={{
							text: "Atualiza dados de uma coluna.",
							command: <p><span>update</span> table_name <br/><span>set</span> coluna1 = value1, coluna2 = value2 <span><br/>where</span> condição;</p>
						}}/>
						<SqlContainer content={{
							text: "Exemplo:",
							command: <p><span>update</span> Customers <br/><span>set</span> ContactName = <span className="str">'João'</span>, City = <span className="str">'Ceará'</span><span><br/>where</span> CustomerID = 1;</p>
						}}/>
						<h2>Uso do DELETE</h2>
						<SqlContainer content={{
							text: "Deleta tudo com a seguinte condição.",
							command: <p><span>delete from</span> table_name <span>where</span> condição;</p>
						}}/>
						<SqlContainer content={{
							text: "Exemplo:",
							command: <p><span>delete from</span> Customers <br/><span>where</span> CustomerName = <span className="str">'João'</span>;</p>
						}}/>
						<SqlContainer content={{
							text: "Deleta tudo de uma table sem apaga-lá:",
							command: <p><span>delete from</span> table_name;</p>
						}}/>
						<SqlContainer content={{
							text: "Exemplo:",
							command: <p><span>delete from</span> Customers;</p>
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
