

let openOffcanvas = document.querySelector(".link-offcanvas")
let closeOffcanvas = document.querySelector(".container")
let searchOffcanvas = document.querySelector(".search-offcanvas")
let offcanvasCard = document.querySelector(".offcanvas-card")
openOffcanvas.addEventListener('click', function (e) { 
    offcanvasCard.style.display = 'block'
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    searchOffcanvas.style.display = 'none'
})
closeOffcanvas.addEventListener('click', function (e) {
offcanvasCard.style.display = 'none'
searchOffcanvas.style.display = 'block'
modulCard.style.display = 'none'
})

let openIcon = document.querySelector(".openlink")
let closeIcon = document.querySelector(".closeicon")
let modulCard = document.querySelector(".modal")

openIcon.addEventListener('click', function (e) { 
    modulCard.style.display = 'block'
  
    })
closeIcon.addEventListener('click', function (e) {
    modulCard.style.display = 'none'
    
})
let usersCard = document.querySelector(".about-text")
let modalUsers = document.querySelector(".modal-users")


closeOffcanvas.addEventListener("click", function(e) {
        modalUsers.style.display = 'none'
    })
    let closeUsers = document.querySelector(".usersclose")
    closeUsers.addEventListener("click", function(e) {
        modalUsers.style.display = 'none'
    })


 let openAbout = document.querySelector(".click-about")
 openAbout.addEventListener('click', function(e) {
    modalUsers.style.display = 'block'
    modalUsers.style.left = "1000px"
    modalUsers.style.zIndex = "1"
    modalUsers.style.top = "0px"

 })
 usersCard.addEventListener('click', function (e) { 
    modalUsers.style.display = 'block'
    modalUsers.style.left = "500px"
    modalUsers.style.top = "50px"
    modalUsers.style.zIndex = "1"
    })
    
function myFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("search-ul");
    li = document.getElementsByClassName("search-li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("searchlink")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function txFunction(x) {
    x.classList.toggle("fa-toggle-on");
  }
