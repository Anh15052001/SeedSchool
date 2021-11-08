const bars = document.querySelector('.bars')
const list = document.querySelector('.nav-list')

bars.addEventListener("click", () => {
    list.classList.toggle('show')
})