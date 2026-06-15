// truthy
// adalah kebalikan dari falsy, dimana datanya dianggap bernilai true
// sederhana sekali sebenarnya untuk mengtahui sebuah data itu adalah truthy, yaitu data yang bukan bernilai falsy

// sama seperti falsy tapi ada perbedaan

const data = " "; // ada spasi

if (data) {
    console.log("true");
} else {
    console.log("false");
}