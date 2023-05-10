
const listItems = document.querySelector('li')

listItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target);
    })
})