const button = document.querySelector('form button')
const div = document.querySelector('form div:nth-child(2)')

button.addEventListener('click', (e) => {
    // alert('Button was clicked')
    console.log(button);
    e.stopPropagation()
});