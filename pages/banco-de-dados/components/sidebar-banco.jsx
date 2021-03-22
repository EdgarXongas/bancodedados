import React from 'react'
import Link from 'next/link'

const SideBar = ()=>{

    return (
        <div>
            <ul className="side-bar">
                <li>
                    <Link href="/"><a>Sobre</a></Link>
                </li>
                <li>
                    <Link href="/banco-de-dados"><a>Banco de Dados</a></Link>
                </li>
				<ul>
                    <li>
                        <Link href="/banco-de-dados"><a><span>&bull;</span> Dados x Informação</a></Link> 
                    </li>
                    <li>
                        <Link href="/banco-de-dados/historia"><a><span>&bull;</span> História</a></Link>
                    </li>
                    <li>
                        <Link href="/banco-de-dados/comandos-sql"><a><span>&bull;</span> Comandos SQL</a></Link>
                    </li>
                </ul>
                <li>
                    <Link href="/conversor"><a>Conversor</a></Link>
                </li>
			</ul>
        </div>
    )
}
export default SideBar