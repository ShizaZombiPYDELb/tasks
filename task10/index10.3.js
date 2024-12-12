const book = {
    contacts : [
        {
            name: "haha",
            phone: "+380123456789",
            email: "haha@email.com",
        }
    ],
    find: function (name) {
        if (book.name === undefined) {
            console.log("TAKIX NE ZNAEM");
        } else {
            console.log(`ZNAEM ETO => ${this.contacts.name}`);
        }
    },
    add: function (contacts) {

    },
};

console.log(book.find(haha));