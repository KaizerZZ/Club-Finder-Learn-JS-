/*
Sebelum ES6, Hal yang paling mendekati dengan class yaitu membuat sebuah objek menggunakan 
constructor function dan keyword new, lalu untuk menambahkan method kita gunakan konsep prototype.
*/
function Car(manufacture, color) {
    this.manufacture = manufacture;
    this.color = color;
    this.enginesActive = false;
}
 
Car.prototype.startEngines = function () {
    console.log('Mobil dinyalakan...');
    this.enginesActive = true;
};
 
Car.prototype.info = function () {
    console.log("Manufacture: " + this.manufacture);
    console.log("Color: " + this.color);
    console.log("Engines: " + (this.enginesActive ? "Active" : "Inactive"));
}
 
var johnCar = new Car("Honda", "Red");
johnCar.startEngines();
johnCar.info();
 
/* output: 
Mobil dinyalakan...
Manufacture: Honda
Color: Red
Engines: Active
*/

/*
Pada kode di atas Car merupakan constructor function yang akan membuat instance Car baru setiapkan kode new Car() 
dieksekusi. Melalui Car.prototype, method startEngines() dan carInfo()  diwarisi pada setiap instance Car yang dibuat, 
sehingga johnCar (sebagai instance Car) dapat mengakses kedua method tersebut.

Teknik dasar ini yang digunakan dalam membuat class di JavaScript sebelum ES6
*/

/*
“Mengapa method pada instance harus disimpan pada prototype atau __proto__ ? 
Mengapa tidak disimpan pada constructor sama seperti properti? 

Alasannya adalah jika kita menyimpan method pada constructor maka method tersebut akan 
selalu dibuat ketika instance dibuat. Ini bukan pendekatan yang baik karena jika method 
memiliki kode yang banyak, maka akan memakan memori yang banyak.

Sedangkan jika menggunakan prototype, method hanya dibuat satu kali. 
Dan method tersebut diwarisi kepada setiap instance yang dibuat.”
*/

/*
ES6 Classes
Dengan hadirnya class pada ES6, pembuatan class di JavaScript menjadi lebih mudah dan 
juga penulisannya mirip seperti bahasa pemrograman lain berbasis class. 
Pembuatan class pada ES6 menggunakan keyword class itu sendiri kemudian diikuti dengan nama class-nya. 
*/
class Mobil{
    constructor(manufacture,color){
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }
    idupinMesin(nama){
        console.log(`Mobil ${nama} dinyalakan...*NGeeeeeeeeeeeeenggggg`);
        this.enginesActive = true;
    }
    statusMobilAnda(){
        console.log("Manufacture: " + this.manufacture);
        console.log("Color: " + this.color);
        console.log("Engines: " + (this.enginesActive ? "Active" : "Inactive"));
    }
}
const nandaMobil = new Mobil("Vespa","Black");
nandaMobil.idupinMesin("Nanda");
nandaMobil.statusMobilAnda();

/*
“Ketika kita hendak membuat sebuah constructor function ataupun class. 
Secara code convention (aturan penulisan), gunakan CamelCase dalam penamaannya. 
Contohnya Car daripada car, SportCar daripada sportCar atau Sportcar”
*/

class motorcycle{
    constructor(manufacture,color){
        this.manufacture = manufacture;
        this._color = color;
        this.enginesActive = false;
    }
    get color(){
        return `Warna Motor : ${this._color}`;
    }
    set color(value){
        console.log(`Warna mobil diubah dari ${this._color} menjadi ${value}`);;
        this._color = value;
    }
}

const motorAku = new motorcycle('Yamaha','Black');
console.log(motorAku.color);
motorAku.color = 'White';
console.log(motorAku.color);
/*
Perhatikan juga ketika kita menerapkan getter/setter pada properti class. 
Kita perlu mengubah atau membedakan penamaan properti aslinya dengan property accessor yang kita buat. 
Berdasarkan code convention yang ada kita perlu mengubah properti asli class-nya dengan menambahkan 
underscore di depan nama propertinya (_color). Tanda underscore berfungsi sebagai tanda bahwa properti _color 
tidak sebaiknya diakses langsung, namun harus melalui property accessor (getter/setter).
*/

class food{
    constructor(name,price,customer){
        this.name = name;
        this.price = price;
        this.customer = customer;
        this.isCooked = false;
        this.isServed = false;
    }

    cooked(){
        this.isCooked = true;
        console.log(`Makanan ${this.name} Sedang Dimasak........`);
    }
    
    served(){
        this.isServed = true;
        console.log(`Makanan ${this.name} Siap Dihidangkan.....`);
    }
    info(){
        console.log(`Menu : ${this.name}
Harga : Rp.${this.price}`);
    }
}
class ayam extends food{
    constructor(name,price,parts,sauce,customer){
        super(name,price,customer);
        this.parts = parts;
        this.sauce = sauce;
    }
    info(){
        this.name = `${this.parts} ${this.name} ${this.sauce}`;
        setTimeout(()=>{
        super.info()
        },1000);
    }
}

class ikan extends food{
    constructor(name,price,sauce,customer){
        super(name,price,customer);
        this.sauce = sauce;
    }
    info(){
        this.name = `${this.name} ${this.sauce}`;
        setTimeout(()=>{
            super.info()
            },2000);
    }
}
/** Jika kita dapat mengakses method tersebut tanpa melalui instance mengapa tidak? 
 * Pada kasus inilah kita membutuhkan sebuah static method. Static method merupakan 
 * method yang tidak dapat dipanggil oleh instance dari class, namun dapat dipanggil melalui class-nya sendiri.
 * Pada ES6 class kita dapat membuat static method dengan menambahkan keyword static sebelum deklarasi method-nya: */

class pelayan{
    static order(food){
        food.forEach(food => {
            console.log(`Menu ${food.name} dipesan oleh ${food.customer}, mohon tunggu sebentar.......`)
        });
    }
}

const makananku = new ayam('Ayam Goreng',10000,'Paha','Saus BBQ','Lala');
const makanannya =new ikan('Ikan Goreng',120000,'Rica - Rica','Bela');
setTimeout(()=>{
    pelayan.order([makananku,makanannya])
},3000);
makananku.info();
makanannya.info();

