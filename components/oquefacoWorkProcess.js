import { useState, useEffect, useRef } from "react";


const OQueFacoWorkProcess = () => {

  const [anima_wp_01, setAnima_wp_01] = useState(false);
  const [anima_wp_02, setAnima_wp_02] = useState(false);
  const [anima_wp_03, setAnima_wp_03] = useState(false);
  const [anima_wp_04, setAnima_wp_04] = useState(false);
  const [anima_wp_05, setAnima_wp_05] = useState(false);
  const [anima_wp_06, setAnima_wp_06] = useState(false);

  const obj_1 = useRef(null);
  const obj_2 = useRef(null);
  const obj_3 = useRef(null);
  const obj_4 = useRef(null);
  const obj_5 = useRef(null);
  const obj_6 = useRef(null);

  const handle_wp_1 = (e) => {
    e.preventDefault();
    setAnima_wp_01(!anima_wp_01);
    console.log('1 - ', anima_wp_01);
  }

  const handle_wp_2 = (e) => {
    e.preventDefault();
    setAnima_wp_02(!anima_wp_02);
    console.log('2 - ', anima_wp_02);
  }

  const handle_wp_3 = (e) => {
    e.preventDefault();
    setAnima_wp_03(!anima_wp_03);
    console.log('3 - ', anima_wp_03);
  }

  const handle_wp_4 = (e) => {
    e.preventDefault();
    setAnima_wp_04(!anima_wp_04);
    console.log('4 - ', anima_wp_04);
  }

  const handle_wp_5 = (e) => {
    e.preventDefault();
    setAnima_wp_05(!anima_wp_05);
    console.log('5 - ', anima_wp_05);
  }

  const handle_wp_6 = (e) => {
    e.preventDefault();
    setAnima_wp_06(!anima_wp_06);
    console.log('6 - ', anima_wp_06);
  }

  useEffect(() => {
    setAnima_wp_01(false);
    setAnima_wp_02(false);
    setAnima_wp_03(false);
    setAnima_wp_04(false);
    setAnima_wp_05(false);
    setAnima_wp_06(false);
    return {
    }
  }, []);

  return (
  <>
    
    <article className="c-art-home">

      <div className="c-piece-art-txt">
        <h3 className="h3-txt-art-title ani-appearByLeft-01">Processo de trabalho...</h3>
        <p className="p-txt-art-piece ani-appearByScale-02">
          Eu <span className="mark-txt-color-green mark-txt-bold"> trabalho remotamente</span>,
          não apenas em função da pandemia, eu sempre quis trabalhar remotamente e agora ainda mais, 
          graças a internet, no desenvolvimento de sites, aplicativos, etc.,  
          <span className="mark-txt-color-blue mark-txt-bold"> é possível e muito viável </span>
          trabalhar assim, por isso, com várias motivações ao trabalho remoto, tenho um 
          processo de trabalho, desde o briefing, e desenvolvimento até o orçamento e pagamento:
        </p>
      </div>


      <div className="c-wp">
        <div ref={obj_1} className="c-wp-item">

          <h4 className="h4-wp-txt-item-title">
            <span className="wp-txt-mark">1º</span>
            Conhecendo suas necessidades
          </h4>

          <div className={`c-wp-content-txt ${anima_wp_01 ? 'anima-wp-txt' : 'anima-wp-txt-false'}`}>
            <p className="p-wp-txt-content">
              Primeiramente, entramos em contato(por email, whasapp, etc), 
              E conversamos, faço perguntas pertinentes para eu entender adequadamente
              quais as suas necessidades e objetivos (briefing), depois faço uma análise para criar um orçamento
              e desenvolver uma estratégia certeira para dar a você a melhor solução, e também um prazo justo!
            </p>
            <p className="p-wp-txt-content-obs">
              <span className="mark-txt-obs">obs: </span>
              Se já tem uma noção do que queira, peço para conversarmos melhor, 
              antes de contratar um serviço de hospedagem, pois se contratar antes de 
              consultar o dev, pode acontecer de que o serviço contratado não suporte as tecnologias 
              necessárias que serão utilizadas para desenvolver seu projeto. Consultando contudo, 
              posso apontar o tipo de serviço de hospedagem  e/ou uma lista de serviços 
              melhores para sua necessidade visando o custo/benefício, e dependendo se seu projeto for simples
              como uma landing page, eu posso até sugerir lugares ótimos e com ótimos preços!.
            </p>
          </div>

          <div onClick={handle_wp_1} className="c-wp-item-footer">
            <p className="p-wp-footer-txt">
              mostrar / ocultar ...
            </p>
            <div className="wp-sign">
              <div className="wp-sign-item-1">   </div>
              <div className="wp-sign-item-2">   </div>
            </div>
          </div>
        </div>



        <div className="c-wp-item">
          <h4 className="h4-wp-txt-item-title">
            <span className="wp-txt-mark">2º</span>
            Design e protótipos
          </h4>

          <div className={`c-wp-content-txt ${anima_wp_02 ? 'anima-wp-txt' : 'anima-wp-txt-false'}`}>
            <p className="p-wp-txt-content">  
              Com uma idéia clara das necessidades e objetivos, vou ao desenvolvimento dos protótipos
              para poder dar uma idéia geral a você de como ficará! se não possuir um design eu crio um
              seguindo as melhores práticas de design, UI/UX (Design de Interface e Experiência do usuário), 
              e ponho a sua disposição de alguma forma para você avaliar o que será desenvolvido!
            </p>
          </div>

          <div onClick={handle_wp_2} className="c-wp-item-footer">
            <p className="p-wp-footer-txt">
              mostrar / ocultar ...
            </p>
            <div className="wp-sign">
              <div className="wp-sign-item-1">   </div>
              <div className="wp-sign-item-2">   </div>
            </div>
          </div>
        </div>



        <div className="c-wp-item">
          <h4 className="h4-wp-txt-item-title">
            <span className="wp-txt-mark">3º</span>
            Desenvolvendo de fato!
          </h4>

          <div className={`c-wp-content-txt ${anima_wp_03 ? 'anima-wp-txt' : 'anima-wp-txt-false'}`}>
            <p className="p-wp-txt-content">  
              Com o design pronto e aprovado, começo o desenvolvimento do código, 
              e escolho as tecnologias que serão usadas, no caso de sites, 
              aplicações web e lojas virtuais escolhemos um servidor de hospedagem que 
              suporte as tecnologias usadas e se adeque ao tipo de necessidade,
              fique tranquil@, que te ajudo em todo o processo. 
              Com o pagamento da 1º parcela começo o desenvolvimento.
            </p>
            <p className="p-wp-txt-content-obs">
              <span className="mark-txt-obs">obs: </span>
              Eu gosto de cobrar por projeto, pois assim temos uma segurança mútua, e 
              geralmente divido em duas parcelas, a primeira paga depois de aprovado o protótipo,
              pois assim, trabalho mais feliz e dedicado a concluir da melhor forma possível, e outra 
              depois de desenvolvido tudo, essa parcela final tende a ser maior, pela garantia mútua,
              não entrego o projeto antes de pagar a última parcela(hospedo num lugar provisório para você avaliar antes de pagar)! 
              e você pode ter certeza que eu entrego um bom projeto, pois quero gerar valor junto com você!
            </p>
          </div>

          <div onClick={handle_wp_3} className="c-wp-item-footer">
            <p className="p-wp-footer-txt">
              mostrar / ocultar ...
            </p>
            <div className="wp-sign">
              <div className="wp-sign-item-1">   </div>
              <div className="wp-sign-item-2">   </div>
            </div>
          </div>
        </div>



        <div className="c-wp-item">
          <h4 className="h4-wp-txt-item-title">
            <span className="wp-txt-mark">4º</span>
            Testes e sua análise!
          </h4>

          <div className={`c-wp-content-txt ${anima_wp_04 ? 'anima-wp-txt' : 'anima-wp-txt-false'}`}>
            <p className="p-wp-txt-content"> 
              Nessa etapa de desenvolvimento, depois de tudo programado, 
              vem a fase de testes e então coloco a sua disposição 
              em um servidor provisório para análise e aprovação ou 
              correção de eventual problema.
            </p>
          </div>

          <div onClick={handle_wp_4} className="c-wp-item-footer">
            <p className="p-wp-footer-txt">
              mostrar / ocultar ...
            </p>
            <div className="wp-sign">
              <div className="wp-sign-item-1">   </div>
              <div className="wp-sign-item-2">   </div>
            </div>
          </div>
        </div>



        <div className="c-wp-item">
          <h4 className="h4-wp-txt-item-title">
            <span className="wp-txt-mark">5º</span>
            Deploy e configuração!
          </h4>

          <div className={`c-wp-content-txt ${anima_wp_05 ? 'anima-wp-txt' : 'anima-wp-txt-false'}`}>
            <p className="p-wp-txt-content">
            Quando finalmente aprovado e pago a ultima parcela, 
            faço o deploy(termo usado pra quando vamos "subir" o site/webApp na internet), 
            configuro o que precisar, como domínio, etc. E seu projeto estará funcionando perfeitamente!
            </p>
          </div>

          <div onClick={handle_wp_5} className="c-wp-item-footer">
            <p className="p-wp-footer-txt">
              mostrar / ocultar ...
            </p>
            <div className="wp-sign">
              <div className="wp-sign-item-1">   </div>
              <div className="wp-sign-item-2">   </div>
            </div>
          </div>
        </div>

        

        <div className="c-wp-item">
          <h4 className="h4-wp-txt-item-title">
            <span className="wp-txt-mark">6º</span>
            3 meses de suporte gratuito!
          </h4>

          <div className={`c-wp-content-txt ${anima_wp_06 ? 'anima-wp-txt' : 'anima-wp-txt-false'}`}>
            <p className="p-wp-txt-content">
            Durante 3 meses caso o site precise de uma manutenção 
            das funcionalidades entregues, estarei a disposição para dar suporte!
            </p>
            <p className="p-wp-txt-content-obs">
              <span className="mark-txt-obs">obs: </span>
              essa garantia não significa adições de novas funcionalidades ou alterações significativas
              das escolhas previamente aprovadas por você! e caso isso seja preciso, podemos fazer um novo serviço
              e dependendo, com um desconto especial! Eu garanto uma qualidade diferenciada na execução do projeto aprovado!
            </p>
          </div>

          <div onClick={handle_wp_6} className="c-wp-item-footer">
            <p className="p-wp-footer-txt">
              mostrar / ocultar ...
            </p>
            <div className="wp-sign">
              <div className="wp-sign-item-1">   </div>
              <div className="wp-sign-item-2">   </div>
            </div>
          </div>
        </div>

      </div>
  




    </article>
  </>
)

}

export default OQueFacoWorkProcess;