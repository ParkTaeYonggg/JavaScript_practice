window.onload = () => {
    let sizeToggle = document.getElementById("size");
    let sizeToggle2 = document.getElementById("size2");
    let idx = document.getElementsByClassName("content");
    let menu_main = document.getElementById("menubar_main");
    sizeToggle.onclick = function () {  
        for (let i = 0; i < idx.length; i++){
            idx[i].classList.toggle("active");
        }
        menu_main.classList.toggle("active1");
    }
    sizeToggle2.onclick = function () {  
        for (let i = 0; i < idx.length; i++){
            idx[i].classList.toggle("active");
        }
        menu_main.classList.toggle("active1");
    }
}