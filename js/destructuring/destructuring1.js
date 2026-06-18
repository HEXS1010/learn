// mengambil data di object menggunakan destructuring

const person = {
  firstName: "aswa",
  middleName: "-",
  lastName: "meda",

  address: {
    country: "indonsesia",
    city: "denpasar",
  },

  hobby: "jalan-jalan",
  channel: "belajar.com",
};

const {firstName, middleName, lastName, address: {country, city}, ...others} = person;

console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(country);
console.log(city);
console.log(others);