// https://www.toptal.com/developers/keycode

const key = document.querySelectorAll('.key')

window.addEventListener('keydown', function (e) {
    const textDisplay = e.key
    const textDisplay2 = e.keyCode
    const textDisplay3 = e.code

    key.forEach((item, index ) => {
        if (index === 0) {
            item.innerHTML = `${textDisplay} <small>e.key</small>`
        } else if (index === 1) {
            item.innerHTML = `${textDisplay2} <small>e.key</small>`
        } else {
            item.innerHTML = `${textDisplay3} <small>e.keyCode</small>`
        }
    })
});

// console.log();

