//WECOME IN ADDRESSBOOK IN JS

//UC1
class AddressBookContact
{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phone;
    email;
    constructor(firstName, lastName, address, city, state, zip, phone, email) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
    get firstName() { return this._firstName; }
    set(firstName) 
    {

        this._firstName = firstName;

    }
    get lastName() { return this._lastName; }
    set(lastName) 
    {

        this._lastName = lastName;

    }
    get address() { return this._address; }
    set(address) 
    {

        this._address = address;

    }
    get city() { return this._city; }
    set(city) 
    {

        this._city = city;

    }
    get state() { return this._state; }
    set(state) 
    {

        this._state = state;

    }
    get zip() { return this._zip; }
    set(zip) 
    {

        this._zip = zip;

    }
    get phone() { return this._phone; }
    set(phone) 
    {

        this._phone = phone;

    }
    get email() { return this._email; }
    set(email) 
    {

        this._email = email;

    }

    toString() 
    {
        return "\nFirstName:" + this.firstName + " ,LastName:" + this.lastName + " ,Address:" + this.address + " ,City:" + this.city + " ,State:" + this.state + " Zip:" + this.zip + " ,Phone:" + this.phone + ",Email:" + this.email;
    }
}