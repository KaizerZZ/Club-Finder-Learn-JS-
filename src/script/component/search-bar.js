class searchBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    set eventListener(event){
        this._eventListener = event;
        this.render();
    }
    get value() {
        return this.querySelector("#searchElement").value;
    }
    render(){
        this.innerHTML = `
        <div id="search-container" class="search-container">
            <input placeholder="Search football club" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>`
        /**Karena di dalam elemen ini terdapat <button> yang harus memiliki 
         * sebuah event ketika ia ditekan, maka kita harus menyediakan setter. 
         * Gunanya untuk menetapkan fungsi event agar dapat mudah diterapkan dari luar class SearchBar.
         * 
         * Lalu kita tidak membutuhkan deklarasi variabel buttonSearchElement karena 
         * sekarang kita dapat mengakses button pada komponen pencarian melalui searchElement. 
         * Jadi silakan hapus deklarasi variabel berikut:*/
        this.querySelector("#searchButtonElement").addEventListener("click", this._eventListener);
    }
}
customElements.define("search-bar",searchBar);
export default searchBar;