const fs = require('fs').promises;
const path = require('node:path');

const contactsPath = path.join('./db/', "contacts.json");

  // ...твій код. Повертає масив контактів.
function listContacts() {
  fs.readFile(`${contactsPath}`)
    .then(data => console.log(JSON.parse(data)))
  .catch(err => console.log(err.message));
}
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
function getContactById(contactId) {

}
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
function removeContact(contactId) {

}
  // ...твій код. Повертає об'єкт доданого контакту. 
function addContact(name, email, phone) {

}



module.exports = {
    listContacts,
};
