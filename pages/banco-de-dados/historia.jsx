import Head from 'next/head';
import Navbar from '../components/navbar';
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
                    <h1>História dos Bancos de Dados</h1>
					<p>A sociedade moderna sempre precisou de alguma forma ou método de armazenar dados e informação.</p>
					<p>As empresas e escritórios de todos os tipos, armazenavam seus dados em ficheiros, que eram organizados em grandes </p>
                </div>
			</div>
			<Navbar/>
			<Clock/>
		</div>
	)
}
