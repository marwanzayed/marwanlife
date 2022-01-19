// Header
let logo = document.getElementById("logo");

logo.innerHTML = "Marwan Life";

// Footer
let footer = document.getElementById("footer");

footer.innerHTML = "Made With <3 By Marwan";

// control
let book = document.getElementById("books"),
   listView = document.getElementById("listView"),
   gridView = document.getElementById("gridView");

listView.onclick = () => {
    listView.classList.add("active");
    gridView.classList.remove("active");
    book.classList.add("list");
};

gridView.onclick = () => {
  gridView.classList.add("active");
  listView.classList.remove("active");
  book.classList.remove("list");
};
