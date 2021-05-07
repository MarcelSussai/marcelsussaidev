
import LogoContato from './svgs/logocontato';
import { useEffect, useRef, useState } from 'react';

const ContatoSecHead = () => {

  const el_1 = useRef(null);

  const [ani_01, setAni_01] = useState(Boolean);

  useEffect(() => {

    const scroll = (e) => {
      e.preventDefault();
      let onAni = window.pageYOffset + (window.innerHeight * 3 / 4) - 64;
      // ________________________________________________________________
      let a_Calc_01 = el_1.current.offsetTop + el_1.current.offsetParent.offsetTop;
      let condition_01 = onAni >= a_Calc_01;
      setAni_01(condition_01);
      // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
    }
    
    window.addEventListener("scroll", scroll, false);
    return () => {
      window.removeEventListener("scroll", scroll, false);
    }
  }, [])

  return (
  <>
  <div className="c-sec-head-title">
    <div className={`c-img-logo-sec ${ani_01 ? 'ani-appearByLeft-02' : 'ani-appearByLeftReversed-01' }`}>
      <LogoContato className="svg-logo-sec" />
    </div>
    <h2 ref={el_1} className={`h2-sec-head-title ${ani_01 ? 'ani-appearByRight-03' : 'ani-appearByRightReversed-01' }`}>Contato...</h2>
  </div>
    
  </>
);

}

export default ContatoSecHead;