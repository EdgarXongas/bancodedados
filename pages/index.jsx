
import Head from 'next/head'
import React from 'react'
import Navbar from './components/navbar'

function Home(props){
    return(
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="/imagens/xlogo.png"/>
                <meta name="description" content="Currículo Edgar Jonas"/>
                <meta name="keywords" content="Edgar Jonas, Desenvolvedor Web, Desenvolvedor Front-End"/>
                <meta name="author" content="Edgar Jonas" />
            </Head>
            <div className="main">
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
                                <li><span>&bull;</span>Javascript</li>
                                <li><span>&bull;</span>SASS</li>
                                <li><span>&bull;</span>Bootstrap</li>
                                <li><span>&bull;</span>React.js</li>
                                <li><span>&bull;</span><a href="https://nextjs.org/" target="blank">Next.js</a></li>
                                <li><span>&bull;</span>Consumo de APIs</li>
                                <li><span>&bull;</span>MySQL (mariaDB)</li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="sobre-containers">
                        <div>
                            <h3>Formação e Experiências</h3>
                            <ul>
                                <li><span>&bull;</span>Cursando Curso Superior de Análise e Desenvolvimento de Sistemas.</li>
                                <li><span>&bull;</span>Participação de webinar NLW4 e NLW5 da <a href="https://rocketseat.com.br/" target="blank">Rocketseat</a>.</li>
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
export async function getStaticProps() {
    return{
        props:{
            title: "Home - Edgar Jonas"
        }
    }
}
export default Home