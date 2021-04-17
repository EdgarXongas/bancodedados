import React from 'react';
import Head from 'next/head';
import Conversor_Component from './components/conversor';
import Navbar from './components/navbar';
import SideBar from './components/sidebar';




function Conversor(props) {
    return(
        <div>
            <Head>
				<title>{props.title}</title>
				<link rel="icon" href="/imagens/xlogo.png"/>
			</Head>
            <div className="main">
                <SideBar/>
                <div className="main-content">
                    <Conversor_Component rates={props.rates} moedaA="USD" moedaB="BRL"/>
                </div>
            </div>
             <Navbar/>
        </div>
    )
} 
export async function getStaticProps(){
    let promise = await fetch('https://economia.awesomeapi.com.br/json/all')
    let jsn = await promise.json()
    return{
        props: {
            title: 'Projetos - Conversor',
            rates: {jsn}
            /* rates: {"USD":{"code":"USD","codein":"BRL","name":"Dólar Americano/Real Brasileiro","high":"5.6769","low":"5.5662","varBid":"-0.0291","pctChange":"-0.52","bid":"5.5868","ask":"5.5873","timestamp":"1618606794","create_date":"2021-04-16 21:00:02"},"USDT":{"code":"USD","codein":"BRLT","name":"Dólar Americano/Real Brasileiro Turismo","high":"5.815","low":"5.715","varBid":"-0.045","pctChange":"-0.78","bid":"5.55","ask":"5.89","timestamp":"1618601520","create_date":"2021-04-16 21:00:07"},"CAD":{"code":"CAD","codein":"BRL","name":"Dólar Canadense/Real Brasileiro","high":"4.5411","low":"4.4517","varBid":"-0.0111","pctChange":"-0.25","bid":"4.4652","ask":"4.467","timestamp":"1618606797","create_date":"2021-04-16 21:00:02"},"GBP":{"code":"GBP","codein":"BRL","name":"Libra Esterlina/Real Brasileiro","high":"7.8354","low":"7.6972","varBid":"-0.0089","pctChange":"-0.11","bid":"7.7305","ask":"7.7367","timestamp":"1618606795","create_date":"2021-04-16 21:00:02"},"ARS":{"code":"ARS","codein":"BRL","name":"Peso Argentino/Real Brasileiro","high":"0.0612","low":"0.06","varBid":"-0.0004","pctChange":"-0.66","bid":"0.0602","ask":"0.0602","timestamp":"1618606794","create_date":"2021-04-16 21:00:03"},"BTC":{"code":"BTC","codein":"BRL","name":"Bitcoin/Real Brasileiro","high":"361948","low":"345000","varBid":"-15520.5","pctChange":"-4.3","bid":"347499.5","ask":"347400","timestamp":"1618620523","create_date":"2021-04-16 21:48:43"},"LTC":{"code":"LTC","codein":"BRL","name":"Litecoin/Real Brasileiro","high":"1868","low":"1550","varBid":"188.01","pctChange":"11.49","bid":"1825","ask":"1830","timestamp":"1618620523","create_date":"2021-04-16 21:48:43"},"EUR":{"code":"EUR","codein":"BRL","name":"Euro/Real Brasileiro","high":"6.8041","low":"6.6686","varBid":"-0.0231","pctChange":"-0.34","bid":"6.6941","ask":"6.6993","timestamp":"1618606795","create_date":"2021-04-16 21:00:02"},"JPY":{"code":"JPY","codein":"BRL","name":"Iene Japonês/Real Brasileiro","high":"0.05216","low":"0.05117","varBid":"-0.0003","pctChange":"-0.58","bid":"0.05135","ask":"0.05138","timestamp":"1618606785","create_date":"2021-04-16 21:00:03"},"CHF":{"code":"CHF","codein":"BRL","name":"Franco Suíço/Real Brasileiro","high":"6.1769","low":"6.0495","varBid":"-0.0112","pctChange":"-0.18","bid":"6.0703","ask":"6.0767","timestamp":"1618606797","create_date":"2021-04-16 21:00:03"},"AUD":{"code":"AUD","codein":"BRL","name":"Dólar Australiano/Real Brasileiro","high":"4.3951","low":"4.3049","varBid":"-0.0316","pctChange":"-0.72","bid":"4.3203","ask":"4.3218","timestamp":"1618606797","create_date":"2021-04-16 21:00:03"},"CNY":{"code":"CNY","codein":"BRL","name":"Yuan Chinês/Real Brasileiro","high":"0.8705","low":"0.854","varBid":"-0.0039","pctChange":"-0.45","bid":"0.8567","ask":"0.857","timestamp":"1618606746","create_date":"2021-04-16 17:59:06"},"ILS":{"code":"ILS","codein":"BRL","name":"Novo Shekel Israelense/Real Brasileiro","high":"1.7316","low":"1.6983","varBid":"-0.0075","pctChange":"-0.44","bid":"1.7036","ask":"1.7041","timestamp":"1618606751","create_date":"2021-04-16 17:59:11"},"ETH":{"code":"ETH","codein":"BRL","name":"Ethereum/Real Brasileiro","high":"1200.21","low":"1200.21","varBid":"0","pctChange":"0","bid":"1440.25","ask":"16999.75","timestamp":"1610415652","create_date":"2021-01-11 22:40:52"},"XRP":{"code":"XRP","codein":"BRL","name":"XRP/Real Brasileiro","high":"10.14","low":"8.1","varBid":"-1.34","pctChange":"-13.34","bid":"8.72","ask":"8.72","timestamp":"1618620522","create_date":"2021-04-16 21:48:43"},"DOGE":{"code":"DOGE","codein":"BRL","name":"Dogecoin/Real Brasileiro","high":"2.36","low":"1.19","varBid":"0.79999995","pctChange":"66.67","bid":"2","ask":"2","timestamp":"1618620364","create_date":"2021-04-16 21:46:04"}}
       */  },
        revalidate:  86400
    }
}  

export default Conversor