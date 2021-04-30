
import { useEffect, useRef, useState } from 'react';
import HomeSecHead from './homeSecHead';


const Home = () => {

  // ________________________________
  const e_01 = useRef(null);
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

  // ________________________________
  const [ani_01, setAni_01] = useState(false);
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

  // ________________________________
  // useEffect(() => {

  //   const scroll = (e) => {
  //     e.preventDefault();
  //     let onAni = window.pageYOffset + (window.innerHeight * 4 / 5);
  //     (onAni > e_01.current.offsetTop) ? setAni_01(true) : setAni_01(false);

  //     // console.log(e_01.current.offsetTop);
  //   }

  //   window.addEventListener("scroll", scroll, false);
  //   return () => {
  //     window.removeEventListener("scroll", scroll, false);
  //   }
  // }, []);
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾


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

      </article>

    </section>
  </>
);

}

export default Home;