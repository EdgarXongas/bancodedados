import Head from 'next/head';
import Navbar from './components/navbar';
import Clock from './components/myClock';
import SideBar from './components/sidebar';
import Conversor from './components/conversor';


export default function ComandosSql() {
	
	return (
		<div>
			<Head>
				<title>SQL - Comandos</title>
				<link rel="icon" href="/imagens/xlogo.png"/>
			</Head>
			<Navbar/>
			<Clock/>
			<div className="main">
				<SideBar/>
                <div className="main-content">
                   <h2>Comandos SQL</h2>
                </div>
			</div>
		</div>
	)
}
