import React, {useState} from 'react';
import Link from 'next/link';
import SideBar from './sidebar';

const Navbar = ()=> {

    const [name,setName] = useState('nav-links');

	function burgerClick() {
		let [a,b] = ['nav-links','nav-links show-nav']
		setName( name==a? b : a );
	}

    return(
        <nav>
			<Link href="/"><a id="logo">X</a></Link>	
            <div className={name}>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/">
					<a>Serviços</a>
				</Link>
				<Link href="/">
					<a>Sobre</a>
				</Link>
				
             	<Link href="/"><a className="mobile-sidebar">Dados x Informação</a></Link>
                
                <Link href="/historia"><a className="mobile-sidebar">História Banco de Dados</a></Link>
                
                <Link href="/comandos-sql"><a className="mobile-sidebar">Comandos SQL</a></Link>
                
                <Link href="/conversor"><a className="mobile-sidebar">Conversor Moeda</a></Link>
			</div>
			<input className="nav-btn" type="button" value="About"/>
			<div onClick={burgerClick} className="burger">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
    );
}

export default Navbar;