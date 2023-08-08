import Header from '../../containers/Header'
import ContactList from '../../containers/ListaContato'
import AddButton from '../../components/AddButton'

const Home = () => {
  return (
    <>
      <Header showInput />
      <ContactList />
      <AddButton />
    </>
  )
}

export default Home
