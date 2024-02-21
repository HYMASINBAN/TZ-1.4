let a = "";
let b = "";
let sing = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const action = ["-", "+", "*", "/"]

const out = document.querySelector(".out");

let btn = document.getElementById("btn")
let flag = true

btn.addEventListener("click", function (e) {
    if (flag) {
        if (!e.target.value) return
        if (e.target.value === '=') {
            document.querySelector(".out").value = eval(a)
            flag = false
            return
        }

        a += e.target.value;
        console.log(a)
        console.log(document.querySelector(".out"))
        document.querySelector(".out").value = a 
    } 
    else {
        a = ''
        a += e.target.value;
        document.querySelector(".out").value = a 
        flag = true
    }
})
