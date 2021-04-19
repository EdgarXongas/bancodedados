import React, {useState} from 'react';
import Link from 'next/link';

const Navbar = ()=> {

    const [name,setName] = useState('nav-links');

	function burgerClick() {
		let [a,b] = ['nav-links','nav-links show-nav']
		setName( name==a? b : a );
	}

    return(
        <nav>
			<Link href="https://edgarjonas.com"><a id="logo">X</a></Link>	
            <div className={name}>
				<Link href="/">
					<a>Home</a>
				</Link>
                <Link href="/banco-de-dados">
					<a>Banco de Dados</a>
				</Link>
				{/* <Link href="/projetos">
					<a>Projetos</a>
				</Link> */}
				<div className="drop-down">
					<span>Projetos</span>
					<img src="/imagens/arrow-down.webp" alt="arrow"/>
					<ul className="drop-menu">
						<li>
							<Link href="/projetos/conversor-moeda"><a>Conversor de Moedas</a></Link>
						</li>
						<li>
							<Link href="/projetos/"><a>Lista de tarefas</a></Link>
						</li>
					</ul>
				</div>
			</div>
			<Link href="/">
				<input className="nav-btn" type="button" value="Sobre"/>
			</Link>
			<div onClick={burgerClick} className="burger">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
    );
}

export default Navbar;