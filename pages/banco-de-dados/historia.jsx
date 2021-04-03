import Head from 'next/head';
import Navbar from "../banco-de-dados/components/navbar-banco";
import Clock from '../components/myClock';
import SideBar from '../banco-de-dados/components/sidebar-banco';


export default function Historia() {
	
	return (
		<div>
			<Head>
				<title>História - Banco De Dados</title>
				<link rel="icon" href="/imagens/xlogo.png"/>
			</Head>
			<Clock/>
			<div className="main">
				<SideBar/>
				<div className="main-content historia">
                    <h1>Banco de Dados: História e Origem</h1>
					<p>A sociedade moderna sempre precisou de alguma maneira ou método para organizar informações.</p>
					<p>Bancos, hospitais, delegacias, prefeituras, bibliotecas, empresas, e universidades sempre tiveram que lidar com armazenamento de dados e informação.</p>
					<ul>
						<li>
							<p>Bancos precisavam manter atualizado quanto cada cliente depositou ou retirou, sempre de forma organizada e correta.</p>
						</li>
						<li>
							<p>Bibliotecas precisavam saber quem retirou qual livro e quando deve devolver.</p>
						</li>
						<li>
							<p>Hospitais tinham que armazenar fichas e histórico médico dos pacientes.</p>
						</li>
						<li>
							<p>Delegacias precisavam registrar boletins de ocorrencias e casos inteiros.</p>
						</li>
					</ul>

					<h2>Antes dos computadores</h2>
					<p>Todos as informações eram armazenadas em fichas dentro de armários. Caso algum médico precisasse do histórico médico de um dos seus pacientes, alguém teria que ir pessoalmente até os armários e procurar a ficha com o nome do paciente.</p>
					
					<h2>Após 1960</h2>
					<p>Começamos a usar computadores para armazenar informações. Tornando mais fácil a criação, leitura,  atualização e apagar dados.</p>
				
					<h3>Modelo em Rede</h3>
					<p>Modelo de dados em rede foi implementado em 1964 por Charles Bachman. Nesse modelo os dados não estavam mais presos a seus parentes (modelo hierarquico). Qualquer dado poderia está envolvido em qualquer associação. Sua representação era em linha.</p>
					
					<h3>Modelo hierárquico</h3>
					<p>Modelo de dados hierárquico era representado como uma árvore, maior sucesso foi o sistema chamado SABRE da IMB.</p>
				    
					<h2>Após 1973</h2>
					<h3>Modelo Relacional</h3>
					<p>Edgar Frank Codd renovou a forma de pensar em banco de dados, separando o armazenamento físico do banco de dados. Tornando mais fácil a leitura e criação de dados, sem necessidade de mudar o endereço físico.</p>
					
					<h2>Entidade-Relacionamento (ER)</h2>
					<p>Em 1976 o Dr. Peter Chen propõe a ER, onde o administrador do banco de dados não precisava entender a lógica por de trás das colunas. E podendo focar apenas na manipulação dos dados.</p>
					
					<h2>Anos 80</h2>
					<p>A alta dos dos bancos de dados entre as empresas. A linguagem de consulta SQL (Structured Query Language) se tornou padrão mundial para manipulação de banco de dados.</p>
					
					<h2>Anos 90</h2>
					<p>Aconteceu a explosão da internet, o mundo percebeu o poder da internet, e houve um grande avanço nas tecnologias web e banco de dados.</p>
					<p>Surgiram soluções código-aberto (open-source) como MySQL e Apache.</p>
					<p>Empresas começaram a utilizar sistemas de transações em tempo real, imprementação dos PDV’s ( Ponto de Venda).</p>

					<h2>Século 21</h2>
					<p>NoSQL (not only SQL) são banco de dados não relacionais. A demanda por banco de dados NoSQL vem crescendo, devido a necessidade de manipulação de grandes sistemas de dados. Ex: Projetos como Genoma e exploração espacial.</p>

                </div>
			</div>
			<Navbar/>
			<Clock/>
		</div>
	)
}
