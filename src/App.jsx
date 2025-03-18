import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
