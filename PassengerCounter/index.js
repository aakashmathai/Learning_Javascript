//document.getElementById("count").innerText = 7
let countEl = document.getElementById("count")
let count = 0
function increment() {

    count = count + 1
    countEl.innerText = count
}