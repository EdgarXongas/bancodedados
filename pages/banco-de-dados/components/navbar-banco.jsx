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
                    
				<Link href="/banco-de-dados/historia"><a className="mobile-sidebar">História Bancos Dados</a></Link>
					
				<Link href="/banco-de-dados/modelagem-de-dados"><a className="mobile-sidebar">Modelagem de Dados</a></Link>

				<Link href="/banco-de-dados/modelos-de-bancos-de-dados"><a className="mobile-sidebar"> Modelos Bancos de Dados</a></Link>

				<Link href="/banco-de-dados/administrador-de-dados-e-dba"><a className="mobile-sidebar">Administrador Dados x DBA</a></Link>
					
				<Link href="/banco-de-dados/my-sql"><a className="mobile-sidebar">MySQL</a></Link>
					
				
				<Link href="/banco-de-dados/no-sql"><a className="mobile-sidebar">NoSQL</a></Link>
			
				<Link href="/projetos">
					<a>Projetos</a>
				</Link>
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