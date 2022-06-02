const btn2 = document.getElementById("btn2")
const btn = document.getElementById("btn")
const text = document.getElementById("reaction")

function rand(){
    return (10000-1000)*Math.random()+1000
}


btn2.addEventListener("click", () => {
    setTimeout(() => {
        //btn.style.background = 'green';
        text.innerText = "hi";
    }, 1000);
});