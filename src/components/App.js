import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
// import ContactCard from './ContactCard';
import ContactList from './ContactList';

function App() {

  const contacts = [
    {
      id: "1",
      name: "Amiya",
      email: "amiya01@gmail.com"
    },
    {
      id: "2",
      name: "Sujoy",
      email: "sujoy02@gmail.com"
    },
    {
      id: "3",
      name: "Bikas",
      email: "bikas03@gmail.com"
    }
  ]

  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
