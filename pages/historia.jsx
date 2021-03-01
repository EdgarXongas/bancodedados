import Head from 'next/head';
import Navbar from './components/navbar';
import Clock from './components/myClock';
import SideBar from './components/sidebar';


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
                    <h1>História</h1>
					<p>A sociedade moderna sempre precisou de alguma forma ou método de armazenar dados e informação.</p>
					<p>As empresas e escritórios de todos os tipos, armazenavam seus dados em ficheiros, que eram organizados em grandes </p>
                </div>
			</div>
			<Navbar/>
		</div>
	)
}
