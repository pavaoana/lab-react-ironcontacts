import contactsArr from "./contacts.json";
import { useState } from "react";
import "./App.css";

function App() {
  let fiveContacts = contactsArr.slice(0, 5);
  const [allContacts, setAllContacts] = useState(fiveContacts);

  const deleteContact = (contactId) => {
    const filteredContacts = allContacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setAllContacts(filteredContacts);
  };

  // const addRandomContact = () => {
  //   let extraContacts = contactsArr.slice(5);
  //   let randomContact =
  //     extraContacts[Math.floor(Math.random() * extraContacts.length)];
  // };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      {/* <button onClick={addRandomContact}>Add Random Contact</button> */}
      {/* <button onClick={sortByPopularity}> Sort By Popularity</button> */}
      {/* <button onClick={sortByName}> Sort By Name</button> */}
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>

        {allContacts.map((contact) => (
          <tr key={contact.id}>
            <th>
              <img src={contact.pictureUrl} alt={contact.name}></img>
            </th>
            <th>{contact.name}</th>
            <th>{contact.popularity.toFixed(2)}</th>
            <th>
              {contact.wonOscar ? (
                <img
                  src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-medium/1f3c6@2x.png"
                  alt="trophy"
                />
              ) : (
                ""
              )}
            </th>
            <th>
              {contact.wonEmmy ? (
                <img
                  src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-medium/1f3c6@2x.png"
                  alt="trophy"
                />
              ) : (
                ""
              )}
            </th>
            <th>
              <button onClick={() => deleteContact(contact.id)}> Delete</button>
            </th>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
