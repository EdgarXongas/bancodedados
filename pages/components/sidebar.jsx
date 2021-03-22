import React from 'react';
import Link from 'next/link';

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
                <li>
                    <Link href="/conversor"><a>Conversor Moeda</a></Link>
                </li>
			</ul>
        </div>
    );
}
export default SideBar;