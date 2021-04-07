import React from 'react';
import Head from 'next/head';
import Conversor_Component from './components/conversor';
import Navbar from './components/navbar';
import SideBar from './components/sidebar';
import Clock from '../components/myClock';



function Conversor(props) {
    return(
        <div>
            <Head>
				<title>{props.title}</title>
				<link rel="icon" href="/imagens/xlogo.png"/>
			</Head>
            <Clock/>
            <div className="main">
                <SideBar/>
                <div className="main-content">
                    <Conversor_Component moedaA="USD" moedaB="BRL"/>
                </div>
            </div>
             <Navbar/>
        </div>
    )
} 
export async function getStaticProps(){
    return{
        props: {
            title: 'Projetos - Conversor'
        }
    }
}  

export default Conversor