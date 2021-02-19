import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Home() {
  const [name,setName] = useState('World!')

  function myFunc() {
    setName('Edgar!')
  }
  return (
    <div>
      <Head>
        <title>Banco De Dados</title>
        <link rel="icon" href="/xlogo.png" />
      </Head>
      <nav>
            <Link href="/"><a id="logo">X</a></Link>
            <div  id="nav" className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/">Serviços</Link>
                <Link href="/">Sobre</Link>
            </div>
            <input className="nav-btn" type="button" value="About"/>
            {/* <div onClick={()=>{
              let n = nav;
              console.log(n);
              n.classList.toggle("show-nav");
            }} className="burger">
                <div></div>
                <div></div>
                <div></div>
            </div> */}
      </nav>
      <div className="main">
            {/* <ul className="side-bar">
                <li><a href="#section1">Dados x Informação</a></li>
                <li><a href="#section2">Section 2</a></li>
                <li><a href="#section3">Section 3</a></li>
                <li><a href="#section4">Section 4</a></li>
                <li><a href="#section5">Section 5</a></li>
            </ul> */}
            <div className="main-content">
                <div id="section1">
                    <h1>Dados x Informação</h1>
                   <h2>Dados</h2>
                    <p>Dados são números, medidas ou valores que por se só não possuem significado relevante,
                     e não conduz a nenhuma conclusão.</p>
                    <ul>
                      <li>
                        <p>São os menores níveis de abstração de uma informação.</p>
                      </li>
                      <li>
                        <p>São como matéria-prima que deve ser processada para informações.</p>
                      </li>
                      <li>
                        <p>Não dependem da informação, mas a informação depende dos dados.</p>
                      </li>
                    </ul>
                
                    <h2>Informação</h2>
                    <p>A informação é a ordenação e organização de dados, informação são dados processados que juntos conseguem transmitir uma mensagem compreensiva,
                    sobre um contexto ou determinado assunto.</p>
                    <ul>
                      <li>
                        <p>É o resultado do precessamento dos dados.</p>
                      </li>
                      <li>
                        <p>Depende dos dados, os dados completam as informações.</p>
                      </li>
                      <li>
                        <p>Possui um conteúdo compreensível, sendo capaz de expressar uma situação por completo.</p>
                      </li>
                    </ul>
                    <table>
                     <tr>
                      <td><strong>Base de Distinção</strong></td>
                        <td><strong>Dados</strong></td>
                        <td><strong>Informação</strong></td>
                     </tr>
                     <tr>
                        <td><strong>Definição</strong></td>
                        <td>Os dados são como a matéria-prima para a informação.</td>
                        <td>A informação é um dado que foi convertido em um contexto útil e útil.</td>
                     </tr>
                     <tr>
                        <td><strong>Exemplo</strong></td>
                        <td>Venda de ingressos de um cantor.</td>
                        <td>Relatório de vendas por região e local, nos diz qual local é mais lucrativo.</td>
                     </tr>
                     <tr>
                        <td><strong>Significado</strong></td>
                        <td>Os dados por si só não são significativos.</td>
                        <td>Em um contexto a informação é compreensiva por si só.</td>  
                     </tr>
                     <tr> 
                        <td><strong>Etimologia</strong></td>
                        <td>Os dados são um plural do datum, que é originalmente um substantivo latino que significa “algo dado”. Sua origem remonta ao 1600.</td>
                        <td>Sua origem data de 1300.</td>
                     </tr>
                   </table>
                   <Image src="/dxi.png" width={1042} height={487} alt='dados'/>
                </div>
            </div>
        </div>
    </div>
  )
}
