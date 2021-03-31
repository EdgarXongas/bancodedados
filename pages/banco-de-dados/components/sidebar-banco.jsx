import React from 'react'
import Link from 'next/link'

const SideBar = ()=>{

    return (
        <div>
            <ul className="side-bar">
                <li>
                    <p>Banco de Dados</p>
                </li>
                <li>
                	<ul>
                        <li>
                            <Link href="/banco-de-dados"><a><span>&bull;</span> Dados x Informação</a></Link> 
                        </li>
                        <li>
                            <Link href="/banco-de-dados/historia"><a><span>&bull;</span> História Banco Dados</a></Link>
                        </li>
                        <li>
                            <Link href="/banco-de-dados/modelagem-de-dados"><a><span>&bull;</span> Modelagem de Dados</a></Link>
                        </li>
                        <li>
                            <Link href="/banco-de-dados/my-sql"><a><span>&bull;</span> MySQL</a></Link>
                        </li>
                        <li>
                            <Link href="/banco-de-dados/no-sql"><a><span>&bull;</span> NoSQL</a></Link>
                        </li>
                   </ul>
                </li>
			</ul>
        </div>
    )
}
export default SideBar