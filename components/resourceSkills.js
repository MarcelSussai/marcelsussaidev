import { useEffect, useRef, useState } from 'react';


const ResourceSkills = () => {

  const el = useRef(null);
  const [anima, setAnima] = useState(Boolean);

  useEffect(() => {

    const scroll = (e) => {
      e.preventDefault();

      let onAni = window.pageYOffset + (window.innerHeight * 3 / 4) - 32;
      let a_Calc_01 = el.current.offsetTop + el.current.offsetParent.offsetTop;
      let condition_01 = onAni >= a_Calc_01;
      setAnima(condition_01);

    }

    window.addEventListener("scroll", scroll, false);
    return  () => {
      window.removeEventListener("scroll", scroll, false);
    }
  }, []);

  return (
  <>
    <div ref={el} className={`c-skills ${anima ? 'ani-appear-04' : 'ani-appearReversed-01'}`}>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoHtml.svg" alt="HTML" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">HTML</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoCss.svg" alt="CSS" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">CSS</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoJavascript.svg" alt="Javascript" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Javascript</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoNode.svg" alt="Node JS" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Node JS</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoReact.svg" alt="React" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">React</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoReactNative.svg" alt="ReactNative" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">ReactNative</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoExpo.svg" alt="Expo" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Expo</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoRedux.svg" alt="Redux" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Redux</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoSass.svg" alt="Sass" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Sass</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoTypescript.svg" alt="Typescript" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Typescript</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoGit.svg" alt="Git" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Git</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoGitHub.svg" alt="Github" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Github</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoNext.svg" alt="Nextjs" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Next JS</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoNpm.svg" alt="NPM" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">NPM</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoYarn.svg" alt="Yarn" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Yarn</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoEjs.svg" alt="EJS" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">EJS</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoElectron.svg" alt="Electron" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Electron</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoMongo.svg" alt="Mongo db" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Mongo db</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoGraphQL.svg" alt="GraphQL" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">GraphQL</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoApollo.svg" alt="Apollo" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Apollo</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoExpress.svg" alt="Express" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Express</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoGatsby.svg" alt="Gatsby" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Gatsby</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoJest.svg" alt="Jest" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Jest</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoSequelize.svg" alt="Sequelize" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Sequelize</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoStrapi.svg" alt="Strapi" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Strapi</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoWebPack.svg" alt="Webpack" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Webpack</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoDocker.svg" alt="Docker" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Docker</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoFirebase.svg" alt="Firebase" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Firebase</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoGoogleAnalytics.svg" alt="Google Analytics" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Google Analytics</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoMySql.svg" alt="MySql" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">MySql</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoUbuntu.svg" alt="Ubuntu" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Ubuntu</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoNginx.svg" alt="Nginx" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Nginx</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoAdobeXD.svg" alt="AdobeXD" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">AdobeXD</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoIllustrator.svg" alt="Illustrator" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Illustrator</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoPhotoshop.svg" alt="Photoshop" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">Photoshop</p>
      </div>

      <div className="c-skills-item">
        <div className="c-skills-img-logo">
          <img src="/logoSkills/LogoPostgreesql.svg" alt="PostgreeSql" className="img-svg-skill" />
        </div>
        <p className="p-txt-skills">PostgreeSql</p>
      </div>

    </div>
  </>
);

}

export default ResourceSkills;