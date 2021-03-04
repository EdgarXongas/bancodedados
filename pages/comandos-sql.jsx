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
                   <h1>Comandos SQL</h1>
				   <div className="comandos-container">
						<p>SQL ( Structured Query Language ), é uma linguagem de programação para armazenamento, manipulação e recuperação de dados, em um banco de dados relacionado.</p>
						<div className="comandos">
							<p>Comando para selecionar tudo</p>
							<div>
								<p><span>select</span>&nbsp; * &nbsp;<span>from</span>&nbsp; users;</p>
							</div>
						</div>
				   </div>
                </div>
			</div>
			<Navbar/>
		</div>
	)
}
