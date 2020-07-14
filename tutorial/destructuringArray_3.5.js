const makanan = ["Sup","Mie Ayam","Mie Goreng","Nasi Goreng","Soto Ayam","Soto Sapi"];

([siji,loro,telu,papat,limo,nem] = makanan);
//variabel lokal bisa apa saja asal sesuai dengan banyaknya index

//Kita juga bisa memilih nilai pada index tertentu untuk didestruksikan pada array. Contohnya jika kita ingin mengambil nilai ketiga dari array, kita tidak perlu menyiapkan lokal variabel 
//untuk menampung nilai array pertama, kedua, atau pun keempat. 
//Kita bisa melakukannya dengan membiarkan
// index array yang kita tidak inginkan tetap kosong (tanpa menulis variabel lokal).
//atau const [siji,loro,telu,papat,limo] = makanan

console.log(loro);

//destructuring array assignment

const buku = ["MTK","ALG","FISIKA","KIMIA"];

let myFavorite = "LOG";
let herFavorite = "MNG";

[,,myFavorite,herFavorite] = buku;

console.log(myFavorite);
console.log(herFavorite);

/*
    Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antar dua variabel
    Dengan array destructuring assignment kita bisa menukar nilai variabel dengan mudah 
    dan tentu tanpa membuat variabel extra.  
*/

let a = 1;
let b = 2;

console.log(`
Sebelum di swap
a = ${a}
b = ${b}
`);

[a,b] = [b,a];

console.log(`
Setelah di Swap
a = ${a}
b = ${b}
`);
