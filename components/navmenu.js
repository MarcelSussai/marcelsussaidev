import Link from 'next/link';
import { useState } from 'react';
import LogoHome from './svgs/logohome';
import LogoQueFaco from './svgs/logoquefaco';
import LogoQuemSou from './svgs/logoquemsou';
import LogoContato from './svgs/logocontato';

const NavMenu = () => { 
  
  const [menuOpen, setMenuOpen] = useState(false);

  const tooggleOpen = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
  <>
    <div  className={`c-btn-menu ${menuOpen ? 'opened' : ''}`} 
          onClick={tooggleOpen}
    >
      <div className={`btn-menu ${menuOpen ? 'open' : ''}`}>
        <div className={`line-menu half start ${menuOpen ? 'openColor' : ''}`}></div>
        <div className={`line-menu ${menuOpen ? 'openColor' : ''}`}></div>
        <div className={`line-menu half end ${menuOpen ? 'openColor' : ''}`}></div>
      </div>

    </div>

    <nav className={`c-nav ${menuOpen ? 'nav-open' : ''}`}>
      <ul className="c-nav-ul">

        <li className="c-nav-ul-li cancelmarginleft">
          <Link href="#home">
            <a className="link" onClick={closeMenu}>
              <div className="c-menu-logo">
                <LogoHome />
              </div>
              Home
            </a>
          </Link>
        </li>

        <li className="c-nav-ul-li">
          <Link href="#oquefaco">
            <a className="link"  onClick={closeMenu}>
              <div className="c-menu-logo">
                <LogoQueFaco />
              </div>
              O que faço
            </a>
          </Link>
        </li>

        <li className="c-nav-ul-li">
          <Link href="#quemsou">
            <a className="link" onClick={closeMenu}>
              <div className="c-menu-logo">
                <LogoQuemSou />
              </div>
              Quem Sou
            </a>
          </Link>
        </li>

        <li className="c-nav-ul-li">
          <Link href="#contato">
            <a className="link" onClick={closeMenu}>
              <div className="c-menu-logo">
                <LogoContato />
              </div>
              Contato
            </a>
          </Link>
        </li>

      </ul>
    </nav>
  </>
)};

export default NavMenu;