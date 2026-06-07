// lingkup blok
// blck scope artinya Variabel yang dideklarasikan di dalam blok { } tidak dapat diakses dari luar blok

// contoh
{
    let x = 2;
}

// lingkup funsi
function myFunction() {
    var x = 1;
    let y = 2;
    const z = 3;
}
// ini artinya jika di luar fungsi, variabel x, y, dan z tidak dapat digunakan

// lingkup global
// Variabel yang dideklarasikan dengan var selalu memiliki cakupan global.
// Variabel yang dideklarasikan dengan varkata kunci TIDAK dapat memiliki cakupan blok

// contoh
// Variabel yang dideklarasikan di vardalam blok { } dapat diakses dari luar blok
{
    var x = 2;
}
// artinya variabel x dapat digunakan diluar dari lingkup ini

