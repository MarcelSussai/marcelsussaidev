
import { useEffect, useRef, useState } from 'react';
import HomeSecHead from './homeSecHead';


const Home = () => {

  const e_01 = useRef(null);
  const e_02 = useRef(null);
  const e_03 = useRef(null);

  const [ani_01, setAni_01] = useState(false);
  const [ani_02, setAni_02] = useState(false);
  const [ani_03, setAni_03] = useState(false);

  useEffect(() => {

    const scroll = (e) => {
      e.preventDefault();
      let onAni = window.pageYOffset + (window.innerHeight * 3 / 4) - 64;
      (onAni > e_01.current.offsetTop) ? setAni_01(true) : setAni_01(false);
      (onAni > e_02.current.offsetTop) ? setAni_02(true) : setAni_02(false);
      (onAni > e_03.current.offsetTop) ? setAni_03(true) : setAni_03(false);

      // console.log(e_01.current.offsetTop);
    }

    window.addEventListener("scroll", scroll, false);
    return () => {
      window.removeEventListener("scroll", scroll, false);
    }
  }, []);


  return (
  <>
    <section className="c-sec">

      <HomeSecHead />

      <article className="c-art-home">

        <div className="c-piece-art-txt">
          <h3 className="h3-txt-art-title ani-appearByLeft-01">Olá, seja bem vind@...</h3>
          <p className="p-txt-art-piece ani-appearByScale-02">
            Sou programador e desenvolvedor web freelancer, um criador de 
            <span className="mark-txt-color-green mark-txt-bold"> experiências digitais </span> de valor... <br/>
            O uso de tecnologia digital para criar sensações, desejos, emoções,
            <span className="mark-txt-color-blue mark-txt-bold"> automatizar e gerenciar tarefas</span>, 
            transmitir e processar informações, conectar o mundo,
            <span className="mark-txt-color-green mark-txt-bold"> vender algo </span> 
            ou até mesmo divulgar sua obra de arte e se comunicar, é experiência digital! <br/>
            <span className="mark-txt-color-blue mark-txt-bold"> A internet </span> está
            <span className="mark-txt-color-green mark-txt-bold"> conectando milhões de dispositivos pelo mundo</span>, 
            como computadores e celulares, tablets e relógios inteligentes,
            TVs e até geladeiras! <br/>
            Todos os usos disso são experiências digitais!
          </p>
        </div>

        <div className={`c-art-img ${ani_01 ? 'ani-appearByBottom-01' : 'ani-appearByBottomReversed-01'}`} ref={e_01}>
          <img src="/Connection.svg" alt="Dispositivos se conectando" className="svg-art-img" />
        </div>

        <div className="c-piece-art-txt">
          <h3 ref={e_02} className={`h3-txt-art-title ${ani_02 ? 'ani-appearByLeft-02' : 'ani-appearByLeftReversed-01' }`}>Tecnologia que importa!</h3>
          <p ref={e_03} className={`p-txt-art-piece ${ani_03 ? 'ani-appearByScale-03' : 'ani-appearByScaleReversed-01' }`}>
            Ofereço 
            <span className="mark-txt-color-green mark-txt-bold"> serviços </span> e
            <span className="mark-txt-color-blue mark-txt-bold"> produtos digitais </span>
            que ajudarão seu negócio, iniciativa/projeto a ter expressividade digital,
            me preocupo com tudo para que os resultados gerem valor, ou que dão a solução ideal
            para o que você precisa! <br/>
            Hoje em dia, a tecnologia está
            <span className="mark-txt-color-green mark-txt-bold"> acessível a todos</span>, aos mais de
            <span className="mark-txt-color-blue mark-txt-bold"> 7 bilhões </span>
            de pessoas no nosso planeta, a web tem crescido muito, e vai crescer ainda muito mais,
            o poder de 
            <span className="mark-txt-color-green mark-txt-bold"> gerar valor </span>
            da internet é enorme e por isso é importante o uso da tecnologia digital, é óbvio!...
          </p>
        </div>


      </article>

    </section>
  </>
);

}

export default Home;