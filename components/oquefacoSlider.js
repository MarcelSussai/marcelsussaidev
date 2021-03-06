import { useRef, useState, useEffect } from "react";

const OQueFacoSlider = () => {


  const ref_Art_Slider_Container          = useRef(null);
  const ref_item_Slider_1                 = useRef(null);
  const ref_item_Slider_2                 = useRef(null);
  const ref_item_Slider_3                 = useRef(null);
  const ref_item_Slider_4                 = useRef(null);

  const [state_item_1, setState_item_1]   = useState(true);
  const [state_item_2, setState_item_2]   = useState(false);
  const [state_item_3, setState_item_3]   = useState(false);
  const [state_item_4, setState_item_4]   = useState(false);
  
  const [ani_1, setAni_1]   = useState(Boolean);

  const handle_click_slider_1 = (e) => {
    e.preventDefault();
    ref_Art_Slider_Container.current.scrollLeft = 0;
  }
  const handle_click_slider_2 = (e) => {
    e.preventDefault();
    ref_Art_Slider_Container.current.scrollLeft = ref_item_Slider_1.current.scrollWidth;
  }
  const handle_click_slider_3 = (e) => {
    e.preventDefault();
    ref_Art_Slider_Container.current.scrollLeft = ref_item_Slider_1.current.scrollWidth * 2;
  }
  const handle_click_slider_4 = (e) => {
    e.preventDefault();
    ref_Art_Slider_Container.current.scrollLeft = ref_item_Slider_1.current.scrollWidth * 3;
  }
  const handle_click_slider_prev = (e) => {
    e.preventDefault();
    if (state_item_1) {
      ref_Art_Slider_Container.current.scrollLeft = ref_item_Slider_1.current.scrollWidth * 3;
    } else {
      ref_Art_Slider_Container.current.scrollLeft -= ref_item_Slider_1.current.scrollWidth;
    }
  };
  const handle_click_slider_next = (e) => {
    e.preventDefault();
    if (state_item_4) {
      ref_Art_Slider_Container.current.scrollLeft = 0;
    } else {
      ref_Art_Slider_Container.current.scrollLeft += ref_item_Slider_1.current.scrollWidth;
    }
  };

  useEffect(() => {
    setState_item_1(true);
    setState_item_2(false);
    setState_item_3(false);
    setState_item_4(false);

    const scroll = (e) => {
      e.preventDefault();
      let onAni = window.pageYOffset + (window.innerHeight * 3 / 4) - 32;

      let Calc =  ref_Art_Slider_Container.current.offsetParent.offsetTop + 
                  ref_Art_Slider_Container.current.offsetParent.offsetParent.offsetTop + 48;

      let condition_1 = onAni >= Calc;
      setAni_1(condition_1);
    }

    const scrollPosition = (e) => {
      e.preventDefault();

      let width1 = 0;
      let width2 = ref_item_Slider_1.current.scrollWidth;
      let width3 = ref_item_Slider_1.current.scrollWidth * 2;
      let width4 = ref_item_Slider_1.current.scrollWidth * 3;
      let refContainerLeft = ref_Art_Slider_Container.current.scrollLeft;

      
      if(refContainerLeft <= width1) {
        setState_item_1(true);
        setState_item_2(false);
        setState_item_3(false);
        setState_item_4(false);
      } else
      if(refContainerLeft <= width2) {
        setState_item_1(false);
        setState_item_2(true);
        setState_item_3(false);
        setState_item_4(false);
      } else
      if(refContainerLeft <= width3) {
        setState_item_1(false);
        setState_item_2(false);
        setState_item_3(true);
        setState_item_4(false);
      } else
      if(refContainerLeft <= width4) {
        setState_item_1(false);
        setState_item_2(false);
        setState_item_3(false);
        setState_item_4(true);
      }

    }

    window.addEventListener("scroll", scroll, false);
    ref_Art_Slider_Container.current.addEventListener('scroll', scrollPosition, false);
    return () => {
      window.removeEventListener("scroll", scroll, false);
      ref_Art_Slider_Container.current.removeEventListener('scroll', scrollPosition, false);
    };
  }, [])


  return (
  <>
    <div className={`c-oquefaco-slider ${ani_1 ? 'ani-appearByTop-03' : 'ani-appearByTopReversed-02'}`}>

      <article className="c-art-slider" ref={ref_Art_Slider_Container}>

        <div className="c-item-slide" ref={ref_item_Slider_1}>
          <div className="c-card-slide">
            <div className="card-slide">
              <h3 className="h3-card-title-slide">Cria????o de Sites</h3>
              <div className="c-img-slide">
                <img src="/LogoSites.svg" alt="Web Sites" className="svg-slide" />
              </div>
              <p className="p-txt-card-slide">
                Cria????o de sites
                <span className="mark-txt-color-blue2 mark-txt-bold"> responsivos</span>,
                r??pidos e otimizados para motores de busca 
                (<span className="mark-txt-color-green2 mark-txt-bold">SEO</span>) e
                para o marketing digital conforme sua necessidade, e se n??o tiver um design
                eu tamb??m posso criar um com boas pr??ticas de UI/UX ...
              </p>
            </div>
          </div>
        </div>

        <div className="c-item-slide" ref={ref_item_Slider_2}>
          <div className="c-card-slide">
            <div className="card-slide">
              <h3 className="h3-card-title-slide">Aplica????es Web</h3>
              <div className="c-img-slide">
                <img src="/LogoWebApps.svg" alt="Servi??os Back End" className="svg-slide" />
              </div>
              <p className="p-txt-card-slide">
              Cria????o de aplica????es na internet
              <span className="mark-txt-color-blue2 mark-txt-bold"> robustas</span>,
              podendo ter um site, um app e um sistema back-end fornecendo uma
              <span className="mark-txt-color-green2 mark-txt-bold"> aplica????o completa </span>
              na web, criando a solu????o que seja a ideal para sua necessidade!
            </p>
            </div>
          </div>
        </div>

        <div className="c-item-slide" ref={ref_item_Slider_3}>
          <div className="c-card-slide">
            <div className="card-slide">
              <h3 className="h3-card-title-slide">Aplicativos Mobile</h3>
              <div className="c-img-slide">
                <img src="/LogoAppsMobile.svg" alt="Apps Mobile" className="svg-slide" />
              </div>
              <p className="p-txt-card-slide">
              Cria????o de apps de
              <span className="mark-txt-color-blue2 mark-txt-bold"> experi??ncia nativa</span>,
              utilizando recursos dos dispositivos
              <span className="mark-txt-color-green2 mark-txt-bold"> mobile</span>, e
              sendo bem desenvolvido, r??pido e eficiente para diversas aplica????es 
              disponibilizando-as nas lojas como o Play Store, etc. 
            </p>
            </div>
          </div>
        </div>
        
        <div className="c-item-slide" ref={ref_item_Slider_4}>
          <div className="c-card-slide">
            <div className="card-slide">
              <h3 className="h3-card-title-slide">Lojas Virtuais</h3>
              <div className="c-img-slide">
                <img src="/LogoVirtualStore.svg" alt="Lojas Virtuais" className="svg-slide" />
              </div>
              <p className="p-txt-card-slide">
              Cria????o de lojas virtuais que podem conter um aplicativo, responsivas e que
              tamb??m ?? otimizada para
              <span className="mark-txt-color-blue2 mark-txt-bold"> SEO</span>.
              Com um
              <span className="mark-txt-color-green2 mark-txt-bold"> gerenciador de conte??do personalizado</span>. 
              A melhor experi??ncia para voc?? e seu cliente!
            </p>
            </div>
          </div>
        </div>

      </article>

      <div className="c-slider-nav">
        <a className="slider-btn-prev slider-btns-prevnext" onClick={handle_click_slider_prev}>&lt;</a>
        <div className="c-slider-btns-items">
          <a className={`slider-btn-item ${state_item_1 ? 'slider-btn-item-mark' : ''}`} onClick={handle_click_slider_1}>   </a>
          <a className={`slider-btn-item ${state_item_2 ? 'slider-btn-item-mark' : ''}`} onClick={handle_click_slider_2}>   </a>
          <a className={`slider-btn-item ${state_item_3 ? 'slider-btn-item-mark' : ''}`} onClick={handle_click_slider_3}>   </a>
          <a className={`slider-btn-item ${state_item_4 ? 'slider-btn-item-mark' : ''}`} onClick={handle_click_slider_4}>   </a>
        </div>
        <a className="slider-btn-next slider-btns-prevnext" onClick={handle_click_slider_next}> &gt; </a>
      </div>

    </div>
  </>
);

}

export default OQueFacoSlider;