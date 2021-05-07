import { useRef, useState, useEffect } from 'react';
import ContatoSecHead from './contatoSecHead';

const Contato = () => {

  // ________________________________________________________________
  const el_name                           = useRef(null);
  const el_email                          = useRef(null);
  const el_msg                            = useRef(null);
  const el_btnSubmit                      = useRef(null);
  const [name, setName]                   = useState(null);
  const [email, setEmail]                 = useState(null);
  const [msg, setMsg]                     = useState(null);
  const [enviou, setEnviou]               = useState(Boolean);
  const [isValidName, setIsValidName]     = useState(Boolean);
  const [isFocusName, setIsFocusName]     = useState(Boolean);
  const [isValidEmail, setIsValidEmail]   = useState(Boolean);
  const [isFocusEmail, setIsFocusEmail]   = useState(Boolean);
  const [isValidMsg, setIsValidMsg]       = useState(Boolean);
  const [isFocusMsg, setIsFocusMsg]       = useState(Boolean);

  const handleFocusName = () => {
    setIsFocusName(true); 
  };
  const handleFocusEmail = () => {
    setIsFocusEmail(true); 
  };
  const handleFocusMsg = () => {
    setIsFocusMsg(true); 
  };

  const handleChangeName = (e) => {
    let nome = e.target.value;
    let RegexNome = new RegExp(/.{3,}/gi);
    if(nome.match(RegexNome)) {
      setIsValidName(true)
      setName(nome);
    } else {
      setIsValidName(false)
    }
  };
  const handleChangeEmail = (e) => {
    let objEmail = e.target.value;
    let RegexEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(objEmail.match(RegexEmail)) {
      setIsValidEmail(true)
      setEmail(objEmail);
    } else {
      setIsValidEmail(false)
    }
  };
  const handleChangeMsg = (e) => {
    let ObjMsg = e.target.value;
    let RegexMsg = new RegExp(/.{3,}/gi);
    if(ObjMsg.match(RegexMsg)) {
      setIsValidMsg(true);
      // isValidEmail && isValidMsg ? $btnSubmit.current.disable = false : '';
      setMsg(ObjMsg);
    } else {
      setIsValidMsg(false);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('Enviando');
    let dados = {
      name,
      email,
      msg
    };
    await fetch(
      '/api/contato', 
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      }
    ).then((res) => {
      // console.log('Resposta Recebida');
      if (res.status === 200) {
        // console.log('Resposta Com Sucesso');
        setEnviou(true);
        setName('');
        setEmail('');
        setMsg('');
      }
    });
    el_name.current.value = '';
    el_email.current.value = '';
    el_msg.current.value = '';
  };
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

  const e_01             = useRef(null);
  const e_02             = useRef(null);
  const [a_01, setA_01]   = useState(Boolean);
  const [a_02, setA_02]   = useState(Boolean);

  useEffect(() => {
    
    const scroll = (e) => {
      e.preventDefault();
      let onAni = window.pageYOffset + (window.innerHeight * 3 / 4) - 64;

      let a_Calc_01 = e_01.current.offsetTop + e_01.current.offsetParent.offsetTop;
      let condition_01 = onAni >= a_Calc_01;
      setA_01(condition_01);
      
      let a_Calc_02 = e_02.current.offsetTop + e_02.current.offsetParent.offsetTop + 32;
      let condition_02 = onAni >= a_Calc_02;
      setA_02(condition_02);
    }

    window.addEventListener("scroll", scroll, false);
    return () => {
      window.removeEventListener("scroll", scroll, false);
    }
  }, [])




  return (
  <>
    <section className="c-sec">
      <ContatoSecHead />
        
      <div ref={e_01} className={`c-githb-link ${a_01 ? 'ani-appearByBottom-02' : 'ani-appearByBottomReversed-01'}`}>
        <a 
          rel="noreferrer" 
          href="https://wa.me/5515988018431" 
          className="a-github-link"
          target="_blank"
        >
          <div className="c-img-github-link">
            <img src="/whatsLogo.svg" alt="Whatsapp" className="img-github-svg-link" />
          </div>
            <p className="p-link-github">Fale comigo pelo WhatsApp</p>
        </a>
      </div>

      <div className="c-limmiter">
        <form action="" ref={e_02} className={`c-form ${a_02 ? 'ani-appearByRight-01' : 'ani-appearByRightReversed-01'} ${enviou ? 'ani-appearByRightReversed-01' : ''}`}>

          <h3 className={`h3-txt-form-email ${true ? 'ani-appearByLeft-02' : 'ani-appearByLeftReversed-01' }`}>mande-me um email: </h3>

          <formgroup className="c-fg-form">
            <label htmlFor="name" className={`fg-label ${isFocusName ? isValidName ? '' : 'mark-redAlert' : ''}`}>
            {isFocusName ? isValidName ? 'Seu nome:' : 'Por favor escreva seu nome:' : "Seu nome:"}
            </label>
            <input 
              ref={el_name}
              type="text" 
              name="name" 
              id="name" 
              className="fg-input" 
              onChange={handleChangeName}
              onFocus={handleFocusName}
            />
          </formgroup>

          <formgroup className="c-fg-form">
            <label htmlFor="email" className={`fg-label ${isFocusEmail ? isValidEmail ? '' : 'mark-redAlert' : ''}`}>
            {isFocusEmail ? isValidEmail ? 'Seu email:' : 'Por favor verifique se o email está correto:' : "Seu email:"}
            </label>
            <input 
              ref={el_email}
              type="text"
              name="email"
              id="email" 
              className="fg-input"
              onChange={handleChangeEmail}
              onFocus={handleFocusEmail}
            />
          </formgroup>

          <formgroup className="c-fg-form">
            <label htmlFor="msg" className={`fg-label ${isFocusMsg ? isValidMsg ? '' : 'mark-redAlert' : ''}`}>
            {isFocusMsg ? isValidMsg ? 'Sua mensagem:' : 'Por favor escreva sua mensagem sobre sua necessidade:' : "Sua mensagem:"}
            </label>
            <textarea 
              ref={el_msg}
              name="msg"
              id="msg"
              className="fg-txtarea-msg"
              onChange={handleChangeMsg}
              onFocus={handleFocusMsg}
            />
          </formgroup>

          <input ref={el_btnSubmit}
            type="submit"
            className="btn-submit"
            value="enviar email"
            onClick={handleSubmit}
            disabled={ isValidName ? isValidMsg ? isValidEmail ? false : true : true : true}
          />
        </form>

        
        <div className={`c-alert ${enviou ? 'c-alert-send-true' : 'c-alert-send'}`}>
          <p className="txt-alert-send">Seu email foi enviado com sucesso!</p>
          
        </div>
      </div>

    </section>
  </>
);

}

export default Contato;