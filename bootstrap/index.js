document.getElementById("showBtn").addEventListener("click", function () {
    let text = document.getElementById("in").value
    document.getElementById("titre").innerText = text
})

// document.getElementById("prim").addEventListener("click",function(){
//     let textcolor=document.getElementById("titre")
//     // textcolor.classList.remove("text-primary","text-secondary", "text-danger")
//     textcolor.removeAttribute("class")
//     textcolor.classList.add("text-primary","text-center")
// })

// document.getElementById("secon").addEventListener("click",function(){
//     let textcolor=document.getElementById("titre")
//     // textcolor.classList.remove("text-primary","text-secondary", "text-danger")
//     textcolor.removeAttribute("class")
//     textcolor.classList.add("text-secondary","text-center")
// })

// document.getElementById("dang").addEventListener("click",function(){
//     let textcolor=document.getElementById("titre")
//     // textcolor.classList.remove("text-primary","text-secondary", "text-danger")
//     textcolor.removeAttribute("class")
//     textcolor.classList.add("text-danger","text-center")
// })

function textChangedColor(className) {
    let textcolor = document.getElementById("titre")
    textcolor.removeAttribute("class")
    textcolor.classList.add("text-center", className)
}
document.getElementById("prim").addEventListener("click", function () {
    textChangedColor("text-primary")
})
document.getElementById("secon").addEventListener("click", function () {
    textChangedColor("text-secondary")
})
document.getElementById("dang").addEventListener("click", function () {
    textChangedColor("text-danger")
})
document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("titre").innerText = ""
    document.getElementById("in").value = ""
})
document.getElementById("in").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        let text = document.getElementById("in").value;
        document.getElementById("titre").innerText = text;
    }
})
document.getElementById("in").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 27) {
        document.getElementById("titre").innerText = "";
        document.getElementById("in").value = "";
    }
})

document.getElementById("in").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 37) {
        textChangedColor("text-primary")
    }
})
document.getElementById("in").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 38) {
        textChangedColor("text-secondary")
    }
})
document.getElementById("in").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 39) {
        textChangedColor("text-danger")
    }
})