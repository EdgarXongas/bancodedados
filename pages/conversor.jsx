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
           
            <div className="main">
                <SideBar/>
                <div className="main-content conversor-container">
                    <h1>conversor de moeda</h1>
                    <div className="conversores">
                        <Conversor_Component moedaA="USD" moedaB="BRL"/>
                        <Conversor_Component moedaA="EUR" moedaB="BRL"/>
                        <Conversor_Component moedaA="CAD" moedaB="BRL"/>
                        <Conversor_Component moedaA="JPY" moedaB="BRL"/>
                    </div>
                </div>
            </div>
             <Navbar/>
        </div>
    )
}   