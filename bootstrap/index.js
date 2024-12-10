document.getElementById("showBtn").addEventListener("click",function() {
    let text=document.getElementById("in").value
    document.getElementById("titre").innerText=text
})

document.getElementById("prim").addEventListener("click",function(){
    let textcolor=document.getElementById("titre")
    textcolor.classList.remove("text-primary","text-secondary", "text-success")
    textcolor.classList.add("text-primary")
})

document.getElementById("secon").addEventListener("click",function(){
    let textcolor=document.getElementById("titre")
    textcolor.classList.remove("text-primary","text-secondary", "text-success")
    textcolor.classList.add("text-secondary")
})

document.getElementById("succ").addEventListener("click",function(){
    let textcolor=document.getElementById("titre")
    textcolor.classList.remove("text-primary","text-secondary", "text-success")
    textcolor.classList.add("text-success")
})