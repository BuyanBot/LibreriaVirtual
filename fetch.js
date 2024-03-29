let http = new XMLHttpRequest();
http.open("get", "books.json", true);
http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let books = JSON.parse(this.responseText);

        let output = "";

        for (let book of books){
            output += `
            <div class="book">
                <div class="title">
                    <div class="box-color" style="background-color:${book.color};"></div>
                    <p class="book-title">${book.title}</p>
                </div>
                <div class="autor">
                    <p>${book.autor}</p>
                </div>
                <div class="year">
                    <p>${book.year}</p>
                </div>
                <div class="file">
                    <a href="${book.file}">Descargar</a>
                </div>
            </div>`
        }

        document.querySelector(".books").innerHTML = output;
    }
}