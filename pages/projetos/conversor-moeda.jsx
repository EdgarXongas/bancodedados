import React from 'react';
import Head from 'next/head';
import Conversor_Component from './components/conversor';
import Navbar from './components/navbar';
import SideBar from './components/sidebar';




function Conversor({title,rates}) {
    return(
        <div>
            <Head>
				<title>{title}</title>
				<link rel="icon" href="/imagens/xlogo.png"/>
			</Head>
            <div className="main">
                <SideBar/>
                <div className="main-content">
                    <Conversor_Component rates={rates} moedaA="USD" moedaB="BRL"/>
                </div>
            </div>
             <Navbar/>
        </div>
    )
} 
export async function getStaticProps(){
    
    let promise = await fetch('http://localhost:3000/api/rates')
    let jsn = await promise.json()
    return{
        props: {
            title: 'Projetos - Conversor',
            rates: {...jsn} 
        },
        revalidate:  86400
    }
}  

export default Conversor