const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
   }
    
const isCoffeeMakerReady = true;

//nodeJS style
//module.exports = { coffeeStock, isCoffeeMakerReady };
//console.log(module);

//ES6 style
export { coffeeStock, isCoffeeMakerReady };
/**Ketika menggunakan export default, 
 * export default coffeeStock;
 * kita dapat menggunakan penamaan apa saja ketika mendeklarasikan variabel dalam mengimpor nilainya.  */
