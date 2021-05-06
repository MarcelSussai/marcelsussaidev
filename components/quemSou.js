import { useState, useEffect, useRef } from "react";
import QuemSouSecHead from "./quemsouSecHead"


const QuemSou = () => {

  const el_01 = useRef(null);
  const el_02 = useRef(null);
  const el_03 = useRef(null);
  const el_04 = useRef(null);

  const [ani_01, setAni_01] = useState(Boolean);
  const [ani_02, setAni_02] = useState(Boolean);
  const [ani_03, setAni_03] = useState(Boolean);
  const [ani_04, setAni_04] = useState(Boolean);

  const [anos, setAnos] = useState(0);

  useEffect(() => {

    // Calculando minha idade automaticamente
    // ________________________________________________________________
    let dataAgora = new Date();
    let dataNiver = new Date("06/30/1986");
    let ageDateYear = Math.abs(dataAgora.getFullYear() - dataNiver.getFullYear());
    let ageDateYearMinus = ageDateYear - 1;
    let corrDateMonth = dataAgora.getMonth() > dataNiver.getMonth();
    let corrDateMonthEqual = dataAgora.getMonth() == dataNiver.getMonth();
    let corrDateDay = dataAgora.getDate() >= dataNiver.getDate();
    let isNiver = corrDateMonth ? true : corrDateMonthEqual && corrDateDay ? true : false;
    if (isNiver) { setAnos(ageDateYear) } else { setAnos(ageDateYearMinus) };
    // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

    const scroll = (e) => {
      e.preventDefault();
      let onAni = window.pageYOffset + (window.innerHeight * 3 / 4) - 32;
  
      let a_Calc_01 = el_01.current.offsetTop + el_01.current.offsetParent.offsetTop;
      let condition_01 = onAni >= a_Calc_01;
      setAni_01(condition_01);
  
      let a_Calc_02 = el_02.current.offsetTop + el_02.current.offsetParent.offsetTop;
      let condition_02 = onAni >= a_Calc_02;
      setAni_02(condition_02);
  
      let a_Calc_03 = el_03.current.offsetTop + el_03.current.offsetParent.offsetTop;
      let condition_03 = onAni >= a_Calc_03;
      setAni_03(condition_03);
  
      let a_Calc_04 = el_04.current.offsetTop + el_04.current.offsetParent.offsetTop;
      let condition_04 = onAni >= a_Calc_04;
      setAni_04(condition_04);
    }


    window.addEventListener("scroll", scroll, false);
    return  () => {
      window.removeEventListener("scroll", scroll, false);
    }
  }, []);

  return (
  <>
    <section className="c-sec">

      <QuemSouSecHead />

      
      <article className="c-art-home">

        <div className="c-piece-art-txt">
          <h3 ref={el_01} className={`h3-txt-art-title ${ani_01 ? 'ani-appearByLeft-02' : 'ani-appearByLeftReversed-01' }`}>
            Adoro a tecnologia! ...
          </h3>
          <p ref={el_02} className={`p-txt-art-piece ${ani_02 ? 'ani-appearByScale-03' : 'ani-appearByScaleReversed-01' }`}>
            Tenho {anos} anos, mas desde que era criança me interesso por computadores e
            tecnologias relacionadas, trago uma bagagem e
            <span className="mark-txt-color-green mark-txt-bold"> experiência de quem gosta do que faz</span>,
            amo o que faço, programar e desenvolver uma coisa que realmente melhorará a vida das pessoas
            com tecnologia, isso me deixa motivado. <br/>
            Sou <span className="mark-txt-color-blue mark-txt-bold"> autodidata</span>, mas também aprendo
            com cursos quando necessário, conhecimento e experiência é o que busco, além de viver disso,
            pretendo criar
            <span className="mark-txt-color-green mark-txt-bold"> a melhor experiência digital para o meu cliente</span>,
            assim terei sucesso junto com ele! Estudo a anos sobre programação, algoritmo e desenvolvimento, 
            front-end, back-end, devOps, e UI/UX designer, gosto de computação, e o que se pode fazer com a tecnologia.
            Adoro desafios e realmente estou pronto a
            <span className="mark-txt-color-blue mark-txt-bold"> entregar valor com o que gosto!</span>
          </p>
        </div>

        <div ref={el_03} className={`c-githb-link ${ani_03 ? 'ani-appearByBottom-02' : 'ani-appearByBottomReversed-01'}`}>
          <a rel="noreferrer" className="a-github-link" href="https://github.com/MarcelSussai" target="_blank">
            <div className="c-img-github-link">
              <img src="/logoSkills/LogoGitHub.svg" alt="GitHub" className="img-github-svg-link" />
            </div>
            <p className="p-link-github">Acesse meu github!</p>
          </a>
        </div>

        <p ref={el_04} className={`p-txt-comment ${ani_04 ? 'ani-appearByTop-02' : 'ani-appearByTopReversed-01'}`}>
          Algumas habilidades que tenho:
        </p>

      </article>
    </section>
  </>
);

}

export default QuemSou;
/*
logos que faltam pegar os arquivos svg ao invés de componente react svg

javascript
npm
AdobeXd
NGINX
Strapi
PostgreeSQL
Sequelize
Expo

*/