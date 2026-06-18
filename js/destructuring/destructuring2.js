// destructuring function parameter (1)

function displayPerson({ firstName, lastName }) {
  console.log(firstName);
  console.log(lastName);
}

const person = {
  firstName: "Aswa",
  lastName: "Meda",
};

displayPerson(person);

// destructuring di function parameter (2)

function sum([first, second]) {
  return first + second;
}

console.log(sum([10, 10]));
console.log(sum([20, 10]));

// default value destructuring array

{
  const names = ["Aswa", "Meda" /*"anjay"*/];
  const [firstName, lastName, otherName = "Hexs Project"] = names;

  console.log(firstName);
  console.log(lastName);
  console.log(otherName);
}

// menggunakan variabel lain

{
  const person = {
    firstName: "Aswa",
    lastName: "Meda",
  };

  let { firstName: namaDepan, lastName: namaBelakang } = person;

  console.log(namaDepan);
  console.log(namaBelakang);
}
