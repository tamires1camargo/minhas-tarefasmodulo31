import { useSelector } from 'react-redux'
import Card from '../../components/Card'
import { Container } from './styles'
import { RootReducer } from '../../store/reducers/contact'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const filterContacts = () => {
    let filterContacts = itens
    if (term !== undefined) {
      filterContacts = filterContacts.filter(
        ({ name }) => name.toLowerCase().search(term.toLocaleLowerCase()) >= 0
      )

      return filterContacts
    } else {
      return itens
    }
  }

  const contacts = filterContacts()

  return (
    <Container>
      {contacts.map(({ name, email, tel, id }) => (
        <Card key={id} name={name} email={email} tel={tel} id={id} />
      ))}
    </Container>
  )
}

export default ContactList
