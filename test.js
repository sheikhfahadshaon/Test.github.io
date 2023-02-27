let counter = 0;

function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;

    if (counter % 10 === 0) {
        alert(`Count is now ${counter} `);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', count);
    document.querySelector('form').onsubmit = function () {
        const name = document.querySelector('#name').value;
        alert(`Hello, ${name}`);
    };
});

