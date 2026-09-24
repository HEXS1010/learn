/*
  array adalah tipe data yang digunakan untuk menyimpan beberapa nilai dalam satu variabel
  array ditulis dengan tanda kurung siku [] dan setiap nilai dipisahkan dengan koma
 */
// contoh

const Name = ["budi", "udin", "joko", "susi"];

// dalam array kita dapat menambahkan nilai baru, menghapus nilai, dan mengubah nilai yang sudah ada

Name.push("andi"); // menambahkan nilai baru ke dalam array (setiap kita menambahkan nilai baru, akan berada di belakang/akhir)
console.log(Name);
Name.pop(); // menghapus nilai terakhir dari array (yang dihapus ini adalah andi yang kita tambahkan tadi)
console.log(Name);    
