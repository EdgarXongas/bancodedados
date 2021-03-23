
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Clock from './components/myClock'
import Navbar from './components/navbar'
import SideBar from './components/sidebar'

export default function Home(){
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
                                <li><span>&bull;</span>Desenvolvimento de aplicações web e/ou mobile.</li>
                                <li><span>&bull;</span>Solucionar problemas.</li>
                                <li><span>&bull;</span>Tornar o mundo melhor e mais eficiente através da tecnologia.</li>
                            </ul>
                        </div>
                         <div>
                            <h3>Estou Aprendendo</h3>
                            <ul>
                                <li><span>&bull;</span>Javascript, Java e Python</li>
                                <li><span>&bull;</span>React.js e React Native</li>
                                <li><span>&bull;</span><a href="https://nextjs.org/" target="blank">Next.js</a></li>
                                <li><span>&bull;</span>APIs (Next.js e Express.js)</li>
                                <li><span>&bull;</span>MySQL (mariaDB)</li>
                                <li><span>&bull;</span>Aplicações para dispositivos móveis (Android).</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sobre-containers">
                        <div>
                            <h3>Formação e Experiências</h3>
                            <ul>
                                <li><span>&bull;</span>Cursando Curso Superior de Análise e Desenvolvimento de Sistemas (<a href="https://faculdadecdl.edu.br/" target="blank">Faculdade CDL</a>).</li>
                                <li><span>&bull;</span>Participação da <a href="https://nextlevelweek.com/pre-nlw" target="blank">NextLevelWeek</a> da <a href="https://rocketseat.com.br/" target="blank">Rocketseat</a>.</li>
                            </ul>
                        </div> 
                        <div>
                            <h3>Projetos</h3>
                            <p>Visite meu  perfil no <a href="https://github.com/EdgarXongas" target="blank">GitHub</a>, confira meus projetos e acompanhe meu progresso.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Navbar/>
        </div>
    )
}