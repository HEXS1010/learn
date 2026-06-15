// callback

function add(a, b) {
  var sum = a() + b();
  console.log(sum);
}

function fn_A() {
  return 1;
}

function fn_B() {
  return 2;
}

//perhatikan : fn_A dan fn_B tanpa
//tanda kurung di belakangnya karena

//kita ingin mengirim function bukan hasil eksekusinya
add(fn_A, fn_B);

// callback juga bisa diimplementasikan dengan function anonim
function add(a, b) {
  var sum = a() + b();
  console.log(sum);
}

function fn_A() {
  return 1;
}

//fn_B diganti oleh function anonim
add(fn_A, function () {
  return 2;
});
// function fn_B diganti oleh function anonim

// function return value
function sayHello(firstName, lastName) {
  const say = `hello ${firstName} ${lastName}`;
  return say;
}

const result = sayHello("hexs", "project");
console.log(`${result}`);

// functio return value lebih dari satu

function getFinalScore(value) {
  if (value > 90) {
    return "A";
  } else if (value > 80) {
    return "B";
  } else if (value > 70) {
    return "C";
  } else if (value > 60) {
    return "D";
  } else {
    return "E";
  }
}

const finalScore = getFinalScore(76);
console.log(finalScore);

// menghentikan eksekusi dengan return

// contoh
function isContains(array, searchValue) {
    for (const element of array) {
        if (element === searchValue) {
            return true;
        }
    }
    return false;
}

const array = [1, 2, 3, 4, 5, 6, 7];
const search = 6;
const found = isContains(array, search);
console.log(`${found}`);