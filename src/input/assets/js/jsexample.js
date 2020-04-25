const jsBtn = document.querySelector('#jsbutton');
const clearBtn = document.querySelector('#clearbutton');

jsBtn.addEventListener('click', function() {
    let count = Math.floor((Math.random() * 100) + 1);
    let p = document.querySelector('#outputArea');
    p.innerHTML = 'Hi User ' + count + ' !';
});

clearBtn.addEventListener('click', function() {
    let p = document.querySelector('#outputArea');
    p.innerHTML = "";
});