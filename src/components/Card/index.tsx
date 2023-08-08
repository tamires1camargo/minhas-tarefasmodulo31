import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { Button } from '../../styles'
import ContactClass from '../../models/Contact'
import { edit, remove } from '../../store/reducers/contact'

type Props = ContactClass

const Card = ({ name, email: originalEmail, tel: originalTel, id }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  useEffect(() => {
    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }

    if (originalTel.length > 0) {
      setTel(originalTel)
    }
  }, [originalEmail, originalTel])

  const editCancel = () => {
    setIsEditing(false)
    setEmail(originalEmail)
    setTel(originalTel)
  }

  return (
    <S.CardContainer>
      <S.TitleCard>
        {isEditing && <em>Editando: </em>}
        {name}
      </S.TitleCard>
      <div>
        <label htmlFor={email}>Email: </label>
        <S.Email
          id={email}
          type="email"
          value={email}
          disabled={!isEditing}
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
      <div>
        <label htmlFor={name}>Telefone: </label>
        <S.Phone
          id={tel}
          type="tel"
          value={tel}
          disabled={!isEditing}
          onChange={({ target }) => setTel(target.value)}
        />
      </div>
      {isEditing ? (
        <>
          <S.SaveButton
            onClick={() => {
              dispatch(edit({ name, email, tel, id }))
              setIsEditing(false)
            }}
          >
            Salvar
          </S.SaveButton>
          <S.RemoveButton onClick={() => editCancel()}>Cancelar</S.RemoveButton>
        </>
      ) : (
        <>
          <Button onClick={() => setIsEditing(true)}>Editar</Button>
          <S.RemoveButton onClick={() => dispatch(remove(id))}>
            Remover
          </S.RemoveButton>
        </>
      )}
    </S.CardContainer>
  )
}

export default Card
