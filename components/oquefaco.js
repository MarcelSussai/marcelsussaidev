import { useEffect, useRef, useState } from 'react';
import OQueFacoWorkProcess from './oquefacoWorkProcess';
import OQueFacoSecHead from "./oquefacoSecHead";
import OQueFacoSlider from './oquefacoSlider';


const OQueFaco = () => {

  const e_01 = useRef(null);

  const [aniQ01, setAniQ01] = useState(Boolean);
  
  
  useEffect(() => {
    const scroll = (e) => {
      e.preventDefault();
      let onAni = window.pageYOffset + (window.innerHeight * 3 / 4) - 32;

      let a_Calc_01 = e_01.current.offsetTop + e_01.current.offsetParent.offsetTop;
      let condition_01 = onAni >= a_Calc_01;
      setAniQ01(condition_01);

    }
    window.addEventListener("scroll", scroll, false);
    return () => {
      window.removeEventListener("scroll", scroll, false);
    }
  }, []);

  return (
  <>
    <section className="c-sec">

      <OQueFacoSecHead />

      <p ref={e_01} className={`p-txt-comment ${aniQ01 ? 'ani-appearByTop-02' : 'ani-appearByTopReversed-01'}`}>
        Ou etapas, se tiver algo pronto posso partir daí, senão,
        <span className="mark-txt-color-yellow"> faço do zero!</span>
      </p>

      <OQueFacoSlider />

      <OQueFacoWorkProcess />

    </section>
  </>
);

}

export default OQueFaco;