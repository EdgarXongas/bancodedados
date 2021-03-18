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
				<Link href="/conversor">
					<a>Conversor de Moeda</a>
				</Link>
             	<Link href="/"><a className="mobile-sidebar">Dados x Informação</a></Link>
                
                <Link href="/historia"><a className="mobile-sidebar">História Banco de Dados</a></Link>
                
                <Link href="/comandos-sql"><a className="mobile-sidebar">Comandos SQL</a></Link>
                
			</div>
			<Link href="/sobre">
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