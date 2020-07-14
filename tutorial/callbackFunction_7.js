/* ======================== CALLBACK FUNCTION ============================== */
const ambilKue = (varian,callback)=>{
    let kue = null;
    console.log(`Sedang Membuat Kue ${varian}, Tunggu Sebentar.........`);
    setTimeout(()=>{
        kue = `Kue ${varian} Selesai Dibuat`;
        callback(kue);
    },3000);
}

ambilKue('Tart',kue=>{
    console.log(kue)
});

// const getCake = callback => {
//     let cake = null;
//     console.log("Sedang membuat kue, silakan tunggu ....")
//     setTimeout(() => {
//       cake = "Kue Selesai!";
//       callback(cake);
//     }, 3000)
//    }

//    getCake(cake=>{
//     console.log(cake);
//    })

/* ======================== CALLBACK FUNCTION ============================== */

/** PROMISE */

const mesinEskrim = (lancar,ngadet) =>{
    const iceProduction = false;
    if (iceProduction) {
        lancar("Eskrim Berhasil Dibuat");
    } else {
        ngadet("Mesinnya Rusak nih perlu direstart 10 menit");
    }
}

const successHandler = eskrim =>{
    console.log(eskrim);
}

const failHandler = badEskrim =>{
    console.log(badEskrim);
}

const buatEskrim = new Promise(mesinEskrim);
buatEskrim.then(successHandler,failHandler);
/**Kita dapat menyimpan kedua handle callback baik onFulfilled atau onRejected pada parameter method 
 * .then(), yang perlu kita perhatikan adalah pastikan handle callback untuk onFulfilled disimpan pada 
 * parameter pertama seperti ini: */

 /**Namun untuk menetapkan rejected handler kita perlu memberikan nilai null pada parameter method 
  * .then(). Well.. hal ini sedikit merepotkan bukan? Solusinya kita dapat menggunakan method lain, yakni .catch().

Method .catch() mirip seperti .then().
 Namun method ini hanya menerima satu parameter function yang digunakan untuk rejected handler. 
 Method .catch() ini akan terpanggil bilamana objek promise memiliki kondisi onRejected. */

 buatEskrim.then(successHandler)
 .catch(failHandler);

/* CHAINING PROMISE */

const persiapan = {
    pembuatKopiSiap: true,
    stokBiji: {
        arabica : 100,
        robusta : 290,
        liberica : 900
    }
}
const ambilBiji = (jenis,berat)=>{
    return new Promise((berhasil,gagal)=>{
        if (persiapan.stokBiji[jenis] >= berat) {
            persiapan.stokBiji[jenis] -= berat;
            berhasil("Berhaasil Njinggg");
        } else {
            gagal("Stok Kopi Habis Silahkan restart 10 menit");
        }
    });
}
const buatKopi = biji =>{
    return new Promise((berhasil,gagal)=>{
        if (persiapan.pembuatKopiSiap) {
            berhasil("Kopi Udah Siap SU");
        } else {
            gagal("Mesinnya rusak nih restart 10 menit");
        }
    });
}
const sajikanKeMeja = kopi =>{
    return new Promise((berhasil)=>{
        berhasil("Kopi Siap Disajikan");
    });
}

const sajikanKopi = (jenis,berat) =>{
    ambilBiji(jenis,berat)
    .then(buatKopi)
    .then(sajikanKeMeja)
    .then(selesai=>{
        console.log(selesai);
    })
    .catch(ngadetBanget=>{
        console.log(ngadetBanget);
    })
}

sajikanKopi("robusta",80);

//** PROMISE ALL */
/**Method Promise.all() dapat menerima banyak promise (dalam bentuk array) pada parameternya. 
 * Kemudian method tersebut akan mengembalikan nilai seluruh hasil dari promise yang kita 
 * tetapkan dalam bentuk array. */

const pesenRobusta = () =>{
    return new Promise((berhasil)=>{
        setTimeout(()=>{
        berhasil("Kopi Robusta Siap Disajikan");
        },1000)
    });
}
const pesenArabica = () =>{
    return new Promise((berhasil)=>{
        setTimeout(()=>{
        berhasil("Kopi Arabica Siap Disajikan");
        },2000)
    });
}
const pesenLiberica = () =>{
    return new Promise((berhasil)=>{
        setTimeout(()=>{
        berhasil("Kopi Siap Disajikan");
        },3000)
    });
}

const order = [pesenArabica(),pesenLiberica(),pesenRobusta()];

Promise.all(order)
.then(tampilkan =>{
    console.log(tampilkan);
})


