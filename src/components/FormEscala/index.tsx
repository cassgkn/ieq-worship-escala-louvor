import { FormEvent, useState } from 'react'
import { StyledForm, StyledButton, StyledInput } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormEscala = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  const aoMudarInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
  }

  return (
    <StyledForm onSubmit={aoEnviarForm}>
      <StyledInput
        placeholder="Pesquise por seu nome..."
        onChange={aoMudarInput}
        type="search"
      />
      <StyledButton type="submit">Pesquisar</StyledButton>
    </StyledForm>
  )
}

export default FormEscala
