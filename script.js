let contacts = [];

function addContact(fin, lan, phone) {
    let myContact = new Contact(fin, lan, phone);
    contacts.push(myContact);
}

addContact('Lutz', 'Amgarten', '01824524642');
addContact('Jessica', 'Amgarten', '01824524642');