
import LogoMarcelSussai from './svgs/logoMarcelSussai';

const Footer = () => {
  return (
  <>
    <footer className="c-footer">
      <section className="c-footer-sec">

        <div className="c-adress">
          <p className="p-txt-info">
            moro em <span className="mark-txt-bold"> Sorocaba - SP </span>
          </p>
          <p className="p-txt-info">
            meu telefone celular é: <span className="mark-txt-bold"> (15) 9-8801-8431 </span>
          </p>
          <p className="p-txt-info">
            meus emails para contato são: <br />
            <span className="mark-txt-bold"> marcelsussaidev@gmail.com </span> <br />
            <span className="mark-txt-bold"> marcelsussai@gmail.com </span>
          </p>
        </div>

        <div className="c-madeBy">
          <h4 className="h5-footer">Desenvolvido por...</h4>
          <div className="c-logotype">
            <LogoMarcelSussai className="logo-footer" />
            <p className="p-txt-type-footer">
              <span className="mark-footer-marcel">Marcel</span>
              <span className="mark-footer-sussai">Sussai</span>
            </p>
          </div>
        </div>

      </section>
    </footer>
  </>
);

}

export default Footer;
