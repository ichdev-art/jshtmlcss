document.getElementById("showBtn").addEventListener("click",function() {
    let text=document.getElementById("in").value
    document.getElementById("titre").innerText=text
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

function updateClass(className){
    let textcolor=document.getElementById("titre")
    textcolor.removeAttribute("class")
    textcolor.classList.add("text-center",className)
}
document.getElementById("prim").addEventListener("click", function(){
    updateClass("text-primary")
})
document.getElementById("secon").addEventListener("click", function(){
    updateClass("text-secondary")
})
document.getElementById("dang").addEventListener("click", function(){
    updateClass("text-danger")
})