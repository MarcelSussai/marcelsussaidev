
import LogoMarcelSussai from './svgs/logoMarcelSussai';
import NavMenu from './navmenu';

const Header = () => (
  <>
    <header className="c-header">

      <div className="c-header-logotype">
        <LogoMarcelSussai className="svg-logo-ms"/>
        <div className="c-header-title">
          <h1>
            <span className="txt-span-marcel"> Marcel </span>
            <span className="txt-span-sussai"> Sussai </span> <br />
            <span className="txt-span-desc"> Desenvolvedor Web FullStack </span>
          </h1>
        </div>
      </div>
      
      <NavMenu />
    </header>
  </>
);

export default Header;