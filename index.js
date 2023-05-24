let count = 0
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')

function increment() {
  count += 1
  countEl.textContent = count
}
// 1. Create a function, save(), which logs out the count when it's called
function save() {
  let saveCount = ' ' + count + ' - '
  saveEl.textContent += saveCount
  countEl.textContent = 0
  count = 0
  console.log(saveCount)
}
