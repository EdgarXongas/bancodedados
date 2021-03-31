import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import Navbar from '../banco-de-dados/components/navbar-banco';
import SideBar from '../banco-de-dados/components/sidebar-banco';
import Clock from '../components/myClock';

export default function DadosVsInformaçao() {
	
	return (
		<div>
			<Head>
				<title>Dados x Informação - Banco de Dados</title>
				<link rel="icon" href="/imagens/xlogo.png"/>
			</Head>
			<Clock/>
			<div className="main">
				<SideBar/>
				<div className="main-content dadosxinformação">
					<div>
				   		<h1>Dados x Informação</h1>
	  					<h2 className="dados">Dados</h2>
				  		<p>Dados são números, medidas ou valores que por se só não possuem significado relevante,
						 e não conduz a nenhuma conclusão.</p>
						<ul>
							<li>
								<p><span className="lb">&bull;</span> São os menores níveis de abstração de uma informação.</p>
							</li>
							<li>
								<p><span className="lb">&bull;</span> São como matéria-prima que deve ser processada para informações.</p>
							</li>
							<li>
								<p><span className="lb">&bull;</span> Não dependem da informação, mas a informação depende dos dados.</p>
							</li>
						</ul>
								
						<h2 className="info">Informação</h2>
						<p>A informação é a ordenação e organização de dados, informação são dados processados que juntos conseguem transmitir uma mensagem compreensiva,
						sobre um contexto ou determinado assunto.</p>
						<ul>
							<li>
					 			<p><span className="le">&bull;</span>É o resultado do precessamento dos dados.</p>
							</li>
							<li>
								<p><span className="le">&bull;</span>Depende dos dados, os dados completam as informações.</p>
							</li>
							<li>
								<p><span className="le">&bull;</span>Possui um conteúdo compreensível, sendo capaz de expressar uma situação por completo.</p>
							</li>
						</ul>
						<table>
							 <tbody>
							 <tr>
								<td><strong>Base de Distinção</strong></td>
								<td className="l"><strong>Dados</strong></td>
								<td><strong className="b">Informação</strong></td>
							 </tr>
							 <tr>
							<td><strong>Definição</strong></td>
								<td className="l">Os dados são como a matéria-prima para a informação.</td>
								<td className="b">A informação é um dado que foi convertido em um contexto útil e útil.</td>
							 </tr>
							 <tr>
								<td><strong>Exemplo</strong></td>
								<td className="l">Venda de ingressos de um cantor.</td>
								<td className="b">Relatório de vendas por região e local, nos diz qual local é mais lucrativo.</td>
							 </tr>
							 <tr>
								<td><strong>Significado</strong></td>
								<td className="l">Os dados por si só não são significativos.</td>
								<td className="b">Em um contexto a informação é compreensiva por si só.</td>  
							 </tr>
							 <tr> 
								<td><strong>Etimologia</strong></td>
								<td className="l">Os dados são um plural do datum, que é originalmente um substantivo latino que significa “algo dado”. Sua origem remonta ao 1600.</td>
								<td className="b">Sua origem data de 1300.</td>
							 </tr>
							 </tbody>
						</table>
						 <Image src="/imagens/dxi.png" width={1064} height={487} alt='dados'/>
					</div>
				</div>
				</div>
			<Navbar/>
			<Clock/>
		</div>
	)
}