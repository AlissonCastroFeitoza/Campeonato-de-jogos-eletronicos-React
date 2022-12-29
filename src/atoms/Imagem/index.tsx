import img1 from '../../assets/games1.jpg'
import img2 from '../../assets/games3.jpg'
import img3 from '../../assets/games2.jpg'
import * as S from './style'

const ImagemUm = () => {
    return (
        <S.Imagem>
              <img src={img1} alt="imagem jogando videogame" />
        </S.Imagem>
          
        
    )
}

export default ImagemUm

export const ImagemDois = () => {
    return (
        <S.Imagem>
        <img src={img2} alt="imagem digitando teclado" />
        </S.Imagem>

    )
}


export const Imagemtres = () => {
  return (
     <S.Imagem>
        <img src={img3} alt="imagem de pc gamers" />
     </S.Imagem>
  )
}

