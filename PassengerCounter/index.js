//document.getElementById("count").innerText = 7
let countEl = document.getElementById("count")
let savedCountsP = document.getElementById("saved_counts_p")
let count = 0

function increment() {

    count += 1
    countEl.innerText = count
}

function save() {
    let text = savedCountsP.textContent
    if (text === "") {
        savedCountsP.textContent = count
    } else {
        savedCountsP.textContent = text + " + " + count
    }
    count = 0
    countEl.textContent = count
}