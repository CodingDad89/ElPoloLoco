class Contact extends Person {
    phone;

    constructor(firstName, lastName, phone) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }

    call() {
         window.location.href = 'tel:' + this.phone;
    }

    loggingFullName() {
        console.log(this.firstName + lastName);
        
    }
       
}