import React, { useState, useEffect } from 'react';
import * as S from './style'
function Menu() {
  const [isActive, setIsActive] = useState(false);
  const [style1, setStyle1] = useState({});
  const [style2, setStyle2] = useState({});
  const [style3, setStyle3] = useState({});
  const [parentStyle1, setParentStyle1] = useState({});

  useEffect(() => {
    if (isActive) {
      setStyle1({ transform: 'translateY(8px) rotate(45deg)' });
      setStyle2({ opacity: 0 });
      setStyle3({ transform: 'translateY(-8px) rotate(-45deg)' });
      setParentStyle1({ position:'fixed',right:'0',top:'70px',width:'100%',height:'100%',background: 'black',gap:'-10px',transition:'0.3s',flexDirection: 'column' });
    } else {
      setStyle1({});
      setStyle2({});
      setStyle3({});
      setParentStyle1({});
    }

  }, [isActive]);

    return (
      <>
       <S.EstiloLista className='parent' style={parentStyle1}>
          <a className='child-1' href="#Sobre"><S.EstiloItem>Sobre</S.EstiloItem></a> 
          <a className='child-2' href="#Data"><S.EstiloItem>Data</S.EstiloItem></a>
          <a className='child-3' href="#Inscricao"><S.EstiloItem>Inscrição do Evento</S.EstiloItem></a>
       </S.EstiloLista>
       <S.BoxMenuTab className="parent" onClick={() => setIsActive(!isActive)}>
       <span className="child-1" style={style1}></span>
       <span className="child-2" style={style2}></span>
       <span className="child-3" style={style3}></span>
     </S.BoxMenuTab>
     </>
    );
}


export default Menu;