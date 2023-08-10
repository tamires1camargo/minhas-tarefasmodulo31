import { useSelector } from 'react-redux'
import Card from '../../components/Card'
import { RootReducer } from '../../store'
import { CardContainer } from '../../components/Card/styles'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const filterContacts = () => {
    let filterContacts = itens
    if (term !== undefined) {
      filterContacts = itens.filter(
        (item: { nome: string }) =>
          item.nome.toLowerCase().search(term.toLowerCase()) >= 0
      )

      return filterContacts
    } else {
      return itens
    }
  }

  const contacts = filterContacts()

  return (
    <div>
      {contacts.map((c) => (
        <CardContainer key={c.name}>
          <Card id={c.id} name={c.name} email={c.email} tel={c.telefone} />
        </CardContainer>
      ))}
    </div>
  )
}

export default ContactList
