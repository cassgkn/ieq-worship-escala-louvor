import { useState } from 'react'
import FormEscala from '../../components/FormEscala'
import Escala from '../../components/Escala'
import { StyledUl } from './ListaEscala'

type Escala = {
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
}

const escala = [
  {
    id: 1,
    culto: 'Culto de Terça-Feira 05/12',
    dirigente: 'Gabriel',
    vocal1: 'Bruna',
    vocal2: 'Sabrina',
    vocal3: 'Fernanda',
    teclado: 'Fernanda',
    guitar: 'Paulinho',
    violao: 'Gabriel',
    baixo: 'André',
    bateria: 'Felipe',
    som1: 'Thais',
    som2: 'Emanuel',
    md: 'Gabriel',
    coreografia: 'Não'
  },
  {
    id: 2,
    culto: 'Culto de Quinta-Feira 07/12',
    dirigente: 'DANI',
    vocal1: 'ANA PARDIN',
    vocal2: 'ROSY',
    vocal3: 'JOSUÉ',
    teclado: 'JOSUÉ',
    guitar: 'LUCAS',
    violao: 'WESLEY',
    baixo: 'ROGÉRIO',
    bateria: 'DIEGO',
    som1: 'MARCELA',
    som2: '-',
    md: 'ROGERIO',
    coreografia: 'Não'
  },
  {
    id: 3,
    culto: 'Culto de Domingo 10/12 09:00h',
    dirigente: 'JOSUÉ',
    vocal1: 'NICOLAS',
    vocal2: 'FÁTIMA',
    vocal3: 'JÚNIOR AD',
    teclado: 'JOSUÉ',
    guitar: 'EKS',
    violao: 'NICOLAS',
    baixo: 'ROGÉRIO',
    bateria: 'GUILHERME',
    som1: 'MARCELA',
    som2: '-',
    md: 'ROGERIO',
    coreografia: 'Sim'
  },
  {
    id: 4,
    culto: 'Culto de Domingo 10/12 18:00h',
    dirigente: 'FERNANDA',
    vocal1: 'ADRIANA',
    vocal2: 'BRUNA',
    vocal3: 'LARISSA',
    teclado: 'ALEXANDRE',
    guitar: 'RAFA',
    violao: 'DANIEL J',
    baixo: 'JEFF',
    bateria: 'DIEGO',
    som1: 'THAIS',
    som2: 'ISAQUE',
    md: 'RAFA',
    coreografia: 'Não'
  },
  {
    id: 5,
    culto: 'Culto de Terça-feira 12/12',
    dirigente: 'FERNANDA',
    vocal1: 'JUNINHO C.',
    vocal2: 'PRISCILA',
    vocal3: 'ALINE',
    teclado: 'PAULO',
    guitar: 'DANIEL JR',
    violao: 'ANDRÉ',
    baixo: 'GABRIEL',
    bateria: 'FELIPE',
    som1: 'JOAO',
    som2: '-',
    md: 'GABRIEL',
    coreografia: 'Não'
  },
  {
    id: 6,
    culto: 'Culto de Quinta-feira 14/12',
    dirigente: 'ANA JÚLIA',
    vocal1: 'MADALENA',
    vocal2: 'MARCIO',
    vocal3: 'ANA LUISA',
    teclado: 'ALEXANDRE',
    guitar: 'RAFA',
    violao: 'LÚCIO',
    baixo: 'ROGÉRIO',
    bateria: 'THAIS',
    som1: 'MARCELA',
    som2: '-',
    md: 'RAFA',
    coreografia: 'Não'
  },
  {
    id: 7,
    culto: 'Culto de Domingo 17/12 09:00h',
    dirigente: 'ANDRÉ',
    vocal1: 'PRISCILA',
    vocal2: 'CASSIMIRO',
    vocal3: 'CAROL',
    teclado: 'PAULO',
    guitar: 'RAFA',
    violao: 'ANDRÉ',
    baixo: 'ROGÉRIO',
    bateria: 'GUILHERME',
    som1: 'THAIS',
    som2: 'NICOLAS',
    md: 'ROGERIO',
    coreografia: 'Não'
  },
  {
    id: 8,
    culto: 'Culto de Domingo 17/12 18:00h',
    dirigente: 'CANTATA DE NATAL',
    vocal1: '',
    vocal2: '',
    vocal3: '',
    teclado: '',
    guitar: '',
    violao: '',
    baixo: '',
    bateria: '',
    som1: 'THAIS',
    som2: 'GABRIEL',
    md: '',
    coreografia: 'Não'
  },
  {
    id: 9,
    culto: 'Culto de Terça-Feira 19/12',
    dirigente: 'MARCELA',
    vocal1: 'SOLANGE',
    vocal2: 'DANIEL JR',
    vocal3: 'ANA LUIZA',
    teclado: 'NIVEA',
    guitar: 'EKS',
    violao: 'DANIEL JR',
    baixo: 'NICOLAS',
    bateria: 'THAIS',
    som1: 'JOAO',
    som2: '',
    md: 'NICOLAS',
    coreografia: 'Não'
  },
  {
    id: 10,
    culto: 'Culto de Quinta-Feira 21/12',
    dirigente: 'DANI',
    vocal1: 'DINEI',
    vocal2: 'LARISSA',
    vocal3: 'BRUNA',
    teclado: 'FERNANDA',
    guitar: 'DANIEL JR',
    violao: 'ANDRÉ',
    baixo: 'ROGERIO',
    bateria: 'DIEGO',
    som1: 'THAIS',
    som2: 'ANDERSON',
    md: 'ANDRÉ',
    coreografia: 'Não'
  },
  {
    id: 11,
    culto: 'Culto de Domingo 24/12 09:00h',
    dirigente: 'FERNANDA',
    vocal1: 'GABRIEL',
    vocal2: 'ANDRÉ',
    vocal3: 'PRISCILA S',
    teclado: 'PAULO',
    guitar: 'PAULINHO',
    violao: 'GABRIEL',
    baixo: 'JEFF',
    bateria: 'GUILHERME',
    som1: 'THAIS',
    som2: 'RAFA',
    md: 'PAULINHO',
    coreografia: 'Não'
  },
  {
    id: 12,
    culto: 'Culto de Terça-Feira 26/12',
    dirigente: 'BRUNA',
    vocal1: 'PEDRO',
    vocal2: 'DANI',
    vocal3: 'TAY',
    teclado: 'NIVEA',
    guitar: 'LUCAS',
    violao: 'LÚCIO',
    baixo: 'GABRIEL',
    bateria: 'FELIPE',
    som1: 'MARCELA',
    som2: '',
    md: 'GABRIEL',
    coreografia: 'Não'
  },
  {
    id: 13,
    culto: 'Culto de Quinta-Feira 28/12',
    dirigente: 'ANA JÚLIA',
    vocal1: 'NICOLAS',
    vocal2: 'ADRIANA',
    vocal3: 'MARCIO',
    teclado: 'PAULO',
    guitar: 'PAULINHO',
    violao: 'NICOLAS',
    baixo: 'ANDRÉ',
    bateria: 'SAMUEL',
    som1: 'THAIS',
    som2: 'ANDERSON',
    md: 'ROGERIO',
    coreografia: 'Não'
  },
  {
    id: 14,
    culto: 'Culto de Domingo 31/12',
    dirigente: 'ANDRÉ',
    vocal1: 'STEPHANIE',
    vocal2: 'PEDRO',
    vocal3: 'FÁTIMA',
    teclado: 'FERNANDA',
    guitar: 'RAFA',
    violao: 'GABRIEL',
    baixo: 'NICOLAS',
    bateria: 'THAIS',
    som1: 'JOAO',
    som2: '',
    md: 'GABRIEL',
    coreografia: 'Não'
  }
]

