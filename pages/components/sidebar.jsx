import React from 'react';
import Link from 'next/link';

const SideBar = ()=>{

    return (
        <div>
            <ul className="side-bar">
				<li>
                    <Link href="/"><a>Dados x Informação</a></Link>
                </li>
				<li>
                    <Link href="/historia"><a>História Banco de Dados</a></Link>
                </li>
				<li>
                    <Link href="/comandos-sql"><a>Comandos SQL</a></Link>
                </li>
                <li>
                    <Link href="/conversor"><a>Conversor Moeda</a></Link>
                </li>
			</ul>
        </div>
    );
}
export default SideBar;