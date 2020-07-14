class ImageFigure extends HTMLElement {
    // constructor() {
    //   super();
    //   console.log("constructed!")
    // }
    
    
    // connectedCallback() {
    //   console.log("connected!");
    // }
    
    
    // disconnectedCallback() {
    //   console.log("disconnected!");
    // }
    
    
    // adoptedCallback() {
    //   console.log("adopted!");
    // }
    

    connectedCallback() {
        this.src = this.getAttribute("src") || null;
        this.alt = this.getAttribute("alt") || null;
        this.caption = this.getAttribute("caption") || null;
        this.render();
      }
    render(){
        this.innerHTML = `
          <figure>
            <img src="${this.src}"
                alt="${this.alt}">
            <figcaption>${this.caption}</figcaption>
          </figure>
        `;
    }
    attributeChangedCallback(name, oldValue, newValue) {
      this[name] = newValue;
      this.render();
    }
    
    
    // digunakan untuk mengamati perubahan nilai attribute caption
    /* kita bisa menetapkan lebih dari satu atribut yang diamati.
       dengan memisahkan nama atribut menggunakan koma. Contoh: */
    // return ["caption", "title", "src", ...]
    static get observedAttributes() {
      return ["caption","src","alt"];
    }
}
    
export default ImageFigure;