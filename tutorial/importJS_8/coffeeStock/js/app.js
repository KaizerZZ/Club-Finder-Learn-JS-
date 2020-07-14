import { coffeeStock as stokKopi, isCoffeeMakerReady as mesinKopi } from "./state.js";

const tampilStok = stok =>{
    const dataKopi = document.querySelector("#coffee-stock-list")
    for (const type in stok) {
        if (stok.hasOwnProperty(type)) {
            const stokItemElement = document.createElement("li");
            stokItemElement.innerText = `${type}: ${stok[type]}`;
            dataKopi.appendChild(stokItemElement);
        }
    }
}

const pesenKopi = (type,berat) =>{
    return new Promise((lancar,ngadet)=>{
        if (mesinKopi) {
            if (stokKopi[type] >= berat) {
                lancar(`Kopi ${type} dipesan, mohon tunggu sebentar..........`);
            } else if(stokKopi[type] == 0){
                ngadet(`Maaf stok kopi ${type} sudah habis`);
            }
            else if(typeof stokKopi[type] == 'undefined'){
                ngadet(`Maaf stok kopi "${type}" tidak tersedia`);
            }
            else{
                ngadet(`Maaf stok kopi ${type} hanya ${stokKopi[type]} saja`);
            }
        } else {
            ngadet('Mesin Kopinya rusak nih perlu direstart 10 menit');
        }
    });
}

const coffeeOrderButtonEventHandler = async event => {
    const type = prompt("Kopi apa yang ingin dipesan?");
    const berat = prompt("Berapa miligrams?");
    try {
      const result = await pesenKopi(type, berat);
      alert(result);
    } catch (rejectionReason) {
      alert(rejectionReason);
    }
}
    
    
const coffeeOrderButtonElement = document.querySelector("#coffee-order-button");
coffeeOrderButtonElement.addEventListener("click", coffeeOrderButtonEventHandler)

tampilStok(stokKopi);