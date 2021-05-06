import { useState, useEffect, useRef } from "react";
import QuemSouSecHead from "./quemsouSecHead"
import ResourceSkills from "./resourceSkills";


const QuemSou = () => {

  const el_01 = useRef(null);
  const el_02 = useRef(null);
  const el_03 = useRef(null);
  const el_04 = useRef(null);
  const el_05 = useRef(null);
  const el_06 = useRef(null);

  const [ani_01, setAni_01] = useState(Boolean);
  const [ani_02, setAni_02] = useState(Boolean);
  const [ani_03, setAni_03] = useState(Boolean);
  const [ani_04, setAni_04] = useState(Boolean);
  const [ani_05, setAni_05] = useState(Boolean);
  const [ani_06, setAni_06] = useState(Boolean);

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
      
      let a_Calc_05 = el_05.current.offsetTop + el_05.current.offsetParent.offsetTop;
      let condition_05 = onAni >= a_Calc_05;
      setAni_05(condition_05);
      
      let a_Calc_06 = el_06.current.offsetTop + el_06.current.offsetParent.offsetTop;
      let condition_06 = onAni >= a_Calc_06;
      setAni_06(condition_06);


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

        <div ref={el_03} className={`c-githb-link ${ani_03 ? 'ani-appear-02' : 'ani-appearReversed-01'}`}>
          <a rel="noreferrer" className={`a-github-link ${ani_03 ? 'ani-appearByBottom-02' : 'ani-appearByBottomReversed-01'}`} href="https://github.com/MarcelSussai" target="_blank">
            <div className="c-img-github-link">
              <img src="/logoSkills/LogoGitHub.svg" alt="GitHub" className="img-github-svg-link" />
            </div>
            <p className="p-link-github">Acesse meu github!</p>
          </a>
        </div>

        <p ref={el_04} className={`p-txt-comment ${ani_04 ? 'ani-appearByTop-02' : 'ani-appearByTopReversed-01'}`}>
          <span className="mark-txt-color-yellow">Algumas </span> habilidades que tenho:
        </p>

        <ResourceSkills />

        
      <div className="c-piece-art-txt">
        <h3 ref={el_05} className={`h3-txt-art-title ${ani_05 ? 'ani-appearByLeft-02' : 'ani-appearByLeftReversed-01' }`}>O poder de ser autodidata ...</h3>
        <p ref={el_06} className={`p-txt-art-piece ${ani_06 ? 'ani-appearByScale-03' : 'ani-appearByScaleReversed-01' }`}>
          Autodidata
          <span className="mark-txt-color-green mark-txt-bold"> não é apenas aprender sozinho</span>,
          é ser curioso e aprender com tudo que estiver a disposição, dito isso, também é aprender com 
          a experiência alheia, com a vasta informação disponível na internet, 
            com experimentações próprias, com cursos, com documentações, 
            com os próprios erros, etc. Ainda mais nessa 
          <span className="mark-txt-color-blue mark-txt-bold"> área de tecnologia</span>, onde tudo 
          <span className="mark-txt-color-green mark-txt-bold"> evolui muito rápido</span>,
          e para acompanhar isso de maneira satisfatória
          <span className="mark-txt-color-blue mark-txt-bold"> é preciso ser autodidata</span>. 
          A vontade, o gostar e a curiosidade em aprender
          sempre mais e da melhor forma, é uma característa de ser autodidata que
          apesar das óbvias dificuldades, me faz superar desafios e encontrar melhores
          soluções para as necessidades apresentadas. 
          <span className="mark-txt-color-green mark-txt-bold"> Não é preciso saber tudo</span>,
          <span className="mark-txt-color-blue mark-txt-bold"> mas saber como aprender a resolver tudo que precisar</span>, 
          encontrando a melhor solução.
        </p>
      </div>

      </article>
    </section>
  </>
);

}

export default QuemSou;