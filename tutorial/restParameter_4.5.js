/*
Sebelumnya kita sudah tahu bahwa variadic function dapat menerima banyak parameter, 
namun apakah kita tahu bagaimana caranya agar function dapat menerima parameter? 
Jika spread operator adalah pelebur array menjadi beberapa elemen yang berbeda, 
rest parameter ini adalah kebalikan dari operator tersebut.

Rest parameter juga dituliskan menggunakan three consecutive dots (...). 
Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array. 
Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah variadic function.

Sebagai contoh penggunaanya, mari kita buat sebuah variadic function yang berfungsi 
untuk menjumlahkan seluruh nilai argument fungsi yang diberikan.
*/

function sumArray(...numbers) {
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result;
}

console.log(sumArray(231,1,321,3312,4123,432));


/*
Rest parameter juga dapat digunakan pada array destructuring, 
di mana kita dapat mengelompokkan nilai-nilai array yang terdestruksi pada variabel dalam bentuk array yang lain.
*/

const refrigerator = ["Samsung", 50, 2, "milk", "cheese", "egg", "butter"];
 
const [manufacture, weight, door, ...items] = refrigerator;
 
console.log(manufacture);
console.log(weight);
console.log(door);
console.log(...items);
 
 
/* output:
Samsung
50
2
[ 'milk', 'cheese', 'egg', 'butter' ]
*/