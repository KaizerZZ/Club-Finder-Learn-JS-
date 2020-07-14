/*
Spreading operator dituliskan dengan three consecutive dots (....). Sesuai namanya “Spread”, 
fitur baru ES6 ini digunakan untuk membentangkan nilai array 
atau lebih tepatnya iterable object menjadi beberapa elements
*/

const hp = ['Samsung','Xiaomi','OddO','Apple','Vivo','Asus'];

console.log(hp);

/*
Pada kode tersebut hasil yang dicetak adalah sebuah array (ditunjukkan dengan tanda [ ]), 
karena memang kita mencetak nilai hp itu sendiri. 
Nah, dengan menggunakan spread operator kita dapat membentangkan nilai – nilai dalam array tersebut.
*/

//contoh
console.log(...hp);

//Spreading ini cocok buat mencari nilai terbesar dlam array

const angka = [203,3129,341,543,312312,5423,4122,21,0];
console.log(Math.max(...angka));
// Sama seperti kita menuliskan
// console.log(Math.max(angka[0], angka[1], angka[2], angka[3],.....)

//Spread operator dapat digunakan untuk menggabungkan dua buah array dalam objek array baru.
const bukanHp = ['Compaq','HP','Toshiba']

console.log(...hp,...bukanHp);
//atau 
const allGadget = [...hp,...bukanHp];
console.log(...allGadget);