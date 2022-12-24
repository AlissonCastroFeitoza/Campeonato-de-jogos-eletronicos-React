import * as S from './style'
const Menu = () => {
    return (
      <>
       <S.EstiloLista>
          <a href="#Sobre"><S.EstiloItem>Sobre</S.EstiloItem></a> 
          <a href="#Data"><S.EstiloItem>Data</S.EstiloItem></a>
          <a href="#Inscricao"><S.EstiloItem>Inscrição do Evento</S.EstiloItem></a>
       </S.EstiloLista>
       <S.BoxMenuTab>
       <span></span>
       <span></span>
       <span></span>
     </S.BoxMenuTab>
     </>
    )
}

export default Menu