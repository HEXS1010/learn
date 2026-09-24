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

// kita juga bisa mengcek panjang arraynya, lalu cek tiap indexnya 
console.log(Name.length);

// misalnya kita mau cek index tertentu
console.log(Name[0]); // budi // ingat mulai dari 0
console.log(Name[1]); // udin
console.log(Name[2]); // joko
console.log(Name[3]); // susi

// kita juga bisa mengubah nilai di index tertentu
Name[0] = "jaya";
console.log(Name); // jaya, udin, joko, susi

// kita juga bisa menghapus, dan menambahkan nilai di index tertentu.
// dengan splice kita tinggal pilih nih mau hapus bagian yang mana dari array kita 
// lalu kita juga bisa menambahkan nilai entah di index mana

// cara kerjanya (1, 1) 1 awal itu adalah mulainya di index ke berapa, 1 kah aatu 2 dan seterusnya
// lalu untuk 1 yang di belakangnya itu menunjukan mau hapus berapa nilai dari arraynya 

// bisa juga kita tulis (1, 0, "budi", "ani") nah ini artinya kita menambahkan nilai di mulai dari index ke satu tanpa mengahapus nilai setelah index 1
// contoh seperti di bawah 
Name.splice(1, 1); // hapus index 1 (udin)
console.log(Name); // jaya, joko, susi


Name.splice(0, 1); // menghapus jaya 
console.log(Name); // joko, susi

Name.splice(1, 1, "hexs", "hero"); // menambahkan hexs dan hero
console.log(Name); // joko, hexs, hero. susi nya hilang karena kita menghapusnya dan menggantinya dengan hexs dan hero

// kalau tidak mau susi hilang ? tinggal ganti dari (1, 1) jadi (1, 0)