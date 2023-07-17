const argv = require('yargs').argv;;
const contacts = require("./contacts.js")  

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      return console.log(`Full list of contacts`, allContacts);
    case 'get':
      const contactID = await contacts.getContactById(id);
      return console.log(`Find contact with id: ${id}`, contactID);
    case 'remove':
      const contactDelete = await contacts.removeContact(id);
      return console.log(`Delete contact with id: ${id}`, contactDelete);
    case 'add':
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(`add contact`, newContact);
  default:
      console.warn('\x1B[31m Unknown action type!');
  }
}
invokeAction(argv);