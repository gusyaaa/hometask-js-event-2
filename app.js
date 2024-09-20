let btns = document.querySelectorAll(".shopping-list button")

function textCross(){
    btns.forEach(a => {
        a.style.textDecoration = "line-through";
        a.removeEventListener("click", changeColor)
    });
}

function changeColor(){
    btns.forEach(a =>{
        a.style.color = "blue"
    })
}
btns.forEach(btn =>{
    btn.addEventListener("click", textCross)
    btn.addEventListener("click", changeColor)
})
