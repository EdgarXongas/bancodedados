import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Clock from './components/myClock'
import Navbar from './components/navbar'
import SideBar from './components/sidebar'

export default function Sobre(){
    return(
        <div>
            <Head>
                <title>Sobre Edgar</title>
                <link rel="icon" href="/imagens/xlogo.png"/>
            </Head>
            <Clock/>
            <div className="main">
                <SideBar/>
                <div className="main-content sobre">
                    <p className="meunome">Quem é &nbsp;<span>Edgar Jonas?</span></p>
                    <div className="sobre-containers">
                       
                        <div>
                            <h3>Interesses</h3>
                            <ul>
                                <li><span>&bull;</span>Atuar no desenvolvimento de aplicações web e/ou mobile.</li>
                                <li><span>&bull;</span>Solucionar problemas.</li>
                                <li><span>&bull;</span>Torna o mundo melhor e mais eficiente através da tecnologia.</li>
                            </ul>
                        </div>
                         <div>
                            <h3>Estou Aprendendo</h3>
                            <ul>
                                <li><span>&bull;</span>Javascript,CSS/SASS,HTML</li>
                                <li><span>&bull;</span>Criação de APIs (Express.js e Next.js)</li>
                                <li><span>&bull;</span>Biblioteca React.js</li>
                                <li><span>&bull;</span>Flamework Next.js</li>
                                <li><span>&bull;</span>Banco de dados MySQL (mariaDB)</li>
                                <li><span>&bull;</span>Desenvolvimento de aplicações para dispositivos móveis (Java e React-Native)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sobre-containers">
                        <div>
                            <h3>Formação e Experiências</h3>
                            <ul>
                                <li><span>&bull;</span>Curso Superior de Análise e Desenvolvimento de Sistemas.</li>
                                <li><span>&bull;</span>Participação da NextLevelWeek da Rocketseat.</li>
                            </ul>
                        </div> 
                        <div>
                            <h3>Projetos</h3>
                            <p>Visite meu  perfil no <a href="https://github.com/EdgarXongas">GitHub</a></p>
                            <p>e confira meus projetos.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar/>
        </div>
    )
}