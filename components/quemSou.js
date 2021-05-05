import { useState, useEffect, useRef } from "react";
import QuemSouSecHead from "./quemsouSecHead"


const QuemSou = () => {

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
          <h3 className={`h3-txt-art-title ${true ? 'ani-appearByLeft-02' : 'ani-appearByLeftReversed-01' }`}>
            Adoro a tecnologia! ...
          </h3>
          <p className={`p-txt-art-piece ${true ? 'ani-appearByScale-03' : 'ani-appearByScaleReversed-01' }`}>
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

        <div className="c-githb-link">
          <a className="a-github-link" href="https://github.com/MarcelSussai" target="_blank">
            <div className="c-img-github-link">
              <img src="/logoSkills/LogoGitHub.svg" alt="GitHub" className="img-github-svg-link" />
            </div>
            <p className="p-link-github">Acesse meu github!</p>
          </a>
        </div>

        <p className="p-txt-comment">
          Algumas habilidades que tenho:
        </p>

      </article>
    </section>
  </>
);

}

export default QuemSou;