Ketika sebuah JavaScript class mewarisi sifat dari HTMLElement maka class tersebut akan memiliki siklus hidup layaknya sebuah elemen HTML. Kita dapat menerapkan logika pada setiap siklus hidup yang ada dengan memanfaatkan lifecycle callbacks yang ada. Berikut ini lifecycle callbacks yang ada pada HTMLElement:

connectedCallback() : Akan terpanggil setiap kali elemen berhasil ditambahkan ke dokumen HTML (DOM). Callback ini merupakan tempat yang tepat untuk menjalankan konfigurasi awal seperti mendapatkan data, atau mengatur attribute.
disconnectedCallback() : Akan terpanggil setiap kali elemen dikeluarkan (remove()) dari DOM. Callback ini merupakan tempat yang tepat untuk membersihkan data yang masih disimpan pada elemen. Bisa itu event, state, ataupun objek. 
attributeChangedCallback() : Akan terpanggil setiap kali nilai atribut yang di-observe melalui fungsi static get observedAttributes diubah. Callback ini bisa kita manfaatkan untuk memuat ulang data yang ditampilkan oleh elemen.
adoptedCallback() : Akan terpanggil setiap kali elemen dipindahkan pada dokumen baru. Kita relatif jarang menggunakan callback ini, namun jika kita memanfaatkan tag <iframe> maka callback ini akan terpanggil.

Walaupun sebenarnya constructor() bukan termasuk siklus hidup HTML Element, namun fungsi tersebut sering digunakan untuk melakukan konfigurasi awal ketika pertama kali element dibuat. Seperti menentukan event listener, atau menetapkan Shadow DOM.

Ketika kita mengimplementasikan constructor pada custom element, kita wajib memanggil method super(). Jika tidak, maka akan menghasilkan error: ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

Class yang merupakan custom element lebih ketat dibandingkan class lain. Kita tidak dapat membuat argument pada constructor class-nya. Karena instance dibuat tidak menggunakan keyword new seperti class JavaScript umumnya.

Terdapat dua cara membuat instance dari custom element. Yang pertama adalah menggunakan nama tagnya langsung yang dituliskan pada kode HTML. Contohnya:

<body>
    <image-figure></image-figure>
</body>

Lalu cara kedua adalah dengan menggunakan sintaks JavaScript. Sama seperti membuat element HTML biasa, kita gunakan method document.createElement dalam membuat elemen baru.

const imageFigureElement = document.createElement("image-figure");
document.body.appendChild(imageFigureElement);

Selain memiliki siklus hidup, class yang mewarisi sifat HTMLElement juga memiliki properti dan method yang sama seperti objek DOM. Di mana ia memiliki properti dan method seperti innerHTML, innerText, appendChild(), remove(), dan sebagainya. Melalui properti dan method ini kita dapat menetapkan apa yang harus ditampilkan atau mendapatkan nilai atribut pada custom element.


Pada custom element kita perlu mengimplementasi dua fungsi dalam kelasnya (ImageFigure) agar kita dapat mengobservasi nilai atribut yang berubah. Yang pertama fungsi attributeChangedCallback, dan yang kedua fungsi static get observedAttributes.

Kedua fungsi tersebut saling terhubung. Fungsi attributeChangedCallback akan terpanggil ketika nilai atribut yang diamati pada fungsi observedAttributes diubah nilainya. Kemudian pada callback fungsi attributeChangedCallback inilah kita menetapkan logika perubahan. Pada fungsi ini juga terdapat 3 (tiga) argument fungsi yang bisa dimanfaatkan yaitu:

name : Nama dari atribut yang berubah
oldValue : Nilai pada atribut sebelum diubah
newValue : Nilai baru yang ditetapkan pada atribut.
Urutan dari ketiga argumen tersebut sangatlah penting, jadi jangan sampai tertukar. Sebenarnya kita dapat memberikan nama apa saja untuk ketiga argumennya namun lebih baik gunakan name, oldValue, newValue guna memudahkan kita dalam penggunaannya.