
import LogoUm from './svgs/logoum';
import NavMenu from './navmenu';

const Header = () => (
  <>
    <header className="header-container">

      <div className="b-c-logotype">
        <LogoUm className="logo-um"/>
        <div className="b-header-title">
          <h1 className="b-c-h1">
            <span className="title-marcel title-name"> Marcel </span>
            <span className="title-sussai title-name"> Sussai </span> <br />
            <span className="title-desc"> Desenvolvedor Web FullStack </span>
          </h1>
        </div>
      </div>

      <NavMenu />

    </header>
  </>
);

export default Header;