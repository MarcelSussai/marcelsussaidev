import { useEffect, useRef, useState } from 'react';
import LogoQueFaco from './svgs/logoquefaco';

const OQueFacoSecHead = () => {

  // ________________________________
  const e_01 = useRef(null);
  const e_02 = useRef(null);
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

  // ________________________________
  const [aniQ01, setAniQ01] = useState(Boolean);
  const [aniQ02, setAniQ02] = useState(Boolean);
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



  // ________________________________
  useEffect(() => {

    const scroll = (e) => {
      e.preventDefault();
      let onAni = window.pageYOffset + (window.innerHeight * 3 / 4);

      // ________________________________________________________________
      let a_Calc_01 = e_01.current.offsetTop + e_01.current.offsetParent.offsetTop + 64;
      let condition_01 = onAni >= a_Calc_01;
      setAniQ01(condition_01);
      // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

      // ________________________________________________________________
      let a_Calc_02 = e_02.current.offsetTop + e_02.current.offsetParent.offsetTop + 32;
      let condition_02 = onAni >= a_Calc_02;
      setAniQ02(condition_02);
      // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

      // console.log(
      //   ' - state: - ', aniQ01, 
      //   ' - condition: - ', condition_01, 
      //   ' - sensor: - ', onAni, 
      //   ' - El calc:  - ', a_Calc_01,
      //   ' - El Top:  - ', e_01.current.offsetTop,
      //   ' - El Parent Top:  - ', e_01.current.offsetParent.offsetTop,
      //   ' - window Height:  - ', window.innerHeight,
      //   ' - window Y:  - ', window.pageYOffset
      // );
    }

    window.addEventListener("scroll", scroll, false);
    return () => {
      window.removeEventListener("scroll", scroll, false);
    }
  }, []);
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

  return (
  <>
    <div className="c-sec-head-title">
      <div className={`c-img-logo-sec ${aniQ01 ? 'ani-appearByLeft-02' : 'ani-appearByLeftReversed-01' }`}>
        <LogoQueFaco className="svg-logo-sec" />
      </div>
      <h2 ref={e_01} className={`h2-sec-head-title ${aniQ01 ? 'ani-appearByRight-03' : 'ani-appearByRightReversed-01' }`}>O que faço...</h2>
    </div>

    <div ref={e_02} className={`c-sec-head ${aniQ02 ? 'ani-appear-02' : 'ani-appearReversed-02'}`}>
      <div className={`c-sec-head-content ${aniQ02 ? 'ani-appear-03' : 'ani-appearReversed-02'}`}>
        <h2 className={`c-h2-txt-sec ${aniQ02 ? 'ani-appearByScale-04' : 'ani-appearByScaleReversed-02'}`}>
          Sou
          <span className="mark-txt-color-blue"> capaz </span> 
          de fazer o
          <span className="mark-txt-color-green"> projeto todo </span>.
          Isso é ser
          <span className="mark-txt-color-blue"> full-stack</span>... 
        </h2>
        <div className={`c-sec-head-content-img ${aniQ02 ? 'ani-appearByRight-01' : 'ani-appearByRightReversed-02' }`}>
          <div className={`c-sec-head-img ${aniQ02 ? 'ani-appearByRight-02' : 'ani-appearByRightReversed-01' }`}>
            <img src="/programmingdev.svg" alt="Imagem de um desenho de um computador programando e um servidor cloud" className="svg-sec-head" />
          </div>
        </div>
      </div>
    </div>
  </>
);

}

export default OQueFacoSecHead;