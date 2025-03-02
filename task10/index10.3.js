const contactBook = {
    contacts: [],

    addContact(name, phone, email) {
        const newContact = { name, phone, email };
        this.contacts.push(newContact);
        console.log(`Контакт "${name}" додано.`);
    },

    findContactByName(name) {
        const foundContact = this.contacts.find(contact => contact.name === name);
        if (foundContact) {
            console.log("Знайдено контакт:", foundContact);
        } else {
            console.log(`Контакт з ім'ям "${name}" не знайдено.`);
        }
        return foundContact;
    }
};

contactBook.addContact("Іван", "123-456-7890", "ivan@example.com");
contactBook.addContact("Марія", "987-654-3210", "maria@example.com");

contactBook.findContactByName("Іван");
contactBook.findContactByName("Петро");