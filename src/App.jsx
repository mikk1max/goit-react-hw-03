import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect, useState } from "react";

const CONTACTS_DETAILS = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const filteredContacts = (contacts, filterValue) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
};

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("saved-contacts")) ?? CONTACTS_DETAILS
  );
  const [filterValue, setFilterValue] = useState("");

  const addContact = (newContact) => {
    return setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (contactID) => {
    return setContacts((prev) =>
      prev.filter((contact) => contact.id !== contactID)
    );
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <h1 style={{ textAlign: "center" }}>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox value={filterValue} onChangeValue={setFilterValue} />
        <ContactList
          contacts={filteredContacts(contacts, filterValue)}
          onDelete={deleteContact}
        />
      </div>
    </>
  );
}

export default App;
