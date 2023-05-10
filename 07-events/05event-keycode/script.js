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

//Method1
// window.addEventListener('keydown', (e) => {
//   const insert = document.getElementById('insert');

//   insert.innerHTML = `
//         <div class="key">
//             ${e.key === ' ' ? 'Space' : e.key}
//             <small>e.key</small>
//         </div>

//         <div class="key">
//             ${e.keyCode}
//             <small>e.key</small>
//         </div>

//         <div class="key">
//             ${e.code}
//             <small>e.code</small>
//         </div>
//       `;
// });

//Method 2
function showKeyCodes(e) {
  const insert = document.getElementById('insert');
  insert.innerHTML = '';

  //im going to create map
  const keyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code,
  };

  //   console.log(keyCodes);
  for (let key in keyCodes) {
    const div = document.createElement('div');
    div.className = 'key';
    const small = document.createElement('small');

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText); //key
    div.appendChild(valueText); //actual value
    div.appendChild(small); //append the small element into the div element

    // the div into the DOM
    insert.appendChild(div);
  }
}

window.addEventListener('keydown', showKeyCodes);
