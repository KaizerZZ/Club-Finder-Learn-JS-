// const names = ['dimas','rudi','tabotie'].map(function upper(name) {
//                                             return name.toUpperCase();
//                                         }); 
//cara lama

//menggunakan arrow expression
const names = ['dimas','rudi','tabotie'].map(name => name.toUpperCase());

console.log(...names);

/*
Karena arrow function merupakan sebuah expression, 
maka ia hanya dapat digunakan untuk disimpan pada variabel (seperti contoh kode di atas), 
sebagai argumen pada sebuah fungsi, dan sebagai nilai dari properti objek.
*/

//menjadi argumen fungsi tanpa deklarasi variable
['Samsung','Xiaomi','OddO','Apple','Vivo','Asus'].forEach(merk => console.log(`Aku punya HP ${merk}`));

//disimpan di properti object

const laptop = {
    brand: name=>console.log(`Aku Beli Laptop ${name}`)
}
laptop.brand("ASUS");

//Arrow expression 2 atau lebih parameter
const bilangHalo = (salam,nama)=>console.log(`${salam} ${nama}`);

bilangHalo('Met Malem','Radit !!');

//arrow expression tanpa parameter
const heloSemua = () => console.log(`Halo Semuanya !!!`);
heloSemua();

/*
Fungsi merupakan mini program sehingga sangat mungkin terdapat lebih dari satu logika di dalamnya. 
Seperti yang kita ketahui bahwa logika-logika pada pemrograman terdiri dari banyak expression ataupun statement. 

Pada contoh kode arrow function sebelumnya kita hanya menuliskan satu buah expression sehingga penulisannya 
bisa sangat ringkas. Namun bagaimana jika dalam sebuah fungsi terdapat banyak logika di dalamnya? 
Apakah bisa dituliskan menggunakan arrow function? Jawabannya tentu bisa!

Sama seperti regular function, arrow function sebenarnya tidak benar-benar menghilangkan tanda kurung kurawal ({ }) 
dalam penulisannya. Tanda kurung kurawal pun berfungsi sama seperti regular function yakni menampung 
body function di mana tempat logika fungsi dituliskan. Penulisan tanda kurung kurawal menjadi opsional 
ketika body fungsi hanya terdiri dari satu expression atau statement saja.
*/
function person(name,age,hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

person.prototype.perkenalan = function () {
    setTimeout(()=>{console.log(`Hai nama saya ${this.name},umur saya ${this.age} tahun`)
        console.log(`Hobi saya ${this.hobby}`)},0);
}

const newbie = new person('Radit',20,['ngmabar','bukutangkis','osu'])
newbie.perkenalan();