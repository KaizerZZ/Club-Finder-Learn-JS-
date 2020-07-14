const user = {
    namaDepan: "Ricky",
    namaBelakang: "Saputra",
    umur: 28,
    asal: "Kalimantan"
}
//cara menggabungkan string dengan backticks( ` ) dan ${expression}
console.log(`Nama : ${user.namaDepan} ${user.namaBelakang}, Umur : ${user.umur}, Asal : ${user.asal}`);

//membuat pesan text tanpa line spacing(\n), hanya dengan backticks( ` )
const message = `Dear ${user.namaDepan},

Selamat Ulang Tahun yang ke ${user.umur}. 
Semoga menjadi lebih baik lagi !! ! :)

Sincerely, ${user.namaBelakang}`;

console.log(message);