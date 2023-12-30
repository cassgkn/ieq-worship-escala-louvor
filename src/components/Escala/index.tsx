import { StyledH3, StyledLi } from './Escala'

type Props = {
  id: string
  culto: string
  dirigente: string
  vocal1: string
  vocal2: string
  vocal3: string
  teclado: string
  guitar: string
  violao: string
  baixo: string
  bateria: string
  som1: string
  som2: string
  md: string
  coreografia: string
}

const Escala = (props: Props) => (
  <StyledLi>
    <StyledH3>{props.culto}</StyledH3>
    <ul>
      <li className="top">Dirigente: {props.dirigente}</li>
      <li>Vocal 1: {props.vocal1}</li>
      <li>Vocal 2: {props.vocal2}</li>
      <li>Vocal 3: {props.vocal3}</li>
      <li>Teclado: {props.teclado}</li>
      <li>Guitar: {props.guitar}</li>
      <li>Violão: {props.violao}</li>
      <li>Baixo: {props.baixo}</li>
      <li>Bateria: {props.bateria}</li>
      <li>Som 1: {props.som1}</li>
      <li>Som 2: {props.som2}</li>
      <li>M.D: {props.md}</li>
      <li>Coreografia: {props.coreografia}</li>
    </ul>
  </StyledLi>
)

export default Escala
