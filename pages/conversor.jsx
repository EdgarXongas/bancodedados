import React from 'react';
import Head from 'next/head';
import Conversor_Component from './components/conversor';
import Navbar from './components/navbar';
import SideBar from './components/sidebar';
import Clock from './components/myClock';


export default function Conversor() {
    return(
        <div>
            <Head>
				<title>Conversor</title>
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