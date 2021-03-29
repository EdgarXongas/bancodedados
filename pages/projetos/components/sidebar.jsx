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
                            <Link href="/projetos"><a>Conversor Moedas</a></Link>
                        </li>
                    </ul>
                </li>
			</ul>
        </div>
    );
}
export default SideBar;