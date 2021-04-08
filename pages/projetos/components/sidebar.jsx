import React from 'react';
import Link from 'next/link';

const SideBar = ()=>{

    return (
        <div>
            <ul className="side-bar">
                <li>
                   <p>Projetos</p>
                </li>
				<li>
                    <ul>
                         <li>
                            <Link href="/projetos"><a><span>&bull;</span> Lista de Tarefas</a></Link>
                        </li>
                         <li>
                            <Link href="/projetos/conversor-moeda"><a><span>&bull;</span> Conversor Moedas</a></Link>
                        </li>
                    </ul>
                </li>
			</ul>
        </div>
    );
}
export default SideBar;