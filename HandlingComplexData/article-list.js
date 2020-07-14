import "./article-data.js"
class ArticleList extends HTMLElement{
    set articleList(articles){
        this._articles = articles;
        this.render();
    }

    render(){
        this._articles.forEach(article => {
            const articleItemElement = document.createElement("article-item");
            // memanggil fungsi setter article() pada article-item.
            articleItemElement.articleData = article;
            this.appendChild(articleItemElement);
          })
    }
}
customElements.define("article-list",ArticleList);

/**
 * Pada kode di atas kita bisa melihat bahwa terdapat dua buah custom component yaitu <article-list> 
 * dan <article-item>. Pada article-list.js terdapat fungsi setter articles yang berfungsi untuk 
 * menyimpan nilai articles pada properti this._articles. 
 * Kemudian properti tersebut digunakan pada fungsi render() untuk ditampilkan satu persatu melalui <article-item>. */