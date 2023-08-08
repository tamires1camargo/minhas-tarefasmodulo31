import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import img from '../../assets/phone.png'
import { RootReducer } from '../../store'
import { handleTerm } from '../../store/reducers/Filter'
import { Button } from '../../styles'

type Props = {
  showInput: boolean
}

const Header = ({ showInput }: Props) => {
  const { term } = useSelector((state: RootReducer) => state.filter)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <S.HeaderContainer>
      <div>
        <img src={img} alt="Logo de telefone" />
        <S.Title>Lista de Contatos</S.Title>
      </div>
      {showInput ? (
        <S.SearchInput
          placeholder="Pesquisar contato"
          value={term}
          onChange={({ target }) => dispatch(handleTerm(target.value))}
        />
      ) : (
        <Button onClick={() => navigate('/')}>
          Voltar á lista de contatos
        </Button>
      )}
    </S.HeaderContainer>
  )
}

export default Header
