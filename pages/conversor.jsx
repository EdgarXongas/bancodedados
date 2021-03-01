import React from 'react';
import Head from 'next/head';
import Conversor_Component from './components/conversor';
import Navbar from './components/navbar';
import SideBar from './components/sidebar';


export default function Conversor() {
    return(
        <div>
            <Head>
				<title>Conversor</title>
				<link rel="icon" href="/imagens/xlogo.png"/>
			</Head>
            <Navbar/>
            <div className="main">
                <SideBar/>
                <div className="main-content conversor-container">
                    <h1>Converter Moeda</h1>
                    <div className="conversores">
                    <Conversor_Component moedaA="BRL" moedaB="USD"/>
                    <Conversor_Component moedaA="USD" moedaB="BRL"/>
                    <Conversor_Component moedaA="BRL" moedaB="EUR"/>
                    <Conversor_Component moedaA="EUR" moedaB="BRL"/>
                    </div>
                </div>
            </div>
        </div>
    )
}   