const ListaEscala = () => {
  const [filtro, setFiltro] = useState<string>('')

  const escalaFiltradas = escala.filter((vag) => {
    const termoLowerCase = filtro.toLocaleLowerCase()

    return (
      vag.culto.toLocaleLowerCase().includes(termoLowerCase) ||
      vag.dirigente.toLocaleLowerCase().includes(termoLowerCase) ||
      vag.vocal1.toLocaleLowerCase().includes(termoLowerCase) ||
      vag.vocal2.toLocaleLowerCase().includes(termoLowerCase) ||
      vag.vocal3.toLocaleLowerCase().includes(termoLowerCase) ||
      vag.teclado.toLocaleLowerCase().includes(termoLowerCase) ||
      vag.guitar.toLocaleLowerCase().includes(termoLowerCase) ||
      vag.violao.toLocaleLowerCase().includes(termoLowerCase) ||
      vag.baixo.toLocaleLowerCase().includes(termoLowerCase) ||
      vag.bateria.toLocaleLowerCase().includes(termoLowerCase) ||
      vag.som1.toLocaleLowerCase().includes(termoLowerCase) ||
      vag.som2.toLocaleLowerCase().includes(termoLowerCase) ||
      vag.md.toLocaleLowerCase().includes(termoLowerCase) ||
      vag.coreografia.toLocaleLowerCase().includes(termoLowerCase)
    )
  })

  return (
    <div>
      <FormEscala aoPesquisar={(termo: string) => setFiltro(termo)} />
      <StyledUl>
        {escalaFiltradas.map((vag) => (
          <Escala
            key={vag.id}
            culto={vag.culto}
            dirigente={vag.dirigente}
            vocal1={vag.vocal1}
            vocal2={vag.vocal2}
            vocal3={vag.vocal3}
            teclado={vag.teclado}
            guitar={vag.guitar}
            violao={vag.violao}
            baixo={vag.baixo}
            bateria={vag.bateria}
            som1={vag.som1}
            som2={vag.som2}
            md={vag.md}
            coreografia={vag.coreografia}
            id={''}
          />
        ))}
      </StyledUl>
    </div>
  )
}

export default ListaEscala
