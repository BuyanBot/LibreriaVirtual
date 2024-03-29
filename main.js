document.querySelector("#search").addEventListener("input", filterList);

function filterList() {
    const searchInput = document.querySelector("#search");
    const filter  = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll(".book");

    listItems.forEach((item) =>{
        let text = item.textContent;
        if (text.toLowerCase().includes(filter.toLowerCase())) {
            item.style.display = ""; 
        }
        else {
            item.style.display = "none";
        }
    });
}