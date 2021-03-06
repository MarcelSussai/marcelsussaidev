import { useState, useEffect, useRef } from "react";


const OQueFacoWorkProcess = () => {

  const [anima_wp_01, setAnima_wp_01] = useState(false);
  const [anima_wp_02, setAnima_wp_02] = useState(false);
  const [anima_wp_03, setAnima_wp_03] = useState(false);
  const [anima_wp_04, setAnima_wp_04] = useState(false);
  const [anima_wp_05, setAnima_wp_05] = useState(false);
  const [anima_wp_06, setAnima_wp_06] = useState(false);

  
  const [ani_01, setAni_01] = useState(false);
  const [ani_02, setAni_02] = useState(false);
  const [ani_03, setAni_03] = useState(false);

  const el_01 = useRef(null);
  const el_02 = useRef(null);
  const el_03 = useRef(null);

  const handle_wp_1 = (e) => {
    e.preventDefault();
    setAnima_wp_01(!anima_wp_01);
  }

  const handle_wp_2 = (e) => {
    e.preventDefault();
    setAnima_wp_02(!anima_wp_02);
  }

  const handle_wp_3 = (e) => {
    e.preventDefault();
    setAnima_wp_03(!anima_wp_03);
  }

  const handle_wp_4 = (e) => {
    e.preventDefault();
    setAnima_wp_04(!anima_wp_04);
  }

  const handle_wp_5 = (e) => {
    e.preventDefault();
    setAnima_wp_05(!anima_wp_05);
  }

  const handle_wp_6 = (e) => {
    e.preventDefault();
    setAnima_wp_06(!anima_wp_06);
  }

  useEffect(() => {
    setAnima_wp_01(false);
    setAnima_wp_02(false);
    setAnima_wp_03(false);
    setAnima_wp_04(false);
    setAnima_wp_05(false);
    setAnima_wp_06(false);

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

    }

    window.addEventListener("scroll", scroll, false);
    return  () => {
      window.removeEventListener("scroll", scroll, false);

    }
  }, []);

  return (
  <>
    
    <article className="c-art-home">

      <div className="c-piece-art-txt">
        <h3 ref={el_01} className={`h3-txt-art-title ${ani_01 ? 'ani-appearByLeft-02' : 'ani-appearByLeftReversed-01' }`}>Processo de trabalho...</h3>
        <p ref={el_02} className={`p-txt-art-piece ${ani_02 ? 'ani-appearByScale-03' : 'ani-appearByScaleReversed-01' }`}>
          Eu <span className="mark-txt-color-green mark-txt-bold"> trabalho remotamente</span>,
          n??o apenas em fun????o da pandemia, eu sempre quis trabalhar remotamente e agora ainda mais, 
          gra??as a internet, no desenvolvimento de sites, aplicativos, etc.,  
          <span className="mark-txt-color-blue mark-txt-bold"> ?? poss??vel e muito vi??vel </span>
          trabalhar assim, por isso, com v??rias motiva????es ao trabalho remoto, tenho um 
          processo de trabalho, desde o briefing, e desenvolvimento at?? o or??amento e pagamento:
        </p>
      </div>


      <div ref={el_03} className="c-wp">



        <div className={`c-wp-item ${ani_03 ? 'ani-appearByRight-04' : 'ani-appearByRightReversed-01'}`}>

          <h4 className="h4-wp-txt-item-title">
            <span className="wp-txt-mark">1??</span>
            Conhecendo suas necessidades
          </h4>

          <div className={`c-wp-content-txt ${anima_wp_01 ? 'anima-wp-txt' : 'anima-wp-txt-false'}`}>
            <p className="p-wp-txt-content">
              Primeiramente, entramos em contato(por email, whasapp, etc), 
              E conversamos, fa??o perguntas pertinentes para eu entender adequadamente
              quais as suas necessidades e objetivos (briefing), depois fa??o uma an??lise para criar um or??amento
              e desenvolver uma estrat??gia certeira para dar a voc?? a melhor solu????o, e tamb??m um prazo justo!
            </p>
            <p className="p-wp-txt-content-obs">
              <span className="mark-txt-obs">obs: </span>
              Se j?? tem uma no????o do que queira, pe??o para conversarmos melhor, 
              antes de contratar um servi??o de hospedagem, pois se contratar antes de 
              consultar o dev, pode acontecer de que o servi??o contratado n??o suporte as tecnologias 
              necess??rias que ser??o utilizadas para desenvolver seu projeto. Consultando contudo, 
              posso apontar o tipo de servi??o de hospedagem  e/ou uma lista de servi??os 
              melhores para sua necessidade visando o custo/benef??cio, e dependendo se seu projeto for simples
              como uma landing page, eu posso at?? sugerir lugares ??timos e com ??timos pre??os!.
            </p>
          </div>

          <div onClick={handle_wp_1} className="c-wp-item-footer">
            <p className={`p-wp-footer-txt ${anima_wp_01 ? 'p-wp-footer-txt-mark' : ''}`}>
              mostrar / ocultar ...
            </p>
            <div className="wp-sign">
              <div className={`wp-sign-item-1 ${anima_wp_01 ? 'wp-sign-item-1-mark' : ''}`}>   </div>
              <div className={`wp-sign-item-2 ${anima_wp_01 ? 'wp-sign-item-2-mark' : ''}`}>   </div>
            </div>
          </div>
        </div>



        <div className={`c-wp-item ${ani_03 ? 'ani-appearByRight-05' : 'ani-appearByRightReversed-01'}`}>
          <h4 className="h4-wp-txt-item-title">
            <span className="wp-txt-mark">2??</span>
            Design e prot??tipos
          </h4>

          <div className={`c-wp-content-txt ${anima_wp_02 ? 'anima-wp-txt' : 'anima-wp-txt-false'}`}>
            <p className="p-wp-txt-content">  
              Com uma id??ia clara das necessidades e objetivos, vou ao desenvolvimento dos prot??tipos
              para poder dar uma id??ia geral a voc?? de como ficar??! se n??o possuir um design eu crio um
              seguindo as melhores pr??ticas de design, UI/UX (Design de Interface e Experi??ncia do usu??rio), 
              e ponho a sua disposi????o de alguma forma para voc?? avaliar o que ser?? desenvolvido!
            </p>
          </div>

          <div onClick={handle_wp_2} className="c-wp-item-footer">
            <p className={`p-wp-footer-txt ${anima_wp_02 ? 'p-wp-footer-txt-mark' : ''}`}>
              mostrar / ocultar ...
            </p>
            <div className="wp-sign">
              <div className={`wp-sign-item-1 ${anima_wp_02 ? 'wp-sign-item-1-mark' : ''}`}>   </div>
              <div className={`wp-sign-item-2 ${anima_wp_02 ? 'wp-sign-item-2-mark' : ''}`}>   </div>
            </div>
          </div>
        </div>



        <div className={`c-wp-item ${ani_03 ? 'ani-appearByRight-06' : 'ani-appearByRightReversed-01'}`}>
          <h4 className="h4-wp-txt-item-title">
            <span className="wp-txt-mark">3??</span>
            Desenvolvendo de fato!
          </h4>

          <div className={`c-wp-content-txt ${anima_wp_03 ? 'anima-wp-txt' : 'anima-wp-txt-false'}`}>
            <p className="p-wp-txt-content">  
              Com o design pronto e aprovado, come??o o desenvolvimento do c??digo, 
              e escolho as tecnologias que ser??o usadas, no caso de sites, 
              aplica????es web e lojas virtuais escolhemos um servidor de hospedagem que 
              suporte as tecnologias usadas e se adeque ao tipo de necessidade,
              fique tranquil@, que te ajudo em todo o processo. 
              Com o pagamento da 1?? parcela come??o o desenvolvimento.
            </p>
            <p className="p-wp-txt-content-obs">
              <span className="mark-txt-obs">obs: </span>
              Eu gosto de cobrar por projeto, pois assim temos uma seguran??a m??tua, e 
              geralmente divido em duas parcelas, a primeira paga depois de aprovado o prot??tipo,
              pois assim, trabalho mais feliz e dedicado a concluir da melhor forma poss??vel, e outra 
              depois de desenvolvido tudo, essa parcela final tende a ser maior, pela garantia m??tua,
              n??o entrego o projeto antes de pagar a ??ltima parcela(hospedo num lugar provis??rio para voc?? avaliar antes de pagar)! 
              e voc?? pode ter certeza que eu entrego um bom projeto, pois quero gerar valor junto com voc??!
            </p>
          </div>

          <div onClick={handle_wp_3} className="c-wp-item-footer">
            <p className={`p-wp-footer-txt ${anima_wp_03 ? 'p-wp-footer-txt-mark' : ''}`}>
              mostrar / ocultar ...
            </p>
            <div className="wp-sign">
              <div className={`wp-sign-item-1 ${anima_wp_03 ? 'wp-sign-item-1-mark' : ''}`}>   </div>
              <div className={`wp-sign-item-2 ${anima_wp_03 ? 'wp-sign-item-2-mark' : ''}`}>   </div>
            </div>
          </div>
        </div>



        <div className={`c-wp-item ${ani_03 ? 'ani-appearByRight-07' : 'ani-appearByRightReversed-01'}`}>
          <h4 className="h4-wp-txt-item-title">
            <span className="wp-txt-mark">4??</span>
            Testes e sua an??lise!
          </h4>

          <div className={`c-wp-content-txt ${anima_wp_04 ? 'anima-wp-txt' : 'anima-wp-txt-false'}`}>
            <p className="p-wp-txt-content"> 
              Nessa etapa de desenvolvimento, depois de tudo programado, 
              vem a fase de testes e ent??o coloco a sua disposi????o 
              em um servidor provis??rio para an??lise e aprova????o ou 
              corre????o de eventual problema.
            </p>
          </div>

          <div onClick={handle_wp_4} className="c-wp-item-footer">
            <p className={`p-wp-footer-txt ${anima_wp_04 ? 'p-wp-footer-txt-mark' : ''}`}>
              mostrar / ocultar ...
            </p>
            <div className="wp-sign">
              <div className={`wp-sign-item-1 ${anima_wp_04 ? 'wp-sign-item-1-mark' : ''}`}>   </div>
              <div className={`wp-sign-item-2 ${anima_wp_04 ? 'wp-sign-item-2-mark' : ''}`}>   </div>
            </div>
          </div>
        </div>



        <div className={`c-wp-item ${ani_03 ? 'ani-appearByRight-08' : 'ani-appearByRightReversed-01'}`}>
          <h4 className="h4-wp-txt-item-title">
            <span className="wp-txt-mark">5??</span>
            Deploy e configura????o!
          </h4>

          <div className={`c-wp-content-txt ${anima_wp_05 ? 'anima-wp-txt' : 'anima-wp-txt-false'}`}>
            <p className="p-wp-txt-content">
            Quando finalmente aprovado e pago a ultima parcela, 
            fa??o o deploy(termo usado pra quando vamos "subir" o site/webApp na internet), 
            configuro o que precisar, como dom??nio, etc. E seu projeto estar?? funcionando perfeitamente!
            </p>
          </div>

          <div onClick={handle_wp_5} className="c-wp-item-footer">
            <p className={`p-wp-footer-txt ${anima_wp_05 ? 'p-wp-footer-txt-mark' : ''}`}>
              mostrar / ocultar ...
            </p>
            <div className="wp-sign">
              <div className={`wp-sign-item-1 ${anima_wp_05 ? 'wp-sign-item-1-mark' : ''}`}>   </div>
              <div className={`wp-sign-item-2 ${anima_wp_05 ? 'wp-sign-item-2-mark' : ''}`}>   </div>
            </div>
          </div>
        </div>

        

        <div className={`c-wp-item ${ani_03 ? 'ani-appearByRight-09' : 'ani-appearByRightReversed-01'}`}>
          <h4 className="h4-wp-txt-item-title">
            <span className="wp-txt-mark">6??</span>
            3 meses de suporte gratuito!
          </h4>

          <div className={`c-wp-content-txt ${anima_wp_06 ? 'anima-wp-txt' : 'anima-wp-txt-false'}`}>
            <p className="p-wp-txt-content">
            Durante 3 meses caso o site precise de uma manuten????o 
            das funcionalidades entregues, estarei a disposi????o para dar suporte!
            </p>
            <p className="p-wp-txt-content-obs">
              <span className="mark-txt-obs">obs: </span>
              essa garantia n??o significa adi????es de novas funcionalidades ou altera????es significativas
              das escolhas previamente aprovadas por voc??! e caso isso seja preciso, podemos fazer um novo servi??o
              e dependendo, com um desconto especial! Eu garanto uma qualidade diferenciada na execu????o do projeto aprovado!
            </p>
          </div>

          <div onClick={handle_wp_6} className="c-wp-item-footer">
            <p className={`p-wp-footer-txt ${anima_wp_06 ? 'p-wp-footer-txt-mark' : ''}`}>
              mostrar / ocultar ...
            </p>
            <div className="wp-sign">
              <div className={`wp-sign-item-1 ${anima_wp_06 ? 'wp-sign-item-1-mark' : ''}`}>   </div>
              <div className={`wp-sign-item-2 ${anima_wp_06 ? 'wp-sign-item-2-mark' : ''}`}>   </div>
            </div>
          </div>
        </div>

      </div>
  




    </article>
  </>
)

}

export default OQueFacoWorkProcess